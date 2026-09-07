import type {Metadata} from "next";
import {PageShell} from "@/components/page-shell";
import {Container,Section,Button} from "@/components/ui";
import {products,siteSettings} from "@/lib/data";
import {ProductCard} from "@/components/cards";
import {whatsappUrl} from "@/lib/whatsapp";

export const metadata:Metadata={title:{absolute:"Produtos para Pets | HV Pet Shop"},description:"Consulte o catálogo e a disponibilidade de produtos para pets da HV Pet Shop em Campo Mourão.",alternates:{canonical:"/produtos"},openGraph:{url:"/produtos",title:"Produtos para Pets | HV Pet Shop",description:"Consulte produtos para pets diretamente com a HV Pet Shop.",images:[{url:"/opengraph-image",width:1200,height:630,alt:"HV Pet Shop em Campo Mourão"}]}};
export default function Page(){return <PageShell breadcrumbs={[{name:"Produtos"}]} eyebrow="Catálogo" title="Escolhas para o bem-estar do seu pet." copy="Nosso catálogo está sendo preparado. O estoque exibido aqui será sempre administrado pela equipe HV."><Section><Container>{products.length?<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{products.map(product=><ProductCard product={product} key={product.id}/>)}</div>:<div className="rounded-card bg-white p-10 text-center"><h2 className="font-serif text-3xl">Novidades em breve.</h2><p className="mx-auto mt-3 max-w-lg text-muted">Enquanto isso, fale com a gente e consulte os produtos disponíveis na loja.</p><Button href={whatsappUrl("Olá, HV Pet Shop! Vi a página de produtos no site e gostaria de consultar a disponibilidade.")} eventName="whatsapp_click" eventLabel="products_empty" className="mt-6">Consultar produtos</Button><p className="mt-3 text-xs text-muted">{siteSettings.responsePromise}</p></div>}</Container></Section></PageShell>}
