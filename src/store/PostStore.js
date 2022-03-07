import { makeAutoObservable } from 'mobx';

export default class PostStore{
  constructor(){
    this._posts = [];
    this._selectedPost = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setPosts(posts){
    this._posts = posts;
  }

  setSelectedPost(post){
    this.setPage(1);
    this._selectedPost = post;
  }


  setPage(page){
    this._page = page;
  }

  setTotalCount(count){
    this._totalCount = count;
  }

  get posts(){
    return this._posts;
  }

  get selectedPost(){
    return this._selectedPost;
  }

  get totalCount(){
    return this._totalCount;
  }

  get page(){
    return this._page;
  }

  get limit(){
    return this._limit;
  }
}
