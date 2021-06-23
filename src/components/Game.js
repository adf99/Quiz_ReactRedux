import React from 'react' ;
import Attachment from './Attachment';
import Author from './Author';
import Question from './Question';
import Answer from './Answer';
import Timer from './Timer';
export default class Game extends React.Component {
    constructor(props) {
        super(props);
      }
    render () {

        const {score,finished,attachment,author,authorPhoto,currentQuiz,quiz,time} = this.props;
        
        return (
            <div className="game">
                {finished == true ? 
                    <div className="submit">
                        {this.props.score >= 50 ? 
                            <div className="resultado">
                                <img src="https://icons.iconarchive.com/icons/google/noto-emoji-people-bodyparts/256/11959-victory-hand-icon.png"></img>
                                <p>Tu puntuacion es {score}%</p>
                            </div>
                            :
                            <div className="resultado">
                                <img src="https://www.shareicon.net/data/512x512/2016/01/14/703370_interface_512x512.png"></img>
                                <p>Tu puntuacion es {score}%</p>
                            </div>
                        }
                    </div>
                :
                    <div className="order">
                        <Attachment 
                            attachment={attachment}
                        />
                        <Author 
                            author={author} 
                            photo={authorPhoto}
                        />
                        <Timer 
                            time={time}
                        />
                        {attachment!=null ?
                        <div className="qya">
                            <Question 
                                index={currentQuiz}
                                question={quiz.question}
                            />
                            <Answer
                                answer={quiz.userAnswer}
                                onQuestionAnswer={this.onQuestionAnswer}
                                currentQuiz={currentQuiz}
                                clickNext={this.clickNext}
                                submit={this.submit}
                            />
                        </div> :
                            <div className="qyasinfoto">
                            <Question 
                                index={currentQuiz}
                                question={quiz.question}
                            />
                            <Answer
                                answer={quiz.userAnswer}
                                onQuestionAnswer={this.onQuestionAnswer}
                                currentQuiz={currentQuiz}
                                clickNext={this.clickNext}
                                submit={this.submit}
                            />
                        </div>}
                 </div>}
            </div>
            
        );
    }

    onQuestionAnswer = (answer) => {
        this.props.onQuestionAnswer(answer);
    }
    clickNext = () => {
        this.props.clickNext();
    }
    submit= () => {
        this.props.submit();
    }

}