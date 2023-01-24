import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          {/* Website Icon -> Routed back to Home page when clicked */}
          {<img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-milestone-achievements-flaticons-lineal-color-flat-icons.png" />}
        </NavLink>
        <Bars />
        <NavMenu>
          {/* Home button in NavBar */}
          <NavLink to='/' activestyle="true">
            Home
          </NavLink>
          {/* About to page to Meet the team */}
          <NavLink to='/about' activestyle="true">
            About
          </NavLink>
          {/* Create post page -> Only available to Logged in Users*/}
          <NavLink to='/createPost' activestyle="true">
            Create Posts
          </NavLink>
          {/* View post page -> Only available to logged in Users */}
          <NavLink to='/viewPosts' activestyle="true">
            View Posts
          </NavLink>
        </NavMenu>
        <NavBtn>
          {/* Sign up -> Only available to logged out users. 
              Same rule for Sign In */}
          <NavBtnLink to='/register'>Sign Up</NavBtnLink>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>

      </Nav>
    </>
  );
};

export default Navbar;