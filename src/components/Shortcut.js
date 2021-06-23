export default function Shorcut(props) {

	return <button className="shortcut" onClick={props.click} disabled={props.finished==true}>{props.index+1} </button>
}