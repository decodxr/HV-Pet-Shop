import { ChevronRight } from "lucide-react";
import { absoluteUrl } from "@/lib/site";

type Item={name:string;href?:string};

export function Breadcrumbs({items}:{items:Item[]}) {
  const all=[{name:"Início",href:"/"},...items];
  const schema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:all.map((item,index)=>({"@type":"ListItem",position:index+1,name:item.name,item:item.href?absoluteUrl(item.href):undefined}))};
  return <><nav aria-label="Navegação estrutural" className="mb-6"><ol className="flex flex-wrap items-center gap-1 text-sm text-muted">{all.map((item,index)=><li key={`${item.name}-${index}`} className="flex items-center gap-1">{index>0&&<ChevronRight aria-hidden className="size-3.5"/>}{item.href?<a className="rounded-sm hover:text-forest focus-visible:ring-2 focus-visible:ring-clay" href={item.href}>{item.name}</a>:<span aria-current="page" className="text-ink">{item.name}</span>}</li>)}</ol></nav><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></>;
}
