import React from "react";

export default class Initer extends React.Component 
{
    render() {
        if (document.getElementById('Homebtn')) document.getElementById('Homebtn').click();
        return (
            <div id="initer">
            </div>
        );
    }
}
