import { business } from "./data";
export const whatsappUrl=(message=`Olá, HV Pet Shop! Encontrei vocês pelo site e gostaria de mais informações.`)=>`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
