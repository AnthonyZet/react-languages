import React from "react";
import { useState } from "react";
import data from "./Quiz1Data";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { ListGroupItem } from "react-bootstrap";

const Quiz1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleButton = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };



    
  

  return (
    <section className="className='container home p-4">
      {showScore ? (
        <Card className="position-absolute top-50 start-50 w-auto translate-middle cardQuiz">
          <Card.Body>
          <ListGroup>
              <ListGroup.Item className="bg-primary">
            You scored {score} out of {data.length}
             </ListGroup.Item>
             
         </ListGroup>

          </Card.Body>
        </Card>
      ) : (
        <Card className="position-absolute top-50 start-50 w-auto translate-middle cardQuiz">
          <Card.Body>
            <ListGroup>
              <ListGroup.Item className="bg-primary">
                <strong>
                  <span>Question {currentQuestion + 1}</span>/{data.length}
                </strong>
              </ListGroup.Item>
              <ListGroupItem>
                {data[currentQuestion].questionText}
              </ListGroupItem>
              <ListGroupItem>
                {data[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <ListGroupItem
                      key={index}
                      className="quizLi"
                      onClick={() => handleButton(answerOption.isCorrect)}
                    >
                      {answerOption.answerText}
                    </ListGroupItem>
                  )
                )}
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </section>
  );
};

export default Quiz1;
