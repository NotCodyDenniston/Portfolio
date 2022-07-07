import React from "react";
import Testimonial from "./Testimonial";

export default function Testimonials(props){

    const { change, submit} = props;
    const {name, description} = props.values;

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(props)
        submit()
    }
    const onChange = (e) =>{
        const {name, value } = e.target;
        change(name, value)

    }
   
    return(
        <div>
        <h1>Hello! These are my testimonials</h1>
        <form>
            <input type="text" name="name" placeholder="name" value={name} onChange={onChange}/>
            <input type="text" name="description" placeholder="description" value={description} onChange={onChange}/>

        <button  onClick={onSubmitHandler}>Submit</button>
        </form>
        {props.testimonials.map(test => (
            <Testimonial key={test.id} test={test} />
        ))}
          </div>
    )
}