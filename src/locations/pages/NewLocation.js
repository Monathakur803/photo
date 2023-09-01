import React, { useState } from "react";

import "./NewLocation.css";

const NewLocation =() => {
    const [newlocation, setNewlocation] = useState ({
        title:"",
        desc:"",
        address:"",
    });
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("new location page : ", newlocation);
    };
    const changeHandler = (event) =>{
        const inputname =event.target.name;
        const newValue = event.target.value;

        setNewlocation((previousValue) =>{
            if (inputname === "newlocationtitle") {
                return {
                    title : newValue,
                    desc: previousValue.desc,
                    address: previousValue.address,
                }
            }
        })
    };
    return  (
        <form className="location-form">
            <div className="form-control">
                <label>
                    Title
                    <input name="newlocationtitle" type="text" required />                   
                </label>
            </div>
            <div className="form-control">
                <label>
                    Description
                    <textarea name="newlocationdesc" rows="3" type ="text" required/>
                </label>
            </div>
            <div className="form-control">
                <label>
                    Address
                    <input name="newlocationadr" type ="text" required/>
                </label>

            </div>
        </form>
    );
};

export default NewLocation;