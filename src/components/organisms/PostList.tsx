/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';

import { Post } from 'domains/microCms';
import { formatDateOnly } from 'utils/date';

/**
 * HTMLタグを取り除く正規表現
 * https://qiita.com/miiitaka/items/793555b4ccb0259a4cb8
 */
const reg = /<("[^"]*"|'[^']*'|[^'">])*>/g;

const PostList: FC<{ posts: Post[] }> = ({ posts }) => {
  const location = useLocation();

  return (
    <Card.Group itemsPerRow={3}>
      {posts.map((post) => {
        const content = post.content.replace(reg, '');
        const cutCont =
          content.length < 100 ? content : content.slice(0, 99).concat('...');

        return (
          <Link
            to={
              location.pathname.startsWith('/blog')
                ? post.id
                : `blog/${post.id}`
            }
            key={post.id}
          >
            <Card>
              {post.thumbnail ? (
                <Image src={post.thumbnail.url} size="medium" centered />
              ) : (
                <Icon
                  name="align left"
                  size="massive"
                  color="black"
                  css={css`
                    width: auto !important;
                    margin: 15px 0 !important;
                  `}
                />
              )}
              <Card.Content>
                <Card.Header content={post.title} />
                <Card.Meta
                  content={`投稿日：${formatDateOnly(post.publishedAt)}`}
                />
                <Card.Description
                  content={post.summary ? post.summary : cutCont}
                />
              </Card.Content>
            </Card>
          </Link>
        );
      })}
    </Card.Group>
  );
};

export default PostList;
