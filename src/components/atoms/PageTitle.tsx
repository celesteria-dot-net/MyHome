import { FC } from "react";
import { Helmet } from "react-helmet"

import PageTitles from "data/titles"

const PageTitle: FC<{title: PageTitles | string}> = ({title: pageTitle}) => (
  <Helmet>
    <title>{pageTitle} - celesteria.net</title>
  </Helmet>
)

export default PageTitle;
