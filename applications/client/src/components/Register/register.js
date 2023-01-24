import React, { useState } from "react"
import "./register.css"
import { useNavigate } from "react-router";
import blockBaby from '../../images/playtime (1) 1.png'
import basketBro from '../../images/basketball-1.png'
import facebookIcon from '../../images/facebook-1.png'
import googleIcon from '../../images/search-1.png'

export default function CreateAccount() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch(`http://localhost:3001/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
      .catch(error => {
        window.alert(error);
        return;
      });

    setForm({ name: "", email: "", password: "" });
    navigate("/");
  }
  return (
    <div className="create-account flex-col-hstart-vstart clip-contents">
      <div className="group-17">
        <div className="group-3"></div>
      </div>

      <p className="txt-9109">Create Account</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            className="frame-3 flex-row-vstart-hstart txt-348"
            type="text"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
            placeholder='Full Name'></input>
        </div>

        <div className="form-group">
          <input
            className="frame-5 flex-row-vstart-hstart txt-348"
            type='email'
            id="email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
            placeholder='Email Address'></input>
        </div>

        <div className="form-group">
          <input
            className="frame-4 flex-row-vstart-hstart txt-348"
            type='password'
            id="password"
            value={form.password}
            onChange={(e) => updateForm({ password: e.target.value })}
            placeholder='Password'>
          </input>
        </div>

        <p className="txt-269">Are you a Parent or Provider?</p>
        <div className="signup-parent-provider switch-field">
          <input type="radio" id="radio-one" name="switch-one" value="Parent" checked />
          <label for="radio-one">Parent</label>
          <input type="radio" id="radio-two" name="switch-one" value="Provider" />
          <label for="radio-two">Provider</label>
        </div>
        <div className='rectangle-signup'>
          <input className='rectangle-8' type='submit' value='Sign Up' style={{textAlign: 'center'}}></input>
        </div>
      </form>
      <img
        src={basketBro}
        alt="Not Found"
        className="basketball-1"
      />

      <p className="txt-335">Already have an account?</p>
      <a className="txt-721" href='./login'>Log In here</a>
      <img
        src={blockBaby}
        alt="Not Found"
        className="playtime-11"
      />
    </div>
  );
}
