import React from "react";




export default function Project(props){
 const {img, description, url} = props.project
   
    
    return(
        <div className="project">
        <p>{description}</p>
        <img src={img} alt=" my projects"/>

        <a target="_blank" href={url} onClick={console.log(url)}>
            <button>Code</button>
        </a>
       
        
          </div>
    )
}