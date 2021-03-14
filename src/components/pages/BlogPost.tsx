import React, { FC } from 'react';

import PageTitle from 'components/atoms/PageTitle';
import { Post } from 'domains/microCms';
import { Container } from 'semantic-ui-react';

const BlogPost: FC<{ post: Post }> = ({ post }) => (
  <Container>
    <PageTitle title={post.title} />
    {post.id}
    {post.content}
  </Container>
);

export default BlogPost;
