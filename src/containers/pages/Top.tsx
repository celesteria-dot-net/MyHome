import { FC } from 'react';

import Top from 'components/pages/Top';
import { favoriteVTubers, gameHistory } from 'data/introductionTableContent';

const EnhancedTop: FC = () => (
  <Top favoriteVTubers={favoriteVTubers} gameHistory={gameHistory} />
);

export default EnhancedTop;
