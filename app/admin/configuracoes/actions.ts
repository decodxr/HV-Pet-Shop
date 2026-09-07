"use server";

import {redirect} from "next/navigation";
import {createClient} from "@/lib/supabase/server";

export async function saveSettings(formData:FormData) {
  const supabase=await createClient();
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) redirect("/admin/login");
  const {data:profile}=await supabase.from("profiles").select("role").eq("id",user.id).single();
  if(profile?.role!=="admin") redirect("/");
  const values:Record<string,unknown>={response_promise:String(formData.get("response_promise")||""),seo:{title:String(formData.get("seo_title")||""),description:String(formData.get("seo_description")||"")},updated_at:new Date().toISOString()};
  for(const [field,column] of [["team_photo","team_photo_url"],["og_image","default_og_image_url"]] as const){const file=formData.get(field);if(file instanceof File&&file.size){if(file.size>5*1024*1024||!["image/jpeg","image/png","image/webp"].includes(file.type))redirect("/admin/configuracoes?error=upload");const extension=file.name.split(".").pop()?.toLowerCase()||"webp";const path=`settings/${field}-${crypto.randomUUID()}.${extension}`;const {error}=await supabase.storage.from("site").upload(path,file,{contentType:file.type});if(error)redirect("/admin/configuracoes?error=upload");values[column]=supabase.storage.from("site").getPublicUrl(path).data.publicUrl}}
  const {data:current}=await supabase.from("business_settings").select("id").limit(1).maybeSingle();
  const result=current?await supabase.from("business_settings").update(values).eq("id",current.id):await supabase.from("business_settings").insert({...values,name:"HV Pet Shop"});
  redirect(result.error?"/admin/configuracoes?error=save":"/admin/configuracoes?saved=1");
}
