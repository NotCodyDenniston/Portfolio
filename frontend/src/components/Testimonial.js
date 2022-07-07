import React from "react";

export default function Testimonial (props) {
    const { id, name, description } = props.test

    return(
        <div>
      
        <p>{description} &emsp; -   {name}</p>
        </div>
    )
}