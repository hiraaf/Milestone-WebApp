import React from "react"
import "./profile.css"

export default function Profile() {
  return (
    <div class = "float-container" className={"profile"}>
        <div class = "side-box">
            <div class = "button-sched">
                <button type={"button"} className={"sch-bttn"} id={"sch-bttn"} onClick={''}>
                    Schedule
                </button>
            </div>
            <div className="button-serv">
                <button type={"button"} className={"serv-bttn"} id={"serv-bttn"} onClick={''}>
                    Services
                </button>
            </div>
        </div>
        <div className={"contentbox"}>
            <div className={"column1"}>
                  <h1> Month </h1>
                <div className={"month-content"}>

                </div>
            </div>
            <div className={"column2"}>
                <h1> Event </h1>
                <div className={"event-content"}>

                </div>
            </div>

        </div>
    </div>

  )
}
