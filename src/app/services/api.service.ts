import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;


interface Category {
  id: string;
  name: string;
  _description_rendered: string;
  description: string;
  order: number;
  auth_req: boolean;
}

interface Subcategory {
  id: string;
  name: string;
  _description_rendered: string;
  description: string;
  order: number;
  admin_req: boolean;
  auth_req: boolean;
  parent: string;
}

interface Thread {
  id: string;
  created: string;
  modified: string;
  title: string;
  _content_rendered: string;
  content: string;
  pinned: boolean;
  closed: boolean;
  tags: string;
  user: string;
  category: string;
  upvoted_by: string;
  downvoted_by: string;
}

interface Post {
  id: string;
  created: string;
  modified: string;
  _content_rendered: string;
  content: string;
  user: string;
  thread: string;
  upvoted_by: string;
  downvoted_by: string;
}

interface Conversation {
  id: string;
  created: string;
  modified: string;
  subject: string;
  users: string[];
  unread_by: string[];
}

interface Message {
  id: string;
  created: string;
  modified: string;
  _content_rendered: string;
  content: string;
  user: string;
  conversation: string;
}

interface Shout {
  id: string;
  user: string;
  username: string;
  rendered_username: string;
  _content_rendered: string;
  content: string;
  created: string;
  modified: string;
}

interface User {
  id: string;
  rendered_username: string;
  last_login: string;
  is_superuser: string;
  created: string;
  modified: string;
  email: string;
  username: string;
  image: string;
  _signature_rendered: string;
  signature: string;
  gender: string;
  birthday: string;
  is_banned: boolean;
  username_modifier: string;
  rank: number;
}

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(API_URL + '/categories');
  }

  public getAllSubcategories(): Observable<Subcategory[]> {
    return this.http
      .get<Subcategory[]>(API_URL + '/subcategories');
  }

  public getAllThreads() {

  }

  public getAllPosts() {

  }

  public getAllConversations() {

  }

  public getAllMessage() {

  }

  public getAllShouts() {

  }

  public getAllUsers() {

  }
}