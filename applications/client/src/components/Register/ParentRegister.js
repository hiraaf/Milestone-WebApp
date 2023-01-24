import React from 'react';
import './ParentRegister.css'

export default function register() {
    return (
        <div className={"register-parent"}>
            <p className="title" align="center">PARENT AND CHILD INFORMATION</p>
            <form className="form">
                <label>
                    <input className="name" type="text"
                           align="center" placeholder="Name"/>
                </label>
                <label>
                    <input className="zipcode" type="text"
                           align="center" placeholder="Zip Code"/>
                </label>
                <label>
                    <input className="childName" id = "childName1" type="text"
                           align="left" placeholder="Child's Name"/>
                    <input className="childAge" id = "childAge1" type="text"
                           align="left" placeholder="Age"/>
                    <input className="ChildServices" id = "ChildServices1" type="text"
                           align="left" placeholder="Services Needed"/>
                </label>
                <label>
                    <input className="childName" id = "childName2" type="text"
                           align="left" placeholder="Child's Name"/>
                    <input className="childAge" id = "childAge2" type="text"
                           align="left" placeholder="Age"/>
                    <input className="ChildServices" id = "ChildServices2" type="text"
                           align="left" placeholder="Services Needed"/>
                </label>
                <label>
                    <input className="childName" id = "childName3" type="text"
                           align="left" placeholder="Child's Name"/>
                    <input className="childAge" id = "childAge3" type="text"
                           align="left" placeholder="Age"/>
                    <input className="ChildServices" id = "ChildServices3" type="text"
                           align="left" placeholder="Services Needed"/>
                </label>

                <div>
                    <a className="submit-button" align="center">JOIN</a>
                </div>
            </form>
        </div>
    )
}