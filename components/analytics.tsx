"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
}

export function trackEvent(name:string, parameters:Record<string,string>={}) {
  window.gtag?.("event", name, parameters);
}

export function Analytics() {
  const id=process.env.NEXT_PUBLIC_GA_ID;
  useEffect(()=>{
    if(!id) return;
    const listener=(event:MouseEvent)=>{
      const element=(event.target as HTMLElement).closest<HTMLElement>("[data-analytics-event]");
      if(element?.dataset.analyticsEvent) trackEvent(element.dataset.analyticsEvent,{link_url:(element as HTMLAnchorElement).href||"",item_name:element.dataset.analyticsLabel||""});
    };
    document.addEventListener("click",listener);
    return()=>document.removeEventListener("click",listener);
  },[id]);
  if(!id) return null;
  return <><Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive"/><Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});`}</Script></>;
}
