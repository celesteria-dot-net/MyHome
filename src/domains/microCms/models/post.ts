export type Post = {
  id: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  summary?: string;
  thumbnail?: Thumbnail;
};

export type Thumbnail = {
  url: string;
  height: number;
  width: number;
};

const isPost = (arg: unknown): arg is Post => {
  const post = arg as Post;

  return (
    typeof post?.id === 'string' &&
    typeof post?.publishedAt === 'string' &&
    typeof post?.revisedAt === 'string' &&
    typeof post?.title === 'string' &&
    typeof post?.content === 'string'
  );
};

const isPosts = (args: unknown[]): args is Post[] =>
  !args.some((arg) => !isPost(arg));

export { isPost, isPosts };
