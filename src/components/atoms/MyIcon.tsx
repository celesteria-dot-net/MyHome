import { FC } from 'react';
import { Image, SemanticSIZES } from 'semantic-ui-react';

import icon from 'pictures/myIcon.png';

const MyIcon: FC<{ size?: SemanticSIZES }> = ({ size = 'medium' }) => (
  <Image src={icon} alt="Lucky" size={size} centered />
);

export default MyIcon;
