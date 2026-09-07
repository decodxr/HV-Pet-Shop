import { ChevronDown } from "lucide-react";
import type { Faq } from "@/types";

export function FaqSection({items}:{items:Faq[]}) {
  const visible=items.filter(item=>item.active).sort((a,b)=>a.order-b.order);
  if(!visible.length) return null;
  const schema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:visible.map(item=>({"@type":"Question",name:item.question,acceptedAnswer:{"@type":"Answer",text:item.answer}}))};
  return <><div className="divide-y divide-deep/10 rounded-card bg-white px-6 sm:px-9">{visible.map(item=><details className="group py-6" key={item.id}><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-bold focus-visible:outline-2 focus-visible:outline-clay">{item.question}<ChevronDown aria-hidden className="size-5 shrink-0 text-clay transition group-open:rotate-180"/></summary><p className="max-w-3xl pb-2 pr-8 pt-3 leading-7 text-muted">{item.answer}</p></details>)}</div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></>;
}
