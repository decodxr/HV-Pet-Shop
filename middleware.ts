import {NextResponse,type NextRequest} from "next/server";
import {createServerClient} from "@supabase/ssr";

export async function middleware(request:NextRequest) {
  if(request.nextUrl.pathname==="/admin/login") return NextResponse.next();
  if(!process.env.NEXT_PUBLIC_SUPABASE_URL||!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return NextResponse.next();
  let response=NextResponse.next({request});
  const supabase=createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,{cookies:{getAll:()=>request.cookies.getAll(),setAll(cookies){cookies.forEach(({name,value})=>request.cookies.set(name,value));response=NextResponse.next({request});cookies.forEach(({name,value,options})=>response.cookies.set(name,value,options))}}});
  const {data:{user}}=await supabase.auth.getUser();
  if(!user)return NextResponse.redirect(new URL("/admin/login",request.url));
  const {data:profile}=await supabase.from("profiles").select("role").eq("id",user.id).single();
  if(profile?.role!=="admin")return NextResponse.redirect(new URL("/",request.url));
  return response;
}

export const config={matcher:["/admin/:path*"]};
