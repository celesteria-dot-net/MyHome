/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { FC } from 'react';
import { Loader, SemanticSIZES } from 'semantic-ui-react';

type Props = {
  size?: SemanticSIZES;
  message?: string;
};

const Spinner: FC<Props> = ({ size = 'medium', message = '読み込み中' }) => (
  <div
    css={css`
      margin: 3rem 0 5rem;
    `}
  >
    <Loader size={size} content={message} inline="centered" active />
  </div>
);

export default Spinner;
