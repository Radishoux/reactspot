import React from "react";
import Navbar from "./Navbar"
import useAuth from "./Auther"
import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'


export default function Signedin({ code }) {
  const accessToken = useAuth(code)
    return (
            <div id="SignedinDaddy">
            <Navbar/>
            <div>{code}</div>
            </div>
        );
    }
    
    const user = createSlice({
        name: 'user',
        initialState: {
            uname : 'rudy',
            listneningTo : '',
            accessToken : '', 
            refreshToken : ''
        },
        reducers: {
          refreshToken: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
          },
          decremented: state => {
            state.value -= 1
          }
        }
      })


