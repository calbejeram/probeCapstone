import {React,useState,useEffect} from 'react'
import Header from '../components/Header'
import '../static/css/mainGame.css'


const MainGame = () => {
    const [counter, setCounter] = useState(10);


    const choice_container = document.querySelector('.choices-container');
    const question_container = document.querySelector('.question-container');
    const game_timer = document.querySelector('.game-timer');
    const question_number = document.querySelector('.question-number');


    const correct_answer = "Console.log('hello world')";
    const player_answer = null;

    const choices = document.querySelectorAll('.choice');
    choices.forEach((choice,click_index) => {
        choice.onclick = () => {
            choices.forEach((choice,index) => {
                if (click_index === index){
                    player_answer = choice.children[1].innerText;
                    choice.classList.add('selected-choice');
                }else{
                    choice.classList.remove('selected-choice');
                }
            })
        }
    })
    
    const showLeaderBoard = () =>{
        
        
        choice_container.classList.add('fade-bottom');
        question_container.classList.add('fade-bottom');


        setTimeout(()=> {
            choice_container.classList.add('hide-element');
            question_container.classList.add('hide-element');
            game_timer.classList.add('hide-element');
            question_number.classList.add('hide-element');
        }, 1200)
   

        console.log('leaderboard');
    }

    const showCorrectAnswer = () =>{
        choices.forEach(choice => {
            if (choice.children[1].innerText !== correct_answer){
                    choice.classList.add('incorrect-answer');
            }
        })
        setTimeout(()=> showLeaderBoard(), 5000)
    }

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if(counter === 0){
            showCorrectAnswer()
        }
    }, [counter]);

  return (

    <div className='d-flex justify-content-center position-relative'>
        <h1 className='game-timer'>{counter}</h1>
        <div className="container-fluid main-container p-0 d-flex flex-column justify-content-between">
            <Header/>    
            <h5 className='question-number text-white align-self-start mt-3 ms-3'>Question 1</h5>
            <div className="question-container d-flex justify-content-center align-items-center h-25">
               <h1 className='text-white text-center w-75'>What is the correct syntax for displaying text in console?</h1>
            </div>
            <div className="choices-container">
                <div role='button' className='choice d-flex align-items-center justify-content-center column-gap-5'><span className='align-self-start'>1</span> <span>Console.log('hello world')</span> </div>
                <div role='button' className='choice d-flex align-items-center justify-content-center column-gap-5'><span className='align-self-start'>2</span> <span>Console.logg('hello world')</span> </div>
                <div role='button' className='choice d-flex align-items-center justify-content-center column-gap-5'><span className='align-self-start'>3</span> <span>Console.l0og('hello world')</span> </div>
                <div role='button' className='choice d-flex align-items-center justify-content-center column-gap-5'><span className='align-self-start'>4</span> <span>Console.laog('hello world')</span> </div>
            </div>
        </div>
    </div>
  )
}

export default MainGame