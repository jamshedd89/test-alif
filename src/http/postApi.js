import { $host } from './index';


export const fetchPosts = async ( page, limit )=>{
  const { data } = await $host.get(`posts?_page=${page}&_limit=${limit}`);
  return data;
}


export const fetchOnePost = async (id)=>{
  const { data } = await $host.get(`posts/${id}`);
  return data;
 }