import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Our Team</h2>
            <Link to='/about/jocelyn'>Jocelyn</Link>
            <Link to='/about/edel'>Edel</Link>
            <Link to='/about/miroslav'>Miroslav</Link>
            <Link to='/about/hira'>Hira</Link>
            <Link to='/about/ansel'>Ansel</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Milestones</h2>
            <Link to='/createPost'>Create Posts</Link>
            <Link to='/viewPosts'>View Posts</Link>
            <Link to='/register'>Sign Up</Link>
            <Link to='/login'>Sign In</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              {<img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-milestone-achievements-flaticons-lineal-color-flat-icons.png" />}
            </Link>
          </div>
          <small class='website-rights'>Milestones est. 2022 © SFSU</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/https://www.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to="instagram.com"
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://twitter.com/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;