/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import { Post } from 'domains/microCms';
import { formatDateTime } from 'utils/date';

/**
 * HTMLタグを取り除く正規表現
 * https://qiita.com/miiitaka/items/793555b4ccb0259a4cb8
 */
const reg = /<("[^"]*"|'[^']*'|[^'">])*>/g;

const PostList: FC<{ posts: Post[] }> = ({ posts }) => (
  <Card.Group>
    {posts.map((post) => {
      const cont = post.content.replace(reg, '');
      const cutCont =
        cont.length < 100 ? cont : cont.slice(0, 99).concat('...');

      return (
        <Card key={post.id} href="#">
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
            <Card.Meta content={formatDateTime(post.publishedAt)} />
            <Card.Description content={post.summary ? post.summary : cutCont} />
          </Card.Content>
        </Card>
      );
    })}
  </Card.Group>
);

export default PostList;
