import PageLayout from "./layout/PageLayout";

function NewsPage() {
  return (
    <PageLayout
      title="お知らせ"
      content={<div className="px-2">新しいお知らせはありません。</div>}
    />
  );
}

export default NewsPage;
