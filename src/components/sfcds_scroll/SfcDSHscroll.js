/* Module Dependencies */
import React from 'react';


class SfcDSHscroll extends React.Component{

	componentWillMount() {
		
		let headDom = document.getElementsByTagName("head");
		headDom[0].innerHTML = headDom[0].innerHTML + `<link rel='stylesheet' href='components/sfcds_scroll/css/SfcDSHscroll.css' />`;
	}

	render(){


		return <div className="SfcDs SfcDSHscroll">{this.props.text}</div>;

	}

}

export default SfcDSHscroll;