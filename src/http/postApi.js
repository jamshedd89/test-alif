import { $host } from './index';


export const fetchPosts = async ( userId, page, limit )=>{
  let url = '';
  if(!userId) url = `posts?_page=${page}&_limit=${limit}`; 
  else url = `posts?userId=${userId}&_page=${page}&_limit=${limit}`;

  const { data } = await $host.get(url);
  return data;
}


export const fetchOnePost = async (id)=>{
  const { data } = await $host.get(`posts/${id}/?_embed=comments`);
  return data;
}


export const searchPost = async (text)=>{
  const { data } = await $host.get(`posts?q=${text}`);
  return data;
}