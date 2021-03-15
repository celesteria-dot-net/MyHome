import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router';
import { Divider } from 'semantic-ui-react';

import ErrorBoundary from 'ErrorBoundary';
import Spinner from 'components/molecules/Loading';

const BlogPage: FC = () => (
  <>
    <Divider hidden />
    <ErrorBoundary>
      <Suspense fallback={<Spinner size="big" />}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  </>
);

export default BlogPage;
