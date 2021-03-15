import { FC } from 'react';
import { Link } from 'react-router-dom';

import BackTo from 'components/atoms/BackToButton';

const BackToPosts: FC = () => (
  <Link to="/blog">
    <BackTo icon="list" ariaLabel="投稿一覧に戻る" />
  </Link>
);

export default BackToPosts;
