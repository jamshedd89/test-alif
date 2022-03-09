import { makeAutoObservable } from 'mobx';

export default class PostStore{
  constructor(){
    this._posts = [];
    this._users = [];
    this._comments = [];
    this._selectedPost = {};
    this._selectedUser = {};
    this._selectedComment = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setPosts(posts){
    this._posts = posts;
  }

  setUsers(users){
    this._users = users;
  }

  setComments(comments){
    this._comments = comments;
  }

  setSelectedPost(post){
    this.setPage(1);
    this._selectedPost = post;
  }

  setSelectedUser(user){
    this.setPage(1);
    this._selectedUser = user;
  }

  setSelectedComments(comment){
    this.setPage(1);
    this._selectedComment = comment;
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

  get users(){
    return this._users;
  }

  get comments(){
    return this._comments;
  }

  get selectedPost(){
    return this._selectedPost;
  }

  get selectedUser(){
    return this._selectedUser;
  }

  get selectedComment(){
    return this._selectedComment;
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
