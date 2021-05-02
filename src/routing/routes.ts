import React from 'react';
import Home from 'pages/home';
import SignIn from 'pages/sign-in';
import SignUp from 'pages/sign-up';
import Posts from 'pages/posts';
import PostsCreate from 'pages/posts/create';

export interface BaseRouteConfig {
  path: string;
  component: React.FC;
  exact?: boolean;
  private?: boolean;
}

export interface RouteConfig extends BaseRouteConfig {
  children?: BaseRouteConfig[];
}

const routes: RouteConfig[] = [
  { path: '/', component: Home, exact: true, private: true },
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
  {
    path: '/posts',
    component: Posts,
    children: [
      { path: '/', component: Posts, exact: true },
      { path: '/create', component: PostsCreate }],
  },
];

export default routes;
