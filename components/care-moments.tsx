import Image from "next/image";
import type { CareMoment } from "@/types";
import { Container,Section,SectionHeader } from "@/components/ui";

export function CareMoments({items}:{items:CareMoment[]}) {
  const visible=items.filter(item=>item.active).sort((a,b)=>a.order-b.order);
  if(!visible.length) return null;
  return <Section><Container><SectionHeader eyebrow="Momentos HV" title="Pets que passaram por aqui." copy="Registros reais de cuidado compartilhados pela HV."/><div className="mt-12 grid gap-5 md:grid-cols-2">{visible.map(item=><article key={item.id} className="overflow-hidden rounded-card bg-white"><div className="relative aspect-[4/3]"><Image fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" src={item.image} alt={item.petName?`${item.petName} em um momento de cuidado na HV Pet Shop`:item.title}/></div><div className="p-6"><h3 className="font-serif text-2xl">{item.title}</h3>{item.description&&<p className="mt-2 text-muted">{item.description}</p>}{(item.petName||item.service)&&<p className="mt-4 text-sm font-bold text-forest">{[item.petName,item.service].filter(Boolean).join(" · ")}</p>}</div></article>)}</div></Container></Section>;
}
