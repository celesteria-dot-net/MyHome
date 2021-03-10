import { FC } from 'react';
import { useQuery } from 'react-query';

import { fetchPosts } from 'domains/microCms';
import PostList from 'components/organisms/PostList';

const EnhancedPostList: FC = () => {
  const { data = [] } = useQuery('allPosts', () => fetchPosts());

  return <PostList posts={data} />;
};

export default EnhancedPostList;
