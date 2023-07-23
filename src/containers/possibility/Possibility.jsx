import React from 'react';
import './possibility.css';
import possibilityImage from '../../images/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
        <div className='gpt3__possibility-image'>
          <img src={possibilityImage} alt="image"/>
        </div>
        <div className='gpt3__possibility-content'>
            <h4>Request Early Access to Get Started</h4>
            <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, quae? Asperiores pariatur beatae necessitatibus esse laboriosam vero enim obcaecati dignissimos ab eveniet, dolore exercitationem a atque veniam, eligendi voluptatum quas quis quaerat vitae dicta.</p>
            <h4>Request Early Access to Get Started</h4>
        </div>
    </div>
  )
}

export default Possibility