import { Post, isPosts } from './post';

/**
 * 複数のブログ記事をGETしてきたときのJSONの型定義
 */
type BlogResult = {
  contents: Post[];
  totalCount: number;
  offset: number;
  limit: number;
};

const isBlogResult = (arg: unknown): arg is BlogResult => {
  const result = arg as BlogResult;

  return (
    isPosts(result?.contents) &&
    typeof result?.totalCount === 'number' &&
    typeof result?.offset === 'number' &&
    typeof result?.limit === 'number'
  );
};

export default isBlogResult;
