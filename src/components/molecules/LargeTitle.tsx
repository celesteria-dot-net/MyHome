/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { FC } from 'react';
import { Header } from 'semantic-ui-react';

type Props = {
  mainTitle: string;
  subTitle?: string;
};

/**
 * ヘッダーとサブヘッダーをフォントサイズを適切なものに変更した上でまとめたもの
 */
const CustomTitle: FC<Props> = ({ mainTitle, subTitle = '' }) => (
  <>
    <Header
      content={mainTitle}
      css={css`
        font-size: 4em !important;
      `}
    />
    <Header size="medium" content={subTitle} />
  </>
);

export default CustomTitle;
