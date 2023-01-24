import React from "react"
import "./childprofile.css"
import icon from '../../images/monster.png'

export default function ViewChildProfiles() {
    function replace() {
        document.getElementById("edu-content").innerHTML="Recommendations: ";
        document.getElementById("act-content").innerText="";
    }
    function replaceact() {
        document.getElementById("act-content").innerHTML="activities";
        document.getElementById("edu-content").innerText="";
    }
  return (

      <div class={"float-container"} className={"profile"}>
        <div className={"profile-box"}>
          <img src = {icon}
            className={"icon"}/>
          <label className={'profile-text'}>
            <h1>Name: </h1>
            <h1>Age: </h1>
         </label>
        </div>
        <div className={"rec-box"}>
            <div class={"float-container"} className={'button'}>
              <div className={'education-button'}>
                <button type="button" className={'edu-bttn'} id = "bttn-1" onClick={replace}>
                  Education
                </button>
              </div>
              <div className={'activities-button'}>
                <button type={"button"} className={'act-bttn'} id = "bttn-2" onClick={replaceact}>
                  Activities
                </button>
              </div>
            </div>
            <div className={"content-box"} id={'content'}>
            <div id={"edu-content"} style={{display: 'block'}} >
                <p> Recommendations: </p>
            </div>
            <div id={"act-content"} style={{display: 'block'}} >
                <p> </p>
            </div>
            </div>
        </div>

      </div>
  )
}

