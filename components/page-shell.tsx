import { Breadcrumbs } from "./breadcrumbs";
import { Container,SectionHeader } from "./ui";

export function PageShell({eyebrow,title,copy,children,breadcrumbs}:{eyebrow:string;title:string;copy?:string;children:React.ReactNode;breadcrumbs?:{name:string;href?:string}[]}) {
  return <><section className="bg-sand pb-16 pt-36"><Container>{breadcrumbs&&<Breadcrumbs items={breadcrumbs}/>}<SectionHeader eyebrow={eyebrow} title={title} copy={copy}/></Container></section>{children}</>;
}
