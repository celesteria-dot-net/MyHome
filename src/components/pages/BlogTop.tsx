import React, { FC, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Divider, Header } from 'semantic-ui-react';

import ErrorBoundary from 'ErrorBoundary';
import BackToTop from 'components/atoms/BackToTopButton';
import PostList from 'containers/organisms/PostList';
import Spinner from 'components/molecules/Loading';

const BlogTop: FC = () => (
  <>
    <Helmet>
      <title>投稿一覧</title>
    </Helmet>

    <Container>
      <Divider hidden />
      <Header as="h2" content="投稿一覧" />
      <ErrorBoundary>
        <Suspense fallback={<Spinner size="big" />}>
          <PostList />
        </Suspense>
      </ErrorBoundary>
    </Container>

    <BackToTop />
  </>
);

export default BlogTop;
