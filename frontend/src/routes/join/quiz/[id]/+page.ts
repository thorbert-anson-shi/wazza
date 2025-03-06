import type { QuizDetails } from "$lib/types";
import { quizzes } from "$lib/mockdata";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
  let quizData: QuizDetails;
  try {
    let res = await fetch(`/api/quizzes/${params.id}`);
    quizData = await res.json();
  } catch (error) {
    let quiz = quizzes.find((quiz) => quiz.id == params.id);
    if (quiz == undefined) {
      throw new QuizNotFoundError("Object not found");
    } else {
      quizData = quiz;
    }
  }

  return quizData;
};

class QuizNotFoundError extends Error {}
