import { FC } from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { Message } from 'semantic-ui-react';

import { fetchPost } from 'domains/microCms';
import BlogPost from 'components/pages/BlogPost';

const EnhancedBlogPost: FC = () => {
  const { postId } = useParams();
  const { data } = useQuery(`post-${postId}`, () => fetchPost(postId));
  if (!data) return <Message error message="" />;

  return <BlogPost post={data} />;
};

export default EnhancedBlogPost;
