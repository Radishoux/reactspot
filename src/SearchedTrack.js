import React from "react";
import Player from "./Player"
import ReactDOM from 'react-dom';

export default class SearchedTrack extends React.Component
{
    constructor(props) {
        super(props);
    }

    play = () => {
        return ReactDOM.render(<Player at={this.props.at} trk={this.props.trk.uri}/>,document.getElementById("PlayerHolder"));
    }
    
    render() {

        return (
            <div onClick={this.play} style={{cursor: "pointer", "borderBottom": "1px solid"}}>
            <img alt="https://lh3.googleusercontent.com/sUdPhFArCQeltCJWBr934XznvLgCIDs1uIvccjM1pJb5bz03hoPHU3islstJae6wSrjO2A7JWqed6C-YNw=w544-h544-l90-rj" src={this.props.trk.album.images[1].url}></img>
            <div style={{display: "inline-block", "paddingLeft": "1rem"}}>
                <p>Title : {this.props.trk.name}</p>
                <p>Artist : {this.props.trk.artists[0].name}</p>
                <p>Album : {this.props.trk.album.name}</p>
            </div>
        </div>
    )
}
}