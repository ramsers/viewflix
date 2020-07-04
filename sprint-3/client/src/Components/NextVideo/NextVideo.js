import React from 'react';
import './NextVideo.scss';
import { Link } from 'react-router-dom';


class NextVideo extends React.Component {

    render() {
        
        let currVidId = this.props.currVidData.id;
        let sideVid = this.props.sideVidData;
        let noFirst = sideVid.filter( vid => vid.id !== currVidId);
        
        return(
        <aside className="next-vid">
            <h4 className="next-vid__head">Next Video</h4>
            
            {
                noFirst.map(nextVids => {
                return (
                    <Link className="next-vid__ctn" key={nextVids.id} to={`/videos/${nextVids.id}`}>
                        <img className="next-vid__img" src={nextVids.image} alt="Thumbnail for Suggested Video"/>
                        <div className="next-vid__channel-info">
                            <h4 className="next-vid__header">{nextVids.title}</h4>
                            <p className="next-vid__channel">{nextVids.channel}</p>
                        </div>
                    </Link>
                        
                    )
                })}
        </aside>
        )
    }
}

export default NextVideo;