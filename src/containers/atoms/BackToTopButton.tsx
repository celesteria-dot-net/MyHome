import { FC } from 'react';
import { Link } from 'react-router-dom';

import BackTo from 'components/atoms/BackToButton';

const BackToTop: FC = () => (
  <Link to="/">
    <BackTo icon="home" ariaLabel="ホームに戻る" />
  </Link>
);

export default BackToTop;
