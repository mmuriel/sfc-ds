/* Module Dependencies */
import React from 'react';


class SfcDSVideo extends React.Component{


	componentWillMount() {
		
		let headDom = document.getElementsByTagName("head");
		headDom[0].innerHTML = headDom[0].innerHTML + `<link rel='stylesheet' href='components/sfcds_video/css/SfcDSVideo.css' />`;
	}

	render(){


		return <div className="SfcDs SfcDSVideo">Video</div>;

	}

}

export default SfcDSVideo;