const PageTitles = {
  Top: "Home",
  BlogTop: "投稿一覧"
} as const;

type PageTitles = typeof PageTitles[keyof typeof PageTitles]

export default PageTitles;
