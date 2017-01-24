/* Module Dependencies */
import React from 'react';


class SfcDSImgs extends React.Component{


	componentWillMount() {
		
		let headDom = document.getElementsByTagName("head");
		headDom[0].innerHTML = headDom[0].innerHTML + `<link rel='stylesheet' href='components/sfcds_tvimgs/css/SfcDSImgs.css' />`;
	}

	render(){


		return <div className="SfcDs SfcDSImgs">Componente de imagenes</div>;

	}

}

export default SfcDSImgs;