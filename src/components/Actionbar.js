
export default function Actionbar(props) {
	return <div className="actionbar">
        <button className="actions" onClick={props.reset}>Reset</button>
        {(props.currentQuiz != 0 && props.finished != true) ? <button className="actions" onClick={props.clickPrev}>Anterior</button> : <button className="disabled" disabled>Anterior</button>}
        {(props.currentQuiz != 9 && props.finished != true) ? <button className="actions" onClick={props.clickNext}>Siguiente</button> : <button className="disabled" disabled>Siguiente</button>}
        {props.finished !== true ? <button className="actions" onClick={props.submit}>Submit</button> : <button className="disabled" disabled>Enviar</button>}
    </div>
	
}