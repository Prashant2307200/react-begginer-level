import React from 'react'
import { useState } from 'react';

export default function Form() {
    let [formData,setFormData] = useState({
        fullName : "",
        email : ""
    });
    // let [fullName,setFullName] = useState("Prashant");
    // let [email,setEmail] = useState("prashantdobariya276@gmail.com");
    // function handleFullName(event) {
    //     setFullName(event.target.value);
    // }
    // function handleEmail(event) {
    //     setEmail(event.target.value);
    // }
    let handleInputChange = (event) => {
        setFormData( prevFormData => ({
                ...prevFormData,
                [event.target.name]: event.target.value
            })
        );
    };
    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: '',
            email: ''
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name : </label>
                &nbsp;
                <input 
                        type="text" 
                        value={formData.fullName}
                        onChange={handleInputChange}
                        id = 'fullName'
                        name = "fullName"
                />
                <br/><br/>
                <label htmlFor="email">E-mail : </label>
                &nbsp;
                <input 
                        type="email"  
                        value={formData.email}
                        onChange={handleInputChange}
                        id = 'email'
                        name = "email"
                />
                <br/><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

// rest spread map filter reduce