/*

	Module Dependencies

*/

import React from 'react';
import SfcDSVideo from './sfcds_video/SfcDSVideo';
import SfcDSTvGrid from './sfcds_tvgrid/SfcDSTvGrid';
import SfcDSDate from './sfcds_date/SfcDSDate';
import SfcDSHscroll from './sfcds_scroll/SfcDSHscroll';
import SfcDSImgs from './sfcds_tvimgs/SfcDSImgs';
import SfcDSClock from './sfcds_tvtime/SfcDSClock';

class SfcDSApp extends React.Component {
	

	render(){

		return <div className="app_container" id="app_container"> 
			<div className="sfcds_component_container"><SfcDSVideo /></div>
			<div className="sfcds_component_container"><SfcDSTvGrid /></div>
			<div className="sfcds_component_container"><SfcDSDate /></div>
			<div className="sfcds_component_container"><SfcDSHscroll text="Componente de scroll, pasando el texto como una prop"/></div>
			<div className="sfcds_component_container"><SfcDSImgs /></div>
			<div className="sfcds_component_container"><SfcDSClock /></div>
			</div>;

	}

}

export default SfcDSApp;