import React from "react";


export default class SearchedTrack extends React.Component
{
    constructor(props) {
        super(props);
    }

    play = () => {
        alert("playing : " + this.props.trk.name)
    }
    
    render() {

        return (
            <div onClick={this.play} style={{cursor: "pointer", "border-bottom": "1px solid"}}>
            <img src={this.props.trk.album.images[1].url}></img>
            <div style={{display: "inline-block", "padding-left": "1rem"}}>
                <p>Title : {this.props.trk.name}</p>
                <p>Artist : {this.props.trk.artists[0].name}</p>
                <p>Album : {this.props.trk.album.name}</p>
            </div>
        </div>
    )
}
}