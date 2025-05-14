export const growingsSelect = ["生えてる", "生えてない", "剛毛"] as const;
export type GrowingQuizAnswer = (typeof growingsSelect)[number];

export type Actress = {
  actressId: string;
  name: string;
  growingQuiz: {
    select: GrowingQuizAnswer[];
    answer: GrowingQuizAnswer;
    quizUrl: string;
    answerUr: string;
  };
};

export type GrowingQuiz = {
  actressId: string;
  isGrowing: boolean;
  quizImageUrl: string;
  quizAnswerUr?: string;
};

export type CupQuiz = {
  actorId: string;
  cup: string;
  quizImageUrl: string;
  quizAnswerUr?: string;
};
