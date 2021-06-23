export default function Question(props) {
    return <div className="q">
            <h2 className="titulo">Pregunta {props.index +1}</h2>
            <div className="question">{props.question}</div>
    </div>

    
}