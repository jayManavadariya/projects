"use client";
import React, { useEffect, useState } from "react";

const Quiz = ({response}) => {
  const [data, setData] = useState(response);
  // const [isLoading, setisLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [shuffledAnswers, setShuffledAnswers] = useState([])

  const shuffleArray = (array) => {
    const newArray = [...array]
    for(let i = newArray.length-1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      console.log("j",j);
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://opentdb.com/api.php?amount=10");
  //       if (!response.ok) {
  //         return new Error(`HTTP error! status : ${response.status}`);
  //       }
  //       const datas = await response.json();
  //       const data = datas.results;
  //       setData(data);
  //       console.log("Data are:", data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setisLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    if(data && data.length>0){
      const currentQues = data[currentQuestion]
      const answersToShuffle = [
        ...currentQues.incorrect_answers,
        currentQues.correct_answer
      ];
      setShuffledAnswers(shuffleArray(answersToShuffle))
    }
  }, [data, currentQuestion])
  
  const handleAnswerButtonClick = (selectedAnswer) => {
    const nextQuestion = currentQuestion + 1;
    if (selectedAnswer === data[currentQuestion].correct_answer) {
     setScore(score + 1)
    }

    if(nextQuestion < data.length){
      setCurrentQuestion(nextQuestion);
    } else{
      setShowScore(true)
    }
  };

  // if (isLoading) {
  //   return <div>Loading data...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div>
      <h1>Quiz App</h1>
      <div>
        {showScore ? (
				<div className='score-section'>You scored {score} out of {data.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion +1}</span>/{data.length}
						</div>
						<div className='question-text'>{data[currentQuestion].question}</div>
					</div>
					<div className="answer-section p-3 flex flex-col items-start ">
          {shuffledAnswers.map((answer, index) => (
            <button key={index} onClick={() => handleAnswerButtonClick(answer)}>{answer}</button>
          ))}
        </div>
				</>
			)}
      </div>
    </div>
  );
};

export default Quiz;
