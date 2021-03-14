/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from "react";

const FlowIcons: FC = (prop) => (
  <div css={css`
    position: fixed;
    right: 15px;
    bottom: 15px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}>
    {prop.children}
  </div>
)

export default FlowIcons;
