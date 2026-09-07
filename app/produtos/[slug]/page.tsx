import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {products} from "@/lib/data";
import {PageShell} from "@/components/page-shell";
import {Container,Section,Button} from "@/components/ui";
import {whatsappUrl} from "@/lib/whatsapp";

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return products.map(product=>({slug:product.slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const product=products.find(item=>item.slug===slug);if(!product)return{title:"Produto não encontrado"};const title=`${product.name} | HV Pet Shop`;const description=product.shortDescription||`Consulte informações e disponibilidade de ${product.name} na HV Pet Shop.`;return{title:{absolute:title},description,alternates:{canonical:`/produtos/${product.slug}`},openGraph:{title,description,url:`/produtos/${product.slug}`,type:"website",images:product.images[0]?[{url:product.images[0],alt:product.name}]:[{url:"/opengraph-image",alt:"HV Pet Shop"}]},twitter:{card:"summary_large_image",title,description,images:product.images[0]?[product.images[0]]:["/opengraph-image"]}}}
export default async function Page({params}:Props){const {slug}=await params;const product=products.find(item=>item.slug===slug);if(!product)notFound();return <PageShell breadcrumbs={[{name:"Produtos",href:"/produtos"},{name:product.name}]} eyebrow={product.category} title={product.name} copy={product.shortDescription}><Section><Container><p className="max-w-2xl leading-7 text-muted">{product.description}</p><Button href={whatsappUrl(`Olá! Vi o produto ${product.name} no site da HV Pet Shop e gostaria de mais informações.`)} eventName="product_inquiry" eventLabel={product.name} className="mt-8">Consultar produto</Button></Container></Section></PageShell>}
