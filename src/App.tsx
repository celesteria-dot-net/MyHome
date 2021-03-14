import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import Top from 'components/pages/Top';
import BlogTop from 'components/pages/BlogTop';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Top />} />
    <Route path="blog" element={<BlogTop />} />
    <Route path="*" element={<Navigate to="/" replace />} />;
  </Routes>
);

export default App;
