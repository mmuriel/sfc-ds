/* Module Dependencies */
import React from 'react';
import SfcDSTvGridComplimentBox from './SfcDSTvGridComplimentBox';

class SfcDSTvGridCompliment extends React.Component{

	render(){

		
		var complementBoxes = [];

		for (var i=0 ; i <= 3 ; i++){

			complementBoxes.push(<SfcDSTvGridComplimentBox key={i} elePos={i}/>);
		}
		
		return <div className="SfcDs SfcDSTvGridCompliment">{complementBoxes}</div>;
			

	}

}

export default SfcDSTvGridCompliment;