import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

import { Post } from 'domains/microCms';
import { formatDateOnly } from 'utils/date';

import bgPicture from 'pictures/background.jpg';

/**
 * HTMLタグを取り除く正規表現
 * https://qiita.com/miiitaka/items/793555b4ccb0259a4cb8
 */
const reg = /<("[^"]*"|'[^']*'|[^'">])*>/g;

const PostList: FC<{ posts: Post[] }> = ({ posts }) => (
  <Card.Group itemsPerRow={3} stackable>
    {posts.map((post) => {
      const content = post.content.replace(reg, '');
      const cutCont =
        content.length < 100 ? content : content.slice(0, 99).concat('...');

      return (
        <Card key={post.id} as={Link} to={`/blog/${post.id}`}>
          <Image src={post.thumbnail ? post.thumbnail.url : bgPicture} fluid />
          <Card.Content>
            <Card.Header content={post.title} />
            <Card.Meta
              content={`投稿日：${formatDateOnly(post.publishedAt)}`}
            />
            <Card.Description content={post.summary ? post.summary : cutCont} />
          </Card.Content>
        </Card>
      );
    })}
  </Card.Group>
);

export default PostList;
