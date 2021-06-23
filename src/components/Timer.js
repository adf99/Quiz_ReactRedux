export default function Timer(props) {
    let minutos = Math.trunc(props.time/60);
    let segundos = props.time - Math.trunc(props.time/60)*60;
    if (segundos<10){
        segundos='0'+segundos;
    }

	return <div className="timer">
		{minutos}:{segundos}
	</div>
}