import { $host } from './index';


export const fetchAllUser = async ()=>{
  const { data } = await $host.get(`users`);
  return data;
}