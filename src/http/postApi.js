import { $host } from './index';


export const fetchPosts = async ( userId, page, limit )=>{
  let url = '';
  if(!userId) url = `posts?_page=${page}&_limit=${limit}&_embed=comments`; 
  else url = `posts?userId=${userId}&_page=${page}&_limit=${limit}&_embed=comments`;

  const { data } = await $host.get(url);
  return data;
}


export const fetchOnePost = async (id)=>{
  const { data } = await $host.get(`posts/${id}`);
  return data;
}