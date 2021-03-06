import { WPPost } from "./wptypes";

export const LOADING_ALL_POSTS = "LOADING_ALL_POSTS";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const SINGLE_POST_ACTION = "SINGLE_POST_ACTION";
export const SEARCH_POSTS_ACTION = "SEARCH_POSTS_ACTION";

interface LoadingPostsAction {
  type: typeof LOADING_ALL_POSTS;
  postsLoading: boolean;
}

interface GetAllPostsAction {
  type: typeof GET_ALL_POSTS;
  posts?: [WPPost];
  postsLoading: boolean;
  error?: Error | any | null;
}

interface GetSinglePostAction {
  type: typeof SINGLE_POST_ACTION;
  post?: WPPost;
  error?: Error | any | null;
  postsLoading: boolean;
}

interface SearchPostsAction {
  type: typeof SEARCH_POSTS_ACTION;
  posts?: [WPPost];
  postsLoading: boolean;
  error?: Error | any | null;
}

export type PostActionTypes = LoadingPostsAction | GetAllPostsAction | GetSinglePostAction | SearchPostsAction;
