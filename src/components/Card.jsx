import './Card.css';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from 'react';
import { transform } from 'framer-motion';

function Card({testimonialsData}){

    const[Id , setId]=useState(0);
    const len=testimonialsData.length-1

    function nextClickHandler(){
            let newId=Id+1
            if(newId==7){
                newId=0
                setId(newId)
            }
            else{
                setId(newId)
            }
    }

    function prevClickHandler(){
        let newId=Id-1
        console.log(newId)
        if(newId==-1){
            newId=len
            setId(newId)
        }
        else{
            setId(newId)
        }
    }

    function surpriseHandler(){

        function getRandomNumberInclusive(min, max) {
            
            const randomDecimal = Math.random();
          
            
            const randomNumber = Math.floor(randomDecimal * (max - min + 1) + min);
          
            return randomNumber;
          }
          
          const newId = getRandomNumberInclusive(0, len);
          setId(newId)
    }

    return(

        <div className="Card card text-bg-light shadow p-3 bg-body-tertiary rounded">
            <div>
                <img className='image' src={testimonialsData[Id].image} alt='###'></img>
                <div className="imageShadow"></div>
            </div>
            <div className="name">
                <h3>{testimonialsData[Id].name}</h3>
            </div>
            <div className="price">
                <h6>{testimonialsData[Id].price}</h6>
            </div>
            <div className='openQuote'>
            <FaQuoteLeft />
            </div>
            <div className='info'>
                {testimonialsData[Id].info}
            </div>
            <div className='closeQuote'>
            <FaQuoteRight />
            </div>
            <div>
                <button className='sliderButton bg-light' onClick={prevClickHandler}>
                    <MdArrowBackIosNew />
                </button>
                <button className='sliderButton bg-light' onClick={nextClickHandler}>
                    <MdArrowForwardIos />
                </button>
            </div>
            <div>
                <button className='btn btn-primary' onClick={surpriseHandler}>Surprise Me!</button>
            </div>
        </div>
    )
}

export default Card;