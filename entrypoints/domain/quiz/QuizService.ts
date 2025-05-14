import { GrowingQuiz } from "#/types";

export function createQuizService() {
  return {
    // todo クイズを取得する
    getQuiz: (): GrowingQuiz => {
      return {
        actressId: "1098810",
        isGrowing: false,
        quizImageUrl:
          "https://pics.dmm.co.jp/digital/video/jur00012/jur00012jp-1.jpg",
        quizAnswerUr:
          "https://pics.dmm.co.jp/digital/video/jur00016/jur00016jp-5.jpg",
      };
    },
    // todo 作品情報を取得する
    getActressInfo: (): GrowingQuiz => {
      throw new Error("Not implemented");
    },
  };
}

export type QuizService = ReturnType<typeof createQuizService>;
