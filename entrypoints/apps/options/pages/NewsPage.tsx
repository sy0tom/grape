import { UIconst } from "#/constants";
import PageLayout from "./layout/PageLayout";

function NewsPage() {
  return (
    <PageLayout
      title={UIconst.menu.news}
      content={<div className="px-2">新しいお知らせはありません。</div>}
    />
  );
}

export default NewsPage;
