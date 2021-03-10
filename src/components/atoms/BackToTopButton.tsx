/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Button } from 'semantic-ui-react';

const BackToTop: FC = () => (
  <Button
    circular
    icon="angle up"
    size="huge"
    color="grey"
    aria-label="ページの一番上まで戻る"
    onClick={() => window.scrollTo(0, 0)}
    css={css`
      position: fixed;
      bottom: 30px;
      right: 30px;
      opacity: 0.7;
      z-index: 5; /* position:relativeがあった際に下になってしまうので */
    `}
  />
);

export default BackToTop;
