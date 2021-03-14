/* eslint react/no-danger: 0 */
import React, { FC } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

import { Post } from 'domains/microCms';
import PageTitle from 'components/atoms/PageTitle';
import { formatDateOnly } from 'utils/date';

const BlogPost: FC<{ post: Post }> = ({ post }) => (
  <>
    <PageTitle title={post.title} />

    <Container>
      <Divider hidden />
      <Header as="h1" content={post.title} textAlign="center" />
      <Divider />
      <p>作成日：{formatDateOnly(post.publishedAt)}</p>
      <p>最終更新日：{formatDateOnly(post.revisedAt)}</p>
      <Divider hidden />
      <span dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
  </>
);

export default BlogPost;
