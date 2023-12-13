import React, {useState} from "react";
import { QuizData } from '../assets/quiz';


function game() { {/*
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const totalQuestion = QuizData.length;

  const handleAnswerOptionClick = (answer) => {
    if (answer === QuizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setShowFeedback("Correct");
    } else {
      setShowFeedback("Incorrect");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestion) {
      setTimeout( () => {
        setCurrentQuestion[nextQuestion];
        setShowFeedback(null);
      }, 1000);
    } else {
      setTimeout( () => {
        setQuizFinished(true);
      }, 1000);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(null);
    setQuizFinished(false);
  };

  const progress = Math.floor((currentQuestion / totalQuestion) * 100);
*/}
  return (
    <div className='flex justify-center py-10'>
      <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
        {/* <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="card-image" class="object-cover w-full h-full" />
  </div> */}
      <div class="p-6">
      <h1
        class=" flex justify-center text-2xl mb-4 font-sans antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
        Test your Knowledge
      </h1>
      {/* <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Lyft launching cross-platform service this week
      </h4> */}
      <p class=" mb-8 flex justify-center font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Test your knowledge about Kepulauan Riau and see how much you know about it!
      </p>
      <a href="#" class="inline-block"><button
          class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
          type="button">
          Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
          </svg></button></a>
    </div>
  </div>  
    </div>
  )
}

export default game