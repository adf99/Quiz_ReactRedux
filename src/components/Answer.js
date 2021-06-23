import React from 'react' ;

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
      }
      render(){
            return (
                <input className="input" type = "text" 
                    value = {this.props.answer || ''} 
                    onChange ={(e)=> this.props.onQuestionAnswer ( e.target.value )}
                    placeholder ="Escriba aquí su respuesta"
                    onKeyDown={this.handleKeyDown}
                />
    )}
    handleKeyDown= (e) => {
        if (e.key === 'Enter') {
          this.props.currentQuiz!==9 ? this.props.clickNext() : this.props.submit();
        }
      }
    
}

