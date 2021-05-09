import React from "react"
import {Container,} from "react-bootstrap"
import Navigation from "./Navigation"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section4 from "./Section4"

const Homepage=()=>{
    return(
        <div>
            <Navigation/>
            <Section1/>
            <Section2/>
            <Section4/>
        </div>
        
            
        
    )
}
export default Homepage