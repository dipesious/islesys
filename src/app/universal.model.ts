
export interface IconModel {
  id:string;
  type:number|undefined; 
  fill:string; tone:string; cat:string;
  
  by:string; contact:string; dial_code:string;
  name: string; data:any;
  active:boolean
  sin:any
};

export interface mapModel {
  id:string,
  type:number|undefined, 
  about:string, info:string,
  
  by:string, contact:string, dial_code:string;
  name: string, data:any,
  active:boolean,
  sin:any;
};

export interface PaletteModel {
    id:string;
    type:string;
    //type:number|undefined; 
    c1:string;  c2:string;  c3:string;  c4:string;
    //about:string; info:string; 
  
    by:string; contact:string; dial_code:string;
    name: string; //data:any;
    active:boolean;
    sin:any
  };

export interface gradientModel {
  id:string;
  type:number|undefined; 
  demoCSS:string; about:string; info:string; 

  by:string; contact:string; dial_code:string;
  name: string; data:any;
  active:boolean;
  sin:any
};

export interface UserModel {
  uid: string; 
  name: string; display:string;  
  phone: string; iso: string; coin:string; 
  email: string;  emailV:boolean; emails: string[],
  key:string;

  time_sin:any; time_upd:any; time_log:any; 
  state: boolean;
}
