import { Button } from "#/components/ui/button";
import { context } from "#/context";
import { ReactNode } from "react";

function QuizPage() {
  const quizService = context.quizService;
  const quiz = quizService.getQuiz();
  const [isCollect, setIsCollect] = useState<boolean | undefined>(undefined);

  const handleAnswer = (answer: boolean) => {
    setIsCollect(quiz.isGrowing === answer);
  };

  const renderCompressImage = (url: string) => {
    return (
      <div className="w-full h-72">
        <img src={url} className="w-full h-full object-contain" />
      </div>
    );
  };

  const renderContent = (
    title: string,
    imageUrl: string,
    footer: ReactNode,
  ) => {
    return (
      <div className="p-2 flex flex-col justify-center items-center">
        <div className="text-white text-xl font-bold">{title}</div>
        {renderCompressImage(imageUrl)}
        <div>{footer}</div>
      </div>
    );
  };

  const renderQuiz = () => {
    return renderContent(
      "生えてる？ 生えてない？",
      quiz.quizImageUrl,
      <>
        <div className="p-2 flex items-center justify-center gap-2">
          <Button
            className="bg-red-500 hover:bg-red-400"
            onClick={() => handleAnswer(false)}
          >
            <span className="text-white">生えてない</span>
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-400"
            onClick={() => handleAnswer(true)}
          >
            <span className="text-white">生えてる</span>
          </Button>
        </div>
      </>,
    );
    // return (

    // );
  };

  const renderAnswer = () => {
    let title = isCollect ? "正解🎉 " : "残念... ";
    title += quiz.isGrowing ? "生えてる" : "生えてない";
    return renderContent(
      title,
      quiz.quizAnswerUr!,
      <div className="text-white font-bold">作品情報</div>,
    );
  };

  return (
    <div className="bg-black w-96 h-96">
      {isCollect === undefined ? renderQuiz() : renderAnswer()}
    </div>
  );
}

export default QuizPage;
