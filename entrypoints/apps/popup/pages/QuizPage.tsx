import { Button } from "#/components/ui/button";
import { context } from "#/context";

function QuizPage() {
  const quizService = context.quizService;
  const quiz = quizService.getQuiz();
  const [isCollect, setIsCollect] = useState<boolean | undefined>(undefined);

  const handleAnswer = (answer: boolean) => {
    setIsCollect(quiz.isGrowing === answer);
  };

  const renderQuiz = () => {
    return (
      <>
        <div className="p-2 text-white text-xl font-bold">
          生えてる？ 生えてない？
        </div>
        <img src={quiz.quizImageUrl} className="m-4" />
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
      </>
    );
  };

  const renderAnswer = () => {
    return (
      <div className="p-2 text-white text-xl font-bold">
        {isCollect ? "正解! " : "不正解... "}
        <img src={quiz.quizAnswerUr} className="m-4" />
      </div>
    );
  };

  return (
    <div className="bg-black w-92 h-92">
      {isCollect === undefined ? renderQuiz() : renderAnswer()}
    </div>
  );
}

export default QuizPage;
