/* Module Dependencies */
import React from 'react';


class SfcDSClock extends React.Component{

	constructor(props) {
		super(props);
		
		this.state = {

			dateNow : new Date()

		}

		this.updateTime = this.updateTime.bind(this);
	}	


	componentWillMount() {

		/* se debe cargar la hoja de estilos que define el componente */
		let headDom = document.getElementsByTagName("head");
		headDom[0].innerHTML = headDom[0].innerHTML + `<link rel='stylesheet' href='components/sfcds_clock/css/SfcDSClock.css' />`;

		/* Determina la hora */

	}


	componentDidMount() {

		setInterval(this.updateTime,1000);
	}

	/* Funcion para modificar el State */

	updateTime(){

		this.setState({

			dateNow : new Date()

		})

	}

	/* Funcion para generar el texto adecuado del reloj */
	dotime(){ 

		var hr = this.state.dateNow.getHours();
		var mn = this.state.dateNow.getMinutes();
		var sc = this.state.dateNow.getSeconds();
		var ampm = "AM";
		var h = hr;


		if (h >= 12) {
		    h = hr-12;
		    ampm = "PM";
		}
		if (h == 0) {
		    h = 12;
		}

		if (mn<10)
		mn="0"+mn;

		if (sc<10)
		sc="0"+sc;

		if (hr>=12)
		ampm="PM";
		else
		ampm="AM"

		return h+": "+mn+": "+sc+" "+ampm;

	}

	render(){


		return <div className="SfcDs SfcDSClock">
			{this.dotime()}
			</div>;

	}

}

export default SfcDSClock;