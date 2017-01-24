/* Module Dependencies */
import React from 'react';


class SfcDSTvGridComplimentBox extends React.Component{


	constructor(props) {
		super(props);
		
		this.state = {

			dateNow : new Date()

		}

		this.getBoxValue = this.getBoxValue.bind(this);
		this.updateBox = this.updateBox.bind(this);
	}	


	shouldComponentUpdate(nextProps, nextState) {
		
		if (this.state.dateNow.getMinutes() !== nextState.dateNow.getMinutes()){

			console.log("Debe actualizar");
			return true;

		}
		else {

			console.log("No debe actualizar");
		}

		return false;

	}


	componentDidMount() {
		
		setInterval(this.updateBox,1000);

	}


	render(){

		
		return <div className="SfcDs SfcDSTvGridComplimentBox">{this.getBoxValue()}</div>;

	}


	/*

		Metodos no nativos de ReactJS

	*/


	updateBox(){

		this.setState({
	
			dateNow: new Date()

		})

	}


	getBoxValue(){
			 
		var fecha_real = new Date();
		fecha_real.setTime(parseInt(this.state.dateNow.getTime()) + (parseInt(this.props.elePos) * (30 * 60 * 1000)));
		//console.log(fecha_real.getHours()+':'+fecha_real.getMinutes());

		
		
		var hora_real=fecha_real.getHours();
		var mins_real=fecha_real.getMinutes();
		var horas_grilla_valor = ''; 

		if (hora_real >= 13){
			hora_real = hora_real - 12;
		}


		if (mins_real < 30){
			horas_grilla_valor=hora_real+":00";
		}
		else{
			horas_grilla_valor=hora_real+":30";
		};  
		
		return horas_grilla_valor; 
		
	};

}

export default SfcDSTvGridComplimentBox;