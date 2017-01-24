/* Module Dependencies */
import React from 'react';
import SfcDSTvGridCompliment from './SfcDSTvGridCompliment.js';
import SfcDSTvGridMain from './SfcDSTvGridMain.js';


class SfcDSTvGrid extends React.Component{

	componentWillMount() {
		
		let headDom = document.getElementsByTagName("head");
		headDom[0].innerHTML = headDom[0].innerHTML + `<link rel='stylesheet' href='components/sfcds_tvgrid/css/SfcDSTvGrid.css' />`;
	}

	render(){


		return <div className="SfcDs SfcDSTvGrid">
					<SfcDSTvGridCompliment text='Texto de horas'/>
					<SfcDSTvGridMain text='Canales'/>
				</div>;

	}

}

export default SfcDSTvGrid;