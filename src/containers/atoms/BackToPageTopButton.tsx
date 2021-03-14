import BackTo from 'components/atoms/BackToButton';
import { FC } from 'react';

const BackToPageTop: FC = () => (
  <BackTo icon="angle up" ariaLabel="ページの一番上まで戻る" onClick={() => window.scrollTo(0, 0)} />
)

export default BackToPageTop;
