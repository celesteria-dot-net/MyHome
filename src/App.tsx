import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import Top from 'components/pages/Top';
import BlogTop from 'components/pages/BlogTop';
import Blog from 'components/templates/Blog';
import BlogPost from 'containers/pages/BlogPost';
import NotFound from 'components/pages/404';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Top />} />
    <Route path="blog" element={<Blog />}>
      <Route path="/" element={<BlogTop />} />
      <Route path=":postId" element={<BlogPost />} />
    </Route>
    <Route path="404" element={<NotFound />} />
    <Route path="*" element={<Navigate to="404" replace />} />;
  </Routes>
);

export default App;
