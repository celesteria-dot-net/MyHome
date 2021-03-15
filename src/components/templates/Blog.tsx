import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router';

import ErrorBoundary from 'ErrorBoundary';
import Spinner from 'components/molecules/Loading';

const BlogPage: FC = () => (
  <ErrorBoundary>
    <Suspense fallback={<Spinner size="big" />}>
      <Outlet />
    </Suspense>
  </ErrorBoundary>
);

export default BlogPage;
