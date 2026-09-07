import type {Metadata} from "next";
import {PageShell} from "@/components/page-shell";
import {Container,Section} from "@/components/ui";
import {ServiceCard} from "@/components/cards";
import {services} from "@/lib/data";

export const metadata:Metadata={title:{absolute:"Serviços | HV Pet Shop em Campo Mourão"},description:"Consulte os cuidados disponíveis para seu pet na HV Pet Shop, com atendimento atencioso em Campo Mourão.",alternates:{canonical:"/servicos"},openGraph:{url:"/servicos",title:"Serviços | HV Pet Shop em Campo Mourão",description:"Consulte os cuidados disponíveis para seu pet na HV Pet Shop.",images:[{url:"/opengraph-image",width:1200,height:630,alt:"HV Pet Shop em Campo Mourão"}]}};
export default function Page(){return <PageShell breadcrumbs={[{name:"Serviços"}]} eyebrow="Cuidados" title="Cuidado respeitoso, em cada detalhe." copy="A relação oficial de serviços pode ser atualizada pelo painel. Fale conosco para consultar a disponibilidade."><Section><Container><div className="grid gap-5 md:grid-cols-3">{services.map((service,index)=><ServiceCard key={service.id} service={service} index={index}/>)}</div></Container></Section></PageShell>}
