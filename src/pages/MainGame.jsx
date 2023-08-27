import {React,useState,useEffect} from 'react'
import io from 'socket.io-client';

import '../static/css/mainGame.css'
import ProbeHeader from '../components/ProbeHeader';
import sample_questions from '../instance/sampleQuestion';

const socket = io('http://localhost:5000')

const MainGame = () => {

    const [counter, setCounter] = useState(15);
    const [correct, setCorrect] = useState(false);
    const [current_question,setCurrentQuestion] = useState(1)
    const [player_score, setPlayerScore] = useState(0);
    const [player_answer, setPlayerAnswer] = useState(null);
    const [active_questions, setActiveQuestions] = useState(sample_questions);


    const choice_container = document.querySelector('.choices-container');
    const question_container = document.querySelector('.question-container');
    const game_timer = document.querySelector('.game-timer');
    const question_number = document.querySelector('.question-number');
    const score = document.querySelector('.player-score');


    const choices = document.querySelectorAll('.choice');
    choices.forEach((choice,click_index) => {
        choice.onclick = () => {
            choices.forEach((choice,index) => {
                if (click_index === index){
                    let new_answer = choice.children[0].innerText
                    setPlayerAnswer(new_answer)
                    choice.classList.add('selected-choice');
                }else{
                    choice.classList.remove('selected-choice');
                }
            })
        }
    })
    



    const showQuestion = () =>{
        active_questions.shift();

        if(active_questions.length === 1){
           window.location = window.origin = "/leaderBoard";
        }

        score.classList.add('hide-element');
        score.classList.remove('fade-bottom-r');

        choice_container.classList.remove('fade-bottom-r');
        question_container.classList.remove('fade-bottom-r');

        choice_container.classList.remove('hide-element');
        question_container.classList.remove('hide-element');
        game_timer.classList.remove('hide-element');
        question_number.classList.remove('hide-element');

        choices.forEach(choice => {
            choice.classList.remove('incorrect-answer');
            choice.classList.remove('selected-choice');

        })
        
        setCurrentQuestion(current_question + 1)
        setCounter(15);
    };

    const showScore = () =>{
        choice_container.classList.add('hide-element');
        question_container.classList.add('hide-element');
        game_timer.classList.add('hide-element');
        question_number.classList.add('hide-element');

        choice_container.classList.add('fade-bottom-r');
        question_container.classList.add('fade-bottom-r');

        score.classList.remove('hide-element');
        score.classList.add('fade-bottom-r');

        setTimeout(()=> showQuestion(), 3000)
    }

    const showCorrectAnswer = () =>{
        choices.forEach(choice => {
            if (choice.children[0].innerText !== active_questions[0].answer){
                    choice.classList.add('incorrect-answer');
            }
        })
        

        if(active_questions[0].answer === player_answer){
            setPlayerScore(player_score + 10);
            let user_data = JSON.parse(sessionStorage.getItem('user'))
            socket.emit('sendScore', {score: player_score, code: user_data.code, name: user_data.name})
            
            setCorrect(true);
        }else{
            setCorrect(false);
        }

        setTimeout(()=> showScore(), 5000)
    }

    useEffect(() => {
        let user_data = JSON.parse(sessionStorage.getItem('user'))
        socket.emit('sendScore', {score: player_score, code: user_data.code, name: user_data.name})

        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if(counter === 0){
            showCorrectAnswer()
        }
    }, [counter]);

  return (
    <div className='d-flex justify-content-center position-relative'>

        <h1 className='game-timer'>{counter}</h1>
        <div className="container-fluid main-container p-0 d-flex flex-column justify-content-between">
            <ProbeHeader/>    
            <div className='hide-element player-score d-flex flex-row justify-content-center align-items-center'>
                <h1>Score: {player_score} {correct ? <span className='text-warning' >+10</span> : <span className='text-danger' >+0</span>} </h1>
            </div>
            
            <h5 className='question-number text-white align-self-start mt-3 ms-3'>Question {current_question}</h5>
            <div className="question-container d-flex justify-content-center align-items-center h-25">
               <h1 className='text-white text-center w-75'>{active_questions[0].question}</h1>
            </div>
            <div className="choices-container">
                <div role='button' className='choice d-flex flex-row align-items-center justify-content-center column-gap-5'> <span>{active_questions[0].choices[0]}</span> </div>
                <div role='button' className='choice d-flex flex-row align-items-center justify-content-center column-gap-5'> <span>{active_questions[0].choices[1]}</span> </div>
                <div role='button' className='choice d-flex flex-row align-items-center justify-content-center column-gap-5'> <span>{active_questions[0].choices[2]}</span> </div>
                <div role='button' className='choice d-flex flex-row align-items-center justify-content-center column-gap-5'> <span>{active_questions[0].choices[3]}</span> </div>
            </div>
        </div>
    </div>
  )
}

export default MainGame