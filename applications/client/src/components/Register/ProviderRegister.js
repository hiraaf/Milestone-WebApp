import React from 'react';
import './ProviderRegister.css'

export default function register() {
    return (
        <div className={"register-provider"}>
            <p className="title" align="center">PROVIDER INFORMATION</p>
            <form className="form">
                <label class = "info">
                    <input className="provider-name" type="text"
                           align="center" placeholder="Name"/>
                    <input className="provider-age" type="text"
                           align="center" placeholder="Age"/>
                    <input className="provider-gender" type="text"
                           align="center" placeholder="Gender"/>
                    <input className="provider-zipcode" type="text"
                           align="center" placeholder="Zip Code"/>
                    <input className="provider-education" type="text"
                           align="center" placeholder="Highest Education"/>
                    <input className="experience" type="text"
                           align="center" placeholder="Experience"/>
                </label>
                <label>
                    <input className="Services" id = "services1" type="text"
                           align="left" placeholder="Services You Want To Provide"/>
                    <input className="Services" id = "services2" type="text"
                           align="left" placeholder="Services You Want To Provide"/>
                </label>
                    <label>
                        <input className="Services" id = "services3" type="text"
                               align="left" placeholder="Services You Want To Provide"/>
                        <input className="Services" id = "childAge4" type="text"
                               align="left" placeholder="Services You Want To Provide"/>
                    </label>
                <label>
                    <input className="Services" id = "services5" type="text"
                           align="left" placeholder="Services You Want To Provide"/>
                    <input className="Services" id = "childAge6" type="text"
                           align="left" placeholder="Services You Want To Provide"/>
                </label>

                <div>
                    <a className="submit-button" align="center">JOIN</a>
                </div>
            </form>
        </div>
    )
}