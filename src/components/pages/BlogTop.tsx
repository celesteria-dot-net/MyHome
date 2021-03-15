import React, { FC } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

import PageTitle from 'components/atoms/PageTitle';
import BlogPostsIcons from 'components/organisms/BlogPostsIcons';
import PostList from 'containers/organisms/PostList';

import PageTitles from 'data/titles';

const BlogTop: FC = () => (
  <>
    <PageTitle title={PageTitles.BlogPosts} />

    <Container>
      <Divider hidden />
      <Header as="h1" content="投稿一覧" textAlign="center" />
      <Divider />
      <PostList />
    </Container>

    <BlogPostsIcons />
  </>
);

export default BlogTop;
