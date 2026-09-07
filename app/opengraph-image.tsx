import { ImageResponse } from "next/og";

export const alt="HV Pet Shop — cuidado de verdade em Campo Mourão";
export const size={width:1200,height:630};
export const contentType="image/png";

export default function Image(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",background:"#203E36",color:"#fff",padding:"72px",fontFamily:"serif"}}><div style={{display:"flex",fontSize:36}}>HV <span style={{color:"#D58C5B",marginLeft:10}}>Pet Shop</span></div><div style={{display:"flex",flexDirection:"column"}}><div style={{fontSize:78,lineHeight:1.02,maxWidth:930}}>Cuidado de verdade para quem faz parte da família.</div><div style={{fontFamily:"sans-serif",fontSize:25,color:"#EFE9DF",marginTop:30}}>Campo Mourão · Paraná</div></div></div>,size)}
