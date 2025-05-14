import PageLayout from "./layout/PageLayout";

function NewsPage() {
  return (
    <PageLayout
      title="お知らせ"
      content={<div className="px-4">お知らせはありません</div>}
    />
  );
}

export default NewsPage;
