export default function Actionbar(props) {
	return <div className="author">
                {(props.author!=null) ? <div>Creado por {props.author}</div> :<div></div>}
                <img className="authorphoto" src={props.photo} width="auto" height="50px"></img>
    </div>
}
