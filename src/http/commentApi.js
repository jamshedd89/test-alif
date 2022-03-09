import { $host } from './index';


export const fetchAllComments = async ()=>{
  const { data } = await $host.get(`comments`);
  return data;
}


export const fetchOneComment = async (id)=>{
  const { data } = await $host.get(`comments/${id}`);
  return data;
 }