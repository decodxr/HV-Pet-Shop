import type {Metadata} from "next";
import Image from "next/image";
import {PageShell} from "@/components/page-shell";
import {Container,Section} from "@/components/ui";
import {siteSettings} from "@/lib/data";

export const metadata:Metadata={title:{absolute:"Sobre a HV Pet Shop | Campo Mourão - PR"},description:"Conheça o jeito próximo, cuidadoso e atencioso da HV Pet Shop em Campo Mourão.",alternates:{canonical:"/sobre"},openGraph:{url:"/sobre",title:"Sobre a HV Pet Shop | Campo Mourão - PR",description:"Conheça o cuidado humano e atencioso da HV Pet Shop.",images:[{url:"/opengraph-image",width:1200,height:630,alt:"HV Pet Shop em Campo Mourão"}]}};
export default function Page(){return <PageShell breadcrumbs={[{name:"Sobre a HV"}]} eyebrow="Sobre a HV" title="Um atendimento feito com presença e carinho."><Section><Container className={siteSettings.teamPhotoUrl?"grid gap-10 lg:grid-cols-2":"max-w-3xl"}>{siteSettings.teamPhotoUrl&&<div className="relative min-h-[520px] overflow-hidden rounded-card"><Image fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" src={siteSettings.teamPhotoUrl} alt="Helen, responsável pelo atendimento da HV Pet Shop"/></div>}<div className="self-center text-lg leading-8 text-muted"><p>A HV acredita que confiança se conquista nos detalhes: na atenção, na calma e no respeito ao jeito de cada animal.</p><p className="mt-5">A apresentação oficial da pessoa responsável e sua fotografia serão exibidas aqui quando forem cadastradas pela HV.</p></div></Container></Section></PageShell>}
