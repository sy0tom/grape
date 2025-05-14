import PageLayout from "./layout/PageLayout";

function FeedbackPage() {
  return (
    <PageLayout
      title="お問い合わせ・ご要望"
      description="アプリの機能についてのご要望やバグ報告などがあれば下記のGoogleフォームからお知らせください。"
      content={<div className="px-4">Googleフォーム</div>}
    />
  );
}

export default FeedbackPage;
