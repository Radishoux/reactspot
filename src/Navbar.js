import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';
import ReactDOM from 'react-dom';
import SpotifyWebApi from "spotify-web-api-node"
import {Form} from "react-bootstrap"

const spotifyApi = new SpotifyWebApi({
    clientId: "06b399096b834aa4889d88263fe2d969",
  })

var rendered = {
    Home : false,
    Search : false,
    User : false,
}

var atm = "Home";

var at;
export default class Navbar extends React.Component
{
    render() 
    {
        at = this.props.at;
        spotifyApi.setAccessToken(at)
        return (
            <div className="Navbarholder"> 
            <div id="blank"></div>
            <Navbarbtn inside="Home"/>
            <Navbarbtn inside="Search"/>
            <Navbarbtn inside="User"/>
            <div id="blank"></div>
            
            </div>      
        );
    }
    
}
class Navbarbtn extends React.Component
{
    render() 
    {
        return (
            <button id={this.props.inside + "btn"} className="navbarbtn" onClick={() => switchdiv(this.props.inside)}><Icon fontSize="large" con={this.props.inside}></Icon></button> 
            );
    }
};

function switchdiv(which) 
{

    document.getElementById(atm+"Div").classList.remove("shown");
    if (!rendered[which]) loadDiv(which)
    setTimeout(function(){
        document.getElementById(atm+"Div").classList.add("shown");
    }, 10);
    atm = which;
    console.log(atm);
}

function loadDiv(which) 
{
    if (which === "Home") 
    {
        ReactDOM.render(<Home />,document.getElementById('HomeDiv'));
        rendered.Home = true;
    }
    if (which === "Search") 
    {
        ReactDOM.render(<Search />,document.getElementById('SearchDiv'));
        rendered.Search = true;
    }
    if (which === "User") 
    {
        ReactDOM.render(<User />,document.getElementById('UserDiv'));
        rendered.User = true;
    }
}

function Home() 
{
    return (
        <div>
        Home
        </div>
    )
}

function Search() 
{
    var search;

    function research(params) {
        document.getElementById("searchreceiver").innerHTML = "";
        search = params;
        console.log(params)
        spotifyApi.searchTracks(search)
        .then(function(res) {
            res.body.tracks.items.map(tracks =>{
                var newDiv = document.createElement("div");
                var newImg = document.createElement("img");
                newImg.src = tracks.album.images[1].url;
                newDiv.appendChild(newImg);
                var txtDiv = document.createElement("div");
                txtDiv.className = "searchholder"
                txtDiv.innerHTML += "Title : " + tracks.name;
                txtDiv.innerHTML += "</br>"
                txtDiv.innerHTML += "Artist : " + tracks.artists[0].name;
                txtDiv.innerHTML += "</br>"
                txtDiv.innerHTML += "Album : " + tracks.album.name;
                newDiv.appendChild(txtDiv);
                document.getElementById("searchreceiver").appendChild(newDiv);
                console.log(tracks);
            })
          }, function(err) {
            console.error(err);
          });
    }

    return (
        <div>
        <Form.Control
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => research(e.target.value)}
        />
        <div id="searchreceiver"></div>
        </div>
    )
}

function User() 
{
    return (
        <div>
        User
        </div>
    )
}

function Icon(props)
{
    
    switch (props.con) {
        case 'Home':
        return (<SvgIcon {...props}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></SvgIcon>);
        case 'Search':
        return (<SvgIcon {...props}><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></SvgIcon>);
        case 'User':
        return (<SvgIcon {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></SvgIcon>);
        default :
        return (<SvgIcon {...props}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></SvgIcon>);
    }
}

