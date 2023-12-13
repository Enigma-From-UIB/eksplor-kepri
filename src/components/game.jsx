import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import image from "../assets/image";
import { QuizData } from '../assets/quiz';

function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const totalQuestion = QuizData.length;
  const history = useNavigate();

  function backHome(e) {
    e.preventDefault();

    history('/home');
}


  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerOptionClick = (answer) => {
    if (answer === QuizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setShowFeedback("Correct");
    } else {
      setShowFeedback("Incorrect");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestion) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setShowFeedback(null);
      }, 1000);
    } else {
      setTimeout(() => {
        setQuizFinished(true);
      }, 1000);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(null);
    setQuizFinished(false);
    setQuizStarted(false);
  };

  const progress = Math.floor((currentQuestion / totalQuestion) * 100);

  return (
    <div>
    <div className="background-image-container" style={{backgroundImage: `url(${image.gameBG})`}}> </div>
    <div>
      <div className='flex justify-center py-10'>
        <div className="justify-center flex bg-clip-border rounded-2xl bg-white text-gray-700 shadow-md w-full xl:max-w-[48rem] lg:max-w-[40rem] md:max-w-[36rem] max-w-[22rem] flex-row">
          <div className="p-6">
            {!quizStarted ? (
              <div className="text-center">
                <h1 className="playfair text-4xl mb-6 font-semibold text-black">
                  Uji Pengetahuan
                </h1>
                <p className="poppins-regular text-black mb-8 px-[2rem] lg:px-[8rem]">
                  Uji pengetahuanmu tentang destinasi eksotis dan kekayaan budaya di wilayah yang indah ini. Segera ikuti untuk memperluas wawasan tentang keajaiban Kepulauan Riau!
                </p>
                <button className="border border-black poppins-semibold px-6 py-1 text-xl align-middle transition-all rounded-xl hover:bg-gray-900/10 active:bg-gray-900/20" onClick={startQuiz}>
                  Play
                </button>
              </div>
            ) : (
              <>
                {!quizFinished ? (
                  <>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <h2 className="poppins-bold text-3xl mb-6 font-semibold text-gray-800">
                          Question {currentQuestion + 1}
                        </h2>
                        <div>
                          {progress > 0 && (
                            <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full bg-black text-white">
                              {`${progress}%`}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-lg bg-gray-300">
                        <div
                          style={{ width: `${progress}%` }} className=" shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-700"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="w-full pr-4">
                        <div className="poppins-semibold text-3xl mb-6 font-semibold text-black">
                          {QuizData[currentQuestion].question}
                        </div>
                        {showFeedback && <div className={`text-${showFeedback === "Correct" ? 'green' : 'red'}-500`}>{showFeedback}</div>}
                        <div className="grid grid-cols-2 gap-4 mt-4 poppins-bold">
                          {QuizData[currentQuestion].options.map((option, index) => (
                            <button
                              key={index}
                              className={`align-middle transition-all rounded-lg hover:bg-gray-900/10 active:bg-gray-900/20 ${showFeedback === "Correct" && option === QuizData[currentQuestion].correctAnswer ? 'bg-green-500' : ''} ${showFeedback === "Incorrect" && option === QuizData[currentQuestion].chosenAnswer ? 'bg-red-500' : ''}`}
                              onClick={() => {
                                handleAnswerOptionClick(option);
                                QuizData[currentQuestion].chosenAnswer = option;
                              }}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="w-full">
                        {/* Use the image from the compiled file */}
                        <img
                          src={image[QuizData[currentQuestion].imageName]}
                          alt={`Question ${currentQuestion + 1}`}
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-4 justify-between">
                    <div className="text-center">
                      <h2 className="playfair text-4xl mb-6 font-semibold text-black">
                        Score
                      </h2>
                    <h1 className="poppins-bold text-[4rem]  text-black mb-6"> {score} / 5</h1>
                    <p className="poppins-regular text-md px-6 font-semi-bold text-gray-700">Selamat atas keberhasilanmu menyelesaikan quiz</p>
                    </div>
                    <div className="items-center justify-center flex flex-col ">
                      <button className="border-2 poppins-semibold border-black py-2 px-4 mb-5 font-bold align-middle transition-all rounded-2xl hover:bg-gray-900/10 active:bg-gray-900/20" onClick={backHome}>Back Home</button>
                      <button className="border-2 poppins-semibold border-black py-2 px-4 font-bold align-middle transition-all rounded-2xl hover:bg-gray-900/10 active:bg-gray-900/20" onClick={restartQuiz}>Play Again</button>
                    </div>
                  </div>
                  
                )}
              </>
            )}
          </div>
        </div>
      </div></div>
    </div>
  );
}

export default Game;
