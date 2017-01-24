/*

	Module Dependencies

*/

import React from 'react';
import SfcDSVideo from './sfcds_video/SfcDSVideo';
import SfcDSTvGrid from './sfcds_tvgrid/SfcDSTvGrid';
import SfcDSDate from './sfcds_date/SfcDSDate';
import SfcDSHscroll from './sfcds_scroll/SfcDSHscroll';
import SfcDSImgs from './sfcds_tvimgs/SfcDSImgs';
import SfcDSClock from './sfcds_clock/SfcDSClock';


class SfcDSApp extends React.Component {


	
	

	render(){

		return <div className="app_container SfcDSApp" id="app_container"> 
			<SfcDSVideo />
			<SfcDSTvGrid />
			<SfcDSDate />
			<SfcDSHscroll text="Componente de scroll, pasando el texto como una prop"/>
			<SfcDSImgs />
			<SfcDSClock />
		</div>;

	}

}

export default SfcDSApp;