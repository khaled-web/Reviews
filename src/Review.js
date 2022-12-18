import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaAccessibleIcon } from 'react-icons/fa';

const Review = () => {
  //useStateItems
  const[index, setIndex]=useState(0);
  //destructuringData
  const {name, job, image, text}=people[index];
  //onClick_checkNumber
  const checkNumber = (number)=>{
    if(number > people.length-1){
      return 0
    }
    if(number < 0){
      return people.length-1
    }
    return number
  }
  //OnClick_nextPerson
  const nextPerson = ()=>{
    setIndex((index)=>{
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  //OnClick_prevPerson
  const prevPerson = ()=>{
    setIndex((index)=>{
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  //onClick_RandomPerson
  const RandomPerson = ()=>{
    let randomNum = Math.floor(Math.random()*people.length)
    console.log(randomNum)
    if(randomNum === index){
      randomNum = index + 1
    }
    setIndex(()=>{
      let newIndex = randomNum;
      return checkNumber(newIndex)
    })
  }

  return(
  <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img'/>
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight/>
      </button>
    </div>
    <button className='random-btn' onClick={RandomPerson}>
      surprise me
    </button>
  </article>
  )
}; 

export default Review;
