import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';
import './Navbar.css';

export default class Navbar extends React.Component
{
  render() 
  {
    return (
      <div className="Navbarholder"> 
      <div id="blank"></div>
      <Navbarbtn inside="Home"/>
      <Navbarbtn inside="List"/> 
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
      <button className="navbarbtn"><Icon fontSize="large" con={this.props.inside}></Icon></button> 
      );
  }
};

function Icon(props)
{

  switch (props.con) {
  case 'Home':
    return (<SvgIcon {...props}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></SvgIcon>);
    break;
  case 'List':
    return (<SvgIcon {...props}><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></SvgIcon>);
    break;
  case 'Search':
    return (<SvgIcon {...props}><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></SvgIcon>);
    break;
  case 'User':
    return (<SvgIcon {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></SvgIcon>);
    break;
}
}