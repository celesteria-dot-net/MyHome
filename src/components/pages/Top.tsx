/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { FC, Suspense } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
  Table,
} from 'semantic-ui-react';

import ErrorBoundary from 'ErrorBoundary';
import PostList from 'containers/organisms/PostList';
import ListAnchor from 'components/atoms/CustomAnchor';
import Jumbotron from 'components/organisms/Jumbotron';
import Title from 'components/molecules/LargeTitle';
import IconAnchor from 'components/atoms/IconAnchorButton';
import MyIcon from 'components/atoms/MyIcon';
import PageTitle from 'components/atoms/PageTitle';
import HomeIcons from 'components/organisms/HomeIcons';
import Footer from 'components/organisms/Footer';
import Spinner from 'components/molecules/Loading';

import PageTitles from 'data/titles';
import { favoriteVTubers, gameHistory } from 'data/introductionTableContent';
import bgPicture from 'pictures/background.jpg';

const Top: FC = () => (
  <>
    <PageTitle title={PageTitles.Top} />

    <Jumbotron backgroundImagePath={bgPicture}>
      <Segment vertical>
        <Title mainTitle="Lucky" subTitle="(Lucky3028)" />
      </Segment>
      <Segment vertical>
        <IconAnchor iconName="twitter" link="https://twitter.com/Lucky3028" />
        <IconAnchor iconName="github" link="https://github.com/Lucky3028" />
        <Button circular color="grey" icon="sticky note" as={Link} to="blog" />
      </Segment>
    </Jumbotron>
    <Divider hidden />

    <Container>
      <Header as="h2" content="Self Introduction" />
      <Divider />
      <Grid stackable columns="equal" verticalAlign="middle">
        <Grid.Column width={6}>
          <MyIcon />
        </Grid.Column>
        <Grid.Column>
          <Table padded basic="very">
            <Table.Body>
              <Table.Row>
                <Table.Cell content="HN" textAlign="center" collapsing />
                <Table.Cell content="Lucky" />
              </Table.Row>
              <Table.Row>
                <Table.Cell content="?????????" textAlign="center" />
                <Table.Cell content="?????????" />
              </Table.Row>
              <Table.Row>
                <Table.Cell content="??????VTuber" textAlign="center" />
                <Table.Cell>
                  <List bulleted>
                    {favoriteVTubers.map((value, index) => (
                      <ListAnchor
                        // eslint-disable-next-line react/no-array-index-key
                        key={`favoriteV-${index}`}
                        content={value.content}
                        url={value.url}
                      />
                    ))}
                  </List>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell content="???????????????" textAlign="center" />
                <Table.Cell>
                  <List bulleted items={gameHistory} />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell content="???????????????" textAlign="center" />
                <Table.Cell>
                  <p>
                    2014????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                  </p>
                  <p>
                    2016????????????Minecraft???????????????????????????????????????????????????????????????????????????????????????
                    <a
                      href="https://www.seichi.network"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      seichi.click network
                    </a>
                    ?????????????????????????????????????????????????????????????????????
                  </p>
                  <p>2017???11?????????VTuber???????????????????????????????????????????????????</p>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>

      <Header as="h2" content="Posts" />
      <Divider />
      <ErrorBoundary>
        <Suspense fallback={<Spinner size="big" />}>
          <PostList limit={3} />
        </Suspense>
      </ErrorBoundary>
      <Grid textAlign="right" columns={1}>
        <Grid.Column>
          <Button
            basic
            content="Read more"
            icon="arrow right"
            labelPosition="right"
            as={Link}
            to="blog"
            css={css`
              margin-top: 0.5rem !important;
            `}
          />
        </Grid.Column>
      </Grid>

      <Header as="h2" content="Apps" />
      <Divider />
    </Container>

    <HomeIcons />

    <Footer isTop />
  </>
);

export default Top;
