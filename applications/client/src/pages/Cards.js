import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 ><strong>TOP LISTINGS FOR YOU!</strong></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/babysit.jpg'
              text='Find a babysitter for tonight or make regular appointments.'
              label='Babysitting'
              path='/viewPosts'
            />
            <CardItem
              src='/tutor.jpg'
              text='Boost your childrens academics by finding a tutor.'
              label='Tutoring'
              path='/viewPosts'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/daycare.jpg'
              text='Leave your kids to people you can trust.'
              label='DayCare'
              path='/viewPosts'
            />
            <CardItem
              src='/piano.jpg'
              text='Teach your children how to play an instrument, or how to speak Ancient Greek.'
              label='Lessons'
              path='/viewPosts'
            />
            <CardItem
              src='/hack.jpg'
              text='Teach your children how to hack. Cash out on money when they get old ;)'
              label='Coaches'
              path='/viewPosts'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;