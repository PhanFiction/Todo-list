import React from "react";
import { Redirect } from 'react-router-dom';

export default function PrivateRoute({ isAuth, children }) {
  return(
    <>
      {
        isAuth === false ? <Redirect to="/login"/> : children
      }
    </>
  )
}