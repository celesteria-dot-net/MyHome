import { FC } from 'react';

import FlowIcons from 'components/molecules/FlowIcons';
import BackToPageTop from 'containers/atoms/BackToPageTopButton';
import BackToTop from 'containers/atoms/BackToTopButton';
import BackToPosts from 'containers/atoms/BackToBlogPostsButton';

const BlogPostIcons: FC = () => (
  <FlowIcons>
    <BackToPosts />
    <BackToTop />
    <BackToPageTop />
  </FlowIcons>
);

export default BlogPostIcons;
