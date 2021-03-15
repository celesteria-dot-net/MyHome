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
      position: relative;
      min-height: 90vh;
      text-align: center;
      background-image: url(${backgroundImagePath});
      background-position: center;
      background-size: cover;
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
