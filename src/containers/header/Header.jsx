import React from 'react';
import './header.css';
import people from '../../images/people.png';
import ai from '../../images/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
     <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur sit rerum id placeat? Quibusdam voluptas repudiandae veritatis possimus optio, in laudantium quod eum rerum ipsum eius id.</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        </div>

          <div className='gpt3__header-image'>
            <img src={ai} alt="ai" />
          </div>

    </div>
  )
}
export default Header