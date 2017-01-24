/* Module Dependencies */
import React from 'react';


class SfcDSDate extends React.Component{



	constructor(props) {
		super(props);

		this.state = {

			dateNow : new Date()

		}

		this.updateDate = this.updateDate.bind(this);
		
	}


	componentWillMount() {

		/* se debe cargar la hoja de estilos que define el componente */
		let headDom = document.getElementsByTagName("head");
		headDom[0].innerHTML = headDom[0].innerHTML + `<link rel='stylesheet' href='components/sfcds_date/css/SfcDSDate.css' />`;
	}

	componentDidMount() {
		
		setInterval(this.updateDate,1000);	

	}


	render(){


		return <div className="SfcDs SfcDSDate">{this.write_date()}</div>;

	}



	/*


		FUNCIONES QUE NO HACEN PARTE DEL CICLO DE VIDA DEL COMPONENTE


	*/

	updateDate(){


		this.setState({

			dateNow : new Date()

		})

	}

	write_date(){

		var thetime = this.state.dateNow;
		var nday = thetime.getDay();
		var nmonth = thetime.getMonth();
		var ntoday = thetime.getDate();
		var nyear = thetime.getYear();
		var AorP=" ";
		if (nday==0)nday="Domingo";
		if (nday==1)nday="Lunes";
		if (nday==2)nday="Martes";
		if (nday==3)nday="Míercoles";
		if (nday==4)nday="Jueves";
		if (nday==5)nday="Viernes";
		if (nday==6)nday="Sábado";
		nmonth+=1;
		if (nmonth==1)nmonth="Enero";
		if (nmonth==2)nmonth="Febrero";
		if (nmonth==3)nmonth="Marzo";
		if (nmonth==4)nmonth="Abril";
		if (nmonth==5)nmonth="Mayo";
		if (nmonth==6)nmonth="Junio";
		if (nmonth==7)nmonth="Julio";
		if (nmonth==8)nmonth="Agosto";
		if (nmonth==9)nmonth="Septiembre";
		if (nmonth==10)nmonth="Octubre";
		if (nmonth==11)nmonth="Noviembre";
		if (nmonth==12)nmonth="Diciembre";
		if (nyear<=99)nyear= "19"+nyear;
		if ((nyear>99) && (nyear<2000))nyear+=1900;
		//=============================================================
		
		return nday+", " +ntoday+ " " + "de" + " " + nmonth;
	} 

}

export default SfcDSDate;