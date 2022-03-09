import Posts from "./pages/Posts";
import ViewPost from "./pages/ViewPost";

import { POST_ROUTE, POST_VIEW } from './utils/consts';



export const routes = [
  {
    path: POST_ROUTE,
    Component: Posts
  },
  {
    path: POST_VIEW+'/:id',
    Component: ViewPost
  },
];