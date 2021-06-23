import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import Navbar from "./Navbar";
import Shortcuts from "./Shortcuts";
import Actionbar from './Actionbar';
import { questionAnswer, changeQuiz, submit , initQuizzes, resetQuizzes, timer} from '../redux/actions'
import cargar from '../assets/cargando.svg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cargando: true,
    };
  }

  render(){
    const {currentQuiz,quizzes,score,finished,time} = this.props;
    if (!this.props.quizzes|| quizzes.length === 0 || this.cargando) {
      return (
        <div className="cargando">
            {this.props.cargando?<h1>Cargando</h1> : <h1>No hay quizzes</h1>}
            <img src={cargar} />
       </div>
       );
    } 

    
    const attachment = quizzes[currentQuiz].attachment || "";
    const author= quizzes[currentQuiz].author || "";

    let authorPhoto;
    author === "" ? authorPhoto = "" : (authorPhoto=author.photo || "");
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="shortcuts">
            <Shortcuts
              quizzes={quizzes}
              currentQuiz={currentQuiz}
              onChangeQuiz={this.onChangeQuiz}
              finished={finished}
            />
          </div> 
          <Game quiz = {quizzes[currentQuiz]}
            currentQuiz={currentQuiz}
            onQuestionAnswer={this.onQuestionAnswer}
            attachment = {attachment.url}
            author = {author.username}
            authorPhoto = {authorPhoto.url}
            score = {10*score}
            finished = {finished}
            clickNext={this.clickNext}
            submit={this.submit}
            time={time}
          />
        </div>
        <Actionbar
          clickNext={this.clickNext}
          clickPrev={this.clickPrev}
          submit={this.submit}
          currentQuiz={currentQuiz}
          finished={finished}
          reset={this.reset}
        />
 
      </div>
    );
  }
  onQuestionAnswer= (answer) => {
    this.props.dispatch(questionAnswer(this.props.currentQuiz, answer));
  }
  onChangeQuiz= (index) => {
    this.props.dispatch(changeQuiz(index));
  }
  submit= () => {
    this.props.dispatch(submit(this.props.quizzes));
  }
  clickNext = () => {
    if (this.props.currentQuiz<9)
        this.props.dispatch(changeQuiz(this.props.currentQuiz+1)); 
  }
  clickPrev = () => {
    if (this.props.currentQuiz>0)
      this.props.dispatch(changeQuiz(this.props.currentQuiz-1)); 
  }
  
  timer = () => {
    this.props.time > 0 ? this.props.dispatch(timer()) : this.submit();
  }

  async componentDidMount() {
    const TOKEN='1ff5fdf04822f422355b';
    const response = await fetch('https://core.dit.upm.es/api/quizzes/random10wa?token='+TOKEN);
    const quizzes = await response.json();
    this.props.dispatch(initQuizzes(quizzes));
    this.interval = setInterval(() => {
        this.timer();
    }, 1000);
  }
  reset = async () =>{
    const TOKEN='1ff5fdf04822f422355b';
    const response = await fetch('https://core.dit.upm.es/api/quizzes/random10wa?token='+TOKEN);
    const quizzes = await response.json();
    this.props.dispatch(resetQuizzes(quizzes));
  }
   
}
function mapStateToProps(state) {
  return {
    ...state
  };
}




export default connect(mapStateToProps)(App);
