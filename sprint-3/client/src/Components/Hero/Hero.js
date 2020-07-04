import React from 'react';
import fullscreen from './HeroAssets/Icon-fullscreen.png';
import play from './HeroAssets/Icon-play.png';
import volume from './HeroAssets/Icon-volume.png';

function Hero(props) {
    return(
        <section className="main-vid__hero">
            <div className="main-vid__hero-ctn">
                <div className="main-vid__controls">
                    <img className="main-vid__play" width="20px" src={play} alt="play button"/>
                    <div className="main-vid__playback">
                        <hr className="main-vid__length"/>
                        <p className="main-vid__time">0:00/{props.currVidData.duration}</p>
                    </div>
                    <div className="main-vid__screen-volume">
                        <img className="main-vid__fullscreen" src={fullscreen} alt="fullscreen button"/>
                        <img className="main-vid__volume" src={volume} alt="volume button"/>
                    </div>
                </div>
                <video className="main-vid__hero-vid" poster={props.currVidData.image}>
                   <source src={props.currVidData.video}/>
                </video>
            </div>
        </section>
    )
}

export default Hero;