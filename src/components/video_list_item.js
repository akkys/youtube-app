import React, { Component } from 'react';

class VideoListItem extends Component {
	render() {
		const video = this.props.video;
		const onVideoSelect = this.props.onVideoSelect;

		const imageUrl = video.snippet.thumbnails.default.url;
		const titleUrl = video.snippet.title;

		return(
				<li onClick={ () => onVideoSelect(video) } className="list-group-item">
					<div className="video-list media">
						<div className="media-left">
							<img className="media-object" src={imageUrl} />
						</div>
						<div className="media-body">
							<div className="media-heading">
								{titleUrl}<br />
								<p className="channelttl">{video.snippet.channelTitle}</p>
							</div>
						</div>
					</div>
				</li>
			);
	}
}

export default VideoListItem;