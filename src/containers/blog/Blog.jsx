import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
        <div className='gpt3__blog-heading'>
            <h1 className='gradient__text'>A lot is happening. <br /> We are blogging about it.</h1>
        </div>
        <div className='gpt3__blog-container'>
            <div className='gpt3__blog-container__groupA'>
                <Article imageUrl={blog01} date="June 27, 2023" title="OpenAI and GPT-3 in the Future."/>
            </div>
            <div className='gpt3__blog-container__groupB'>
                <Article imageUrl={blog02} date="June 27, 2023" title="OpenAI and GPT-3 in the Future."/>
                <Article imageUrl={blog03} date="June 27, 2023" title="OpenAI and GPT-3 in the Future."/>
                <Article imageUrl={blog04} date="June 27, 2023" title="OpenAI and GPT-3 in the Future."/>
                <Article imageUrl={blog05} date="June 27, 2023" title="OpenAI and GPT-3 in the Future."/>
            </div>
        </div>
    </div>
  )
}

export default Blog