import { $host } from './index';


export const fetchPosts = async ( page, limit = 5)=>{
  const { data } = await $host.get(`posts?_page=${page}&_limit=${limit}`);
  return data;
}