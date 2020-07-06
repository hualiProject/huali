//! model的类型
import { EffectsCommandMap } from "dva";
import { AnyAction, Reducer } from "redux";
interface StateType {
  [propName: string]: any;
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & {
    select: <T>(func: (state: StateType) => T) => T;
  }
) => void;

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    [propsName:string]: Effect;
  };
  reducers: {
    [propsName:string]: Reducer<StateType>;
  };
}

export interface Meta<T>{
  [propName:string]: T
}
export interface Routes {
  path: string,
  component?: Function,
  redirect?: string,
  children?: Routes,
  name?: string,
  meta?: Meta<string>
}

export interface Headers {
  'Content-Type'?: string,
  [propName: string]: any
}

export interface Data{
  [propName: string]: any
}

export interface Options {
  url: string,
  method?: string,
  type?: string,
  data?: Data,
  headers?: Headers 
}

export interface Request {
  (options: Options): Promise<any>
}

export interface LoginApi {
  (data: any): Promise<any>
}

export interface Actions {
  type: string,
  payload?: any
}
export interface S{
  [propName: string]: any
}

export interface Store {
  namespaced: boolean,
  state: S,
  actions: S,
  mutations: S
}

export interface GetCookie {
  (name?: string|undefined ): string | undefined
}
export interface SetCookie{
  (name:string,value:string,opts:Opts):string
}

export interface Opts{
  maxAge?: number,
  path?:string,
  domain?:string,
  secure?:string
}


export interface addShopApi {
  (data: any): Promise<any>
}

export interface ShopListData{
  latitude: number,
  longitude: number,
  offset: number
  limit: number
}

export interface shopListApi {
  (data: ShopListData):Promise<any>
}

export interface cityApi {
  ():Promise<any>
}

// export interface homeUlApi {
//     (data:any):Promise<any>
// }