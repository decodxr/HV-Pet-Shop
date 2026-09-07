import type { CareMoment,Faq,Product,Review,Service } from "@/types";
export const business={name:"HV Pet Shop",phone:"(44) 99956-8238",whatsapp:"5544999568238",instagram:"hv_petshop",address:"R. Juscelino Kubitschek, 964",district:"Jardim Francisco Ferreira Albuquerque",city:"Campo Mourão",state:"PR",zip:"87309-089"};
export const hours=[{day:1,label:"Segunda",open:"08:00",close:"18:00"},{day:2,label:"Terça",open:"08:00",close:"18:00"},{day:3,label:"Quarta",open:"08:00",close:"18:00"},{day:4,label:"Quinta",open:"08:00",close:"18:00"},{day:5,label:"Sexta",open:"08:00",close:"18:00"},{day:6,label:"Sábado",open:"08:00",close:"14:00"},{day:0,label:"Domingo",open:null,close:null}];
// Conteúdo demonstrativo: substitua no painel assim que os serviços oficiais forem confirmados.
export const services:Service[]=[{id:"1",name:"Cuidados personalizados",slug:"cuidados-personalizados",description:"Converse com a HV para conhecer os cuidados disponíveis para o seu pet.",featured:true,active:true,order:1,category:"Cuidados"},{id:"2",name:"Higiene e bem-estar",slug:"higiene-bem-estar",description:"Consulte as opções de atendimento e encontre o cuidado ideal.",featured:true,active:true,order:2,category:"Higiene"},{id:"3",name:"Estética com carinho",slug:"estetica-com-carinho",description:"Detalhes feitos com calma, atenção e respeito ao ritmo de cada animal.",featured:true,active:true,order:3,category:"Estética"}];
export const products:Product[]=[];
export const reviews:Review[]=[{id:"1",author:"Julia Simonetti",text:"Helen é maravilhosa, super cuidadosa e caprichosa com os animais.",rating:5,active:true,order:1},{id:"2",author:"Alvaro Cavalheiro",text:"Atendimento excelente, muito amor pelos bichinhos.",rating:5,active:true,order:2}];
export const faqs:Faq[]=[
  {id:"1",question:"Onde fica a HV Pet Shop?",answer:"Estamos na R. Juscelino Kubitschek, 964, Jardim Francisco Ferreira Albuquerque, em Campo Mourão - PR.",active:true,order:1},
  {id:"2",question:"Como entro em contato com a HV?",answer:"Você pode ligar ou enviar uma mensagem pelo WhatsApp no número (44) 99956-8238.",active:true,order:2},
  {id:"3",question:"Qual é o horário de atendimento?",answer:"Atendemos de segunda a sexta, das 08:00 às 18:00, e aos sábados, das 08:00 às 14:00. Aos domingos, estamos fechados.",active:true,order:3},
  {id:"4",question:"Como posso consultar os serviços disponíveis?",answer:"Fale diretamente com a HV pelo WhatsApp. Assim, você recebe informações atuais sem que o site apresente serviços ainda não confirmados.",active:true,order:4},
  {id:"5",question:"Como posso consultar os produtos disponíveis?",answer:"A disponibilidade pode ser consultada pelo catálogo ou diretamente no WhatsApp da HV.",active:true,order:5},
  {id:"6",question:"Posso falar diretamente pelo WhatsApp?",answer:"Sim. Os botões de contato do site abrem uma conversa com a HV e uma mensagem já preparada.",active:true,order:6},
];
// Exibidos somente após o cadastro de registros e imagens reais no painel.
export const careMoments:CareMoment[]=[];
export const siteSettings={responsePromise:"Responderemos assim que possível durante nosso horário de atendimento.",teamPhotoUrl:null as string|null,defaultOgImage:"/opengraph-image"};
export const images={hero:"https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1800&q=88",care:"https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1400&q=85",feature:"https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=1800&q=85"};
