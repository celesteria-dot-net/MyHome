/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import PageTitle from 'components/atoms/PageTitle';
import { Button, Container, Divider, Header, Icon } from 'semantic-ui-react';

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageTitle title="404 NotFound" />
      <Divider hidden />
      <Container textAlign="center">
        <Header as="h1" icon textAlign="center">
          <Icon name="question" />
          <Divider hidden />
          <Header.Content
            content="404：お探しのページは見つかりませんでした"
            css={css`
              margin-bottom: 0.7rem !important;
            `}
          />
          <Header.Subheader content="一時的にアクセスできない状態か、移動または削除されてしまった可能性があります" />
        </Header>
        <Divider />
        <Button.Group>
          <Button
            icon
            labelPosition="left"
            onClick={() => navigate(-1)}
            basic
            color="grey"
            css={css`
              margin-right: 0.5rem !important;
            `}
          >
            <Icon name="arrow left" />
            Go Back
          </Button>
          <Button
            icon
            labelPosition="left"
            onClick={() => navigate('/', { replace: true })}
            basic
            color="grey"
          >
            <Icon name="home" />
            Go Home
          </Button>
        </Button.Group>
      </Container>
    </>
  );
};

export default NotFound;
