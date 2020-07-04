import React from 'react';
import './UploadPage.scss';
import thumbnail from './assets/upload-img.jpg';
import axios from 'axios';

const API_URL = 'http://localhost:8080';

class UploadPage extends React.Component {

    state = {
        videosData: []
        
    }

    postRequest = (url, kvPairs, state) => {
        axios.post(`${url}`, kvPairs)
        .then(()=> {
            this.setState({
                videosData: state
            })
        })
    }

    addVideo = (e) => {
        e.preventDefault()
        let image = thumbnail;
        let newVid = this.state.videosData.slice()
        let title = e.target.title.value;
        let description = e.target.description.value;
        newVid.push({title, description, image})
            this.postRequest(`${API_URL}/videos`, 
            {title:title, 
            description:description, 
            image:image}, 
            newVid
        )
        e.target.reset();
    }

    render() {
        return(
            <>
                <div className="upload">
                    <hr className="upload__split"/>
                    <div className="upload__ctn">
                        <h2 className="upload__header">Upload Video</h2>
                        <h4 className="upload__thumbnail-head">Video Thumbnail</h4>
                        
                        
                        <div className="upload__form-ctn">
                            <img className="upload__thumbnail-img" width="100px"src={thumbnail} alt=""/>
                            <form className="upload__form" onSubmit={this.addVideo}>
                                <label className="upload__label" htmlFor="Video">Title Your Video</label>
                                <input className="upload__title" id="title" type="text" placeholder="Add a title to your video"/>
                                <label className="upload__label" htmlFor="Video">Add a Video Description</label>
                                <textarea className="upload__desc" id="description" cols="30" rows="10" placeholder="Add a description of your video">
                                </textarea>
                                <hr className="upload__split-form"/>
                                <div className="upload__btn-ctn">
                                        <button className="upload__publish-btn" type="submit">Publish</button> 
                                        <button className="upload__cancel-btn" type="submit">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
           </>
        )
    }
        
}

export default UploadPage;