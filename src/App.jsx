import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import { data } from './data.jsx';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function App(){

    const[testimonialsData,setData]=useState(data);

    const x=useMotionValue(0);
    const y=useMotionValue(0);

    const mouseXspring=useSpring(x);
    const mouseYspring=useSpring(y);

    const rotateX=useTransform(mouseYspring,[-0.5,0.5],["20deg","-20deg"])
    const rotateY=useTransform(mouseXspring,[-0.5,0.5],["-20deg","20deg"])


    const mouseMoveHandler=(e)=>{
        const rect=e.target.getBoundingClientRect();

        const width=rect.width;
        const height=rect.height;

        const mouseX=e.clientX-rect.left;
        const mouseY=e.clientY-rect.top;

        const xPct=mouseX/width - 0.5;
        const yPct=mouseY/height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    const mouseLeaveHandler=(e)=>{
        x.set(0);
        y.set(0);
    }

    return(
        <div className="app">
            <div className="title">
                <h1>Our Testimonials Our Test</h1>
                <div style={{backgroundColor:"#007BFF", height:"0.2rem", width:"10rem", borderRadius:"20rem", marginLeft:'5.2rem'}}></div>
            </div>
            <motion.div className='cardParent' style={{rotateX, rotateY, transformStyle:'preserve-3d'}} onMouseMove={mouseMoveHandler} onMouseLeave={mouseLeaveHandler} >
                <div style={{transform:'translateZ(75px)', transformStyle:'preserve-3d'}}>
                    <Card testimonialsData={testimonialsData}></Card>
                </div>
            </motion.div>
        </div>
    );
}

export default App;