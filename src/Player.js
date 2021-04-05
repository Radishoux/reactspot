import React from "react";
import SpotifyWebApi from "spotify-web-api-node"
import SpotifyPlayer from "react-spotify-web-playback";
import { WhatshotOutlined } from "@material-ui/icons";
export default class Player extends React.Component 
{
    render() {
        return (
            <SpotifyPlayer
            token={this.props.at}
            uris={[this.props.trk]}
            autoplay="true"
            play="true"
            styles={{
                activeColor: '#fff',
                bgColor: '#303030',
                color: 'orange',
                loaderColor: '#fff',
                sliderColor: 'orange',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
              }}
            />
        );
    }
    

}
