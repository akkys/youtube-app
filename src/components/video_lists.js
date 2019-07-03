import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoLists extends Component {
	render() {

	const videoItems = this.props.videos.map((video) => {
		return( <VideoListItem 
				onVideoSelect={this.props.onVideoSelect}
				key={video.etag}
				video={video} />
			);
	});

		return(	
				<ul className="">
				 <p>Up Next</p>
					{videoItems}
				</ul>
			);
	}
}

export default VideoLists;