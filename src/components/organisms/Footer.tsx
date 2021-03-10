/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

type Prop = {
  isTop?: boolean;
};

const Footer: FC<Prop> = ({ isTop = false }) => (
  <div
    css={css`
      background-color: black;
    `}
  >
    <Divider />
    <Container textAlign="center">
      <Header size="small" content="(C) 2021 Lucky." color="grey" />
      {isTop && (
        <p
          css={css`
            color: grey;
          `}
        >
          （ヘッダー：
          <a
            href="https://jp.freepik.com/photos/background"
            target="_blank"
            rel="noreferrer"
          >
            Mrsiraphol - jp.freepik.com によって作成された background 写真
          </a>
          ）
        </p>
      )}
    </Container>
    <Divider />
  </div>
);

export default Footer;
