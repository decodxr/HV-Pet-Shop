import type {Metadata} from "next";
import {PageShell} from "@/components/page-shell";
import {Container,Section} from "@/components/ui";
import {ContactForm} from "@/components/contact-form";
import {BusinessHours,BusinessStatus} from "@/components/business/business";
import {business,siteSettings} from "@/lib/data";

export const metadata:Metadata={title:{absolute:"Contato e Localização | HV Pet Shop"},description:"Fale com a HV Pet Shop pelo WhatsApp ou encontre a loja no Jardim Francisco Ferreira Albuquerque, em Campo Mourão.",alternates:{canonical:"/contato"},openGraph:{url:"/contato",title:"Contato e Localização | HV Pet Shop",description:"Entre em contato e encontre a HV Pet Shop em Campo Mourão.",images:[{url:"/opengraph-image",width:1200,height:630,alt:"HV Pet Shop em Campo Mourão"}]}};
export default function Page(){return <PageShell breadcrumbs={[{name:"Contato"}]} eyebrow="Contato" title="Vamos conversar sobre seu pet?"><Section><Container className="grid gap-10 lg:grid-cols-2"><div className="rounded-card bg-white p-7 sm:p-10"><ContactForm/><p className="mt-4 text-center text-xs text-muted">{siteSettings.responsePromise}</p></div><div className="rounded-card bg-sand p-7 sm:p-10"><BusinessStatus/><address className="my-8 not-italic leading-7">{business.address}<br/>{business.district}<br/>{business.city} - {business.state}, {business.zip}<br/><a data-analytics-event="phone_click" className="inline-flex min-h-11 items-center font-bold text-forest" href="tel:+5544999568238">{business.phone}</a></address><BusinessHours/></div></Container></Section></PageShell>}
