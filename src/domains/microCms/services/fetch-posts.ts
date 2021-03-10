import ky, { Options } from 'ky';
import { Post, isPost } from '../models/post';
import isBlogResult from '../models/blog-result';
import DEFAULT_API_OPTIONS from './config';

/**
 * ブログ記事を1つだけ取得する関数
 * @param contentId 記事ID
 * @param options kyのオプション
 */
const fetchPost = async (
  contentId: string,
  options?: Options,
): Promise<Post> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(`blog/${contentId}`, mergedOptions);
  const post = (await response.json()) as unknown;

  if (!isPost(post)) {
    throw Error('API Type Error!');
  }

  return post;
};

/**
 * ブログ記事をすべて取得する関数
 * TODO: 件数の指定を行えるようにする
 * @param options kyのオプション
 */
const fetchPosts = async (options?: Options): Promise<Post[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get('blog', mergedOptions);
  const posts = (await response.json()) as unknown;

  if (!isBlogResult(posts)) {
    throw Error('API Type Error!');
  }

  return posts.contents;
};

export { fetchPost, fetchPosts };
