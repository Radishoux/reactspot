import Signedin from "./Signedin"
import Signin from "./Signin"
import React from "react";

const code = new URLSearchParams(window.location.search).get("code")

export default function App() 
{
      return code ? <Signedin code={code} /> : <Signin />
}



