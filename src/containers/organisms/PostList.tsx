import { FC } from 'react';
import { useQuery } from 'react-query';

import { fetchPosts } from 'domains/microCms';
import PostList from 'components/organisms/PostList';

type Props = {
  limit?: number;
};

const EnhancedPostList: FC<Props> = ({ limit }) => {
  const { data = [] } = useQuery('allPosts', () => fetchPosts());
  if (limit) return <PostList posts={data.slice(0, limit)} />;

  return <PostList posts={data} />;
};

export default EnhancedPostList;
