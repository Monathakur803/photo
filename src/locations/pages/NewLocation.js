import React from "react";

const NewLocation =() => {
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