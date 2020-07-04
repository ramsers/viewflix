import React from 'react';
import './GenComments.scss';

class GenerateComments extends React.Component {


    render() {
        let userComments= this.props.currVidData.comments;
        if(!userComments) {
            return (<div><h1>Loadng...</h1></div>)
        }
        return (

            userComments.map(comment =>{
                let timestamp = comment.timestamp;
                let dateObj = new Date(timestamp);
                let year = dateObj.getFullYear();
                let month = (dateObj.getMonth() + 1);
                let date = dateObj.getDate();
                let commentDate = `${month}/${date}/${year}`;
                return(
                    <div key={comment.id} className="comments__ctn">
                        <div  className="comments__user-comment-ctn">
                            <div   className="comments__gen">
                                <div  className="comments__gen-ctn">
                                    <h4 className="comments__name">{comment.name}</h4>
                                    <p className="comments__time">{commentDate}</p>
                                    <p className="comments__comment">{comment.comment}</p>
                                </div>
                                <div   className="comments__img-ctn">
                                    <div className="comments__user-img" ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
            })
        )  
    }
}

export default GenerateComments;