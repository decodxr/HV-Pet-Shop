export type Service={id:string;name:string;slug:string;description:string;image?:string;price?:number;duration?:string;featured:boolean;active:boolean;order:number;icon?:string;category:string};
export type Product={id:string;name:string;slug:string;description:string;shortDescription:string;price?:number;promotionalPrice?:number;category:string;brand?:string;images:string[];featured:boolean;active:boolean;stockStatus:"available"|"on_request"|"unavailable";createdAt:string;updatedAt:string};
export type Review={id:string;author:string;text:string;rating:number;active:boolean;order:number};
export type Faq={id:string;question:string;answer:string;active:boolean;order:number};
export type CareMoment={id:string;title:string;description?:string;image:string;beforeImage?:string;afterImage?:string;petName?:string;service?:string;featured:boolean;active:boolean;order:number};
