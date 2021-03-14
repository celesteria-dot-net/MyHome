import React, { FC, Suspense } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

import ErrorBoundary from 'ErrorBoundary';
import Spinner from 'components/molecules/Loading';
import PageTitle from 'components/atoms/PageTitle';
import BlogPostsIcons from 'components/molecules/BlogPostsIcons';
import PostList from 'containers/organisms/PostList';

import PageTitles from 'data/titles';

const BlogTop: FC = () => (
  <>
    <PageTitle title={PageTitles.BlogPosts} />

    <Container>
      <Divider hidden />
      <Header as="h2" content="投稿一覧" />
      <ErrorBoundary>
        <Suspense fallback={<Spinner size="big" />}>
          <PostList />
        </Suspense>
      </ErrorBoundary>
    </Container>

    <BlogPostsIcons />
  </>
);

export default BlogTop;
