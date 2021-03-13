import { FC } from 'react';
import { Route, Routes } from 'react-router';

import Top from 'containers/pages/Top';
import BlogTop from 'components/pages/BlogTop';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Top />} />
    <Route path="blog" element={<BlogTop />} />
  </Routes>
);

export default App;
