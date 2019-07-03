import _ from 'lodash';
import React from 'react';

import SearchBar from './components/search_bar';
import VideoLists from './components/video_lists';
import VideoDetail from './components/video_details';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDyxPa3p1hU9EnO-6qAzcYZGqkoqqG8NQ4';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos : [], 
      selectedVideo : null
    };

    this.videoSearch('google');

  }

  videoSearch(searchterm) {
    YTSearch({key: API_KEY, term: searchterm}, (videos) => {
      this.setState({ 
        videos : videos, 
        selectedVideo : videos[0]
       }); 
      //this.setState({ videos });
    });
  }

  render() {
    const videoSearch = _.debounce((searchterm) => {this.videoSearch(searchterm)}, 100);

    return (
      <div className="">
        <SearchBar onSearchTermChange={videoSearch} /><hr />
        <div className="container1">
          <div className="row">
            <div className="col-md-7">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-md-5">
              <VideoLists 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
