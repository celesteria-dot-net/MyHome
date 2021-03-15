import { FC } from 'react';

import FlowIcons from 'components/molecules/FlowIcons';
import BackToPageTop from 'containers/atoms/BackToPageTopButton';
import BackToTop from 'containers/atoms/BackToTopButton';

const BlogPostsIcons: FC = () => (
  <FlowIcons>
    <BackToTop />
    <BackToPageTop />
  </FlowIcons>
);

export default BlogPostsIcons;
