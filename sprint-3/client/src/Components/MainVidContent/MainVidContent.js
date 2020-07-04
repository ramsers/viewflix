import React from 'react';
import './MainVidContent.scss'; 
import view from './MainVidAssests/Icon-views.png';
import likes from './MainVidAssests/Icon-likes.png';


function MainVidContent(props) {
    let timestamp = props.currVidData.timestamp;
                let dateObj = new Date(timestamp);
                let year = dateObj.getFullYear();
                let month = (dateObj.getMonth() + 1);
                let date = dateObj.getDate();
                let vidDescDate = `${month}/${date}/${year}`;
    return (
        <div className="main-vid">
            <div className="border"></div>
            <div className="main-vid__info">
                <h1 className="main-vid__header">{props.currVidData.title}</h1>
                <div className="main-vid__info-ctn">
                    <aside className="main-vid__poster-info">
                        <span className="main-vid__author">{props.currVidData.channel}</span>
                        <span className="main-vid__date">{vidDescDate}</span>
                    </aside>
                    <aside className="main-vid__viewer-info">
                        <img src={view} alt="" className="main-vid__viewer-icon"/>
                        <span className="main-vid__views">{props.currVidData.views}</span>
                        <img src={likes} alt="" className="main-vid__likes-icon"/>
                        <span className="main-vid__likes">{props.currVidData.likes}</span>
                    </aside>
                </div> 
                <hr className="main-vid__split"/>
                <p className="main-vid__desc">{props.currVidData.description}</p>
            </div>
        </div>
    )
}

export default MainVidContent;