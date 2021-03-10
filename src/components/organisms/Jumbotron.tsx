/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Container } from 'semantic-ui-react';

type Prop = {
  backgroundImagePath: string;
};

const Jumbotron: FC<Prop> = ({ children, backgroundImagePath }) => (
  <div
    css={css`
      text-align: center;
      position: relative;
      min-height: 90vh;
      background-position: center;
      background-size: cover;
      background-image: url(${backgroundImagePath});
    `}
  >
    <Container
      content={children}
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}
    />
  </div>
);

export default Jumbotron;
