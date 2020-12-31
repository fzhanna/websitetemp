import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1> Mollit duis occaecat irure ea ex eu consectetur Lorem.</h1>
            <p>Enim anim incididunt exercitation excepteur ullamco consectetur ad pariatur.</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                PROJECTS
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                LinkedIn <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}


export default HeroSection
