/*
	
	Module Dependencies

*/

/*
	Third-party Modules
*/
import React from "react";


/*
	Project Modules
*/

import FechaSfcDs from "./fecha-sfcds/FechaSfcDs";
import GridSfcDs from "./grid-sfcds/GridSfcDs";
import ImgsSfcDs from "./imgs-sfcds/ImgsSfcDs";
import RelojSfcDs from "./reloj-sfcds/RelojSfcDs";
import ScrollSfcDs from "./scroll-sfcds/ScrollSfcDs";
import VideoSfcDs from "./video-sfcds/VideoSfcDs";






class AppSfcDs extends React.Component{


	render (){

		return <div className="sfcds-container">
			<VideoSfcDs />
			<ImgsSfcDs />
			<RelojSfcDs />
			<FechaSfcDs />
			<GridSfcDs />
			<ScrollSfcDs />
		</div>

	}

}

export default AppSfcDs;