import React, { useEffect, useState } from 'react';
import Quiz from '../quiz.json';
import styled from 'styled-components';

const MainContainer = styled.div`text-align:center;`
const Container = styled.div``
const QuizHead = styled.p`font-size:25px; margin:40px 0;`
const QuestionLength = styled.p`font-size:20px; margin:20px 0;`
const Questions = styled.h1`margin:20px;`
const AnswersContainer = styled.div``
const Answers = styled.button`margin:20px;`

const QuizComponent = () => {

    let [questions, setQuestions] = useState(Quiz);
    let [questionIndex, setQuestionIndex] = useState(0);
    let [correct, setCorrect] = useState(0);
    let [wrong, setWrong] = useState(0);
    let [result, setResult] = useState(false);

    const CheckAnswers = (v) => {
        if (questions[questionIndex].correct_answer === v) {
            setCorrect(correct += 1)
            console.log(correct, "correct");
        }
        else {
            setWrong(wrong += 1)
            console.log(wrong, "wrong");
        }
        if (questionIndex < 19) {
            setQuestionIndex(questionIndex += 1)
        }
        else {
            setResult(true)
        }
    }

    console.log(questions[questionIndex].correct_answer);

    const solutions = [questions[questionIndex].correct_answer, ...questions[questionIndex].incorrect_answers]
    let sortedArray = solutions.sort((a, b) => 0.5 - Math.random())
    console.log(sortedArray);

    return (
        <>
            <MainContainer>
                {result ? (
                    <>
                        <p>Correct : {correct}</p>
                        <p>Wrong : {wrong}</p>
                    </>
                ) : (
                    <>
                        <QuizHead>Quiz</QuizHead>
                        <Container>
                            <Questions>{decodeURIComponent(questions[questionIndex].question)}</Questions>
                            <AnswersContainer>
                                {sortedArray.map((v, i) => {
                                    return (
                                        <div key={i}>
                                            <Answers onClick={() => CheckAnswers(v)}>{decodeURIComponent(v)}</Answers>
                                        </div>
                                    )
                                })}
                            </AnswersContainer>
                        </Container>
                    </>
                )}
            </MainContainer>
        </>
    )

}

export default QuizComponent;