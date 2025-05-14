import { UIconst } from "#/constants";
import PageLayout from "./layout/PageLayout";

function FeedbackPage() {
  return (
    <PageLayout
      title={UIconst.menu.feedback}
      description="アプリの機能についてのご要望やバグ報告などがあれば下記のGoogleフォームからお知らせください。"
      content={<div className="px-2">Googleフォーム</div>}
    />
  );
}

export default FeedbackPage;
