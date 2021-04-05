import React, { Component } from 'react'
import {Button} from "react-bootstrap"

function flag(ct) {
    ct = ct.toLowerCase();   
    document.getElementById("flagholder").src = ("../png100px/" + ct + ".png")
}

export default class Userprofile extends Component {
    constructor(props) {
        super(props);
    }

    disc = () => {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        window.open('https://www.spotify.com/logout/', '_blank');
        window.location = "/";
    }

    render() {
        console.log(this.props.usr)
        return (
            <div style={{width: "500px", margin: "50px auto"}}>
                <img style={{borderRadius: "1000px"}} src={this.props.usr.images[0].url} alt="https://lh3.googleusercontent.com/sUdPhFArCQeltCJWBr934XznvLgCIDs1uIvccjM1pJb5bz03hoPHU3islstJae6wSrjO2A7JWqed6C-YNw=w544-h544-l90-rj"></img>
                <p>email : {this.props.usr.email}</p>
                <p>Name : {this.props.usr.display_name}</p>
                <p style={{display: 'inline-block'}}>From : {this.props.usr.country} <img id="flagholder" style={{transform: "scale(0.5)", verticalAlign: "none"}} src={"https://lh3.googleusercontent.com/sUdPhFArCQeltCJWBr934XznvLgCIDs1uIvccjM1pJb5bz03hoPHU3islstJae6wSrjO2A7JWqed6C-YNw=w544-h544-l90-rj"} alt="" ref={el => flag(this.props.usr.country)}></img></p>
                
                <br></br>
                <Button style={{margin: "50px auto"}} variant="danger" onClick={this.disc}>Disconnect</Button>
            </div>
        )
    }
}
