
export default function Attachment(props) {
	
	return <div className="attachment">
		{(props.attachment != undefined) ? <img className="attachment" src={props.attachment} width="auto" height="500px" ></img> : <p></p>} 
	</div>
	

		
}