import React from "react"
import {Jumbotron} from "react-bootstrap"

const JumboHeader=(props)=>{
    return (
      <Jumbotron className="sec7Jumbotron">
        <h1 className="text-center custom3">{props.header}</h1>
        <p className="text-center custom">
          {props.text}
        </p>
      </Jumbotron>
    );
}
export default JumboHeader