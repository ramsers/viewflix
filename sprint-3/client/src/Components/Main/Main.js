import React from 'react';
import './Main.scss'
import Hero from '../Hero/Hero';
import MainVidContent from '../MainVidContent/MainVidContent';
import GenerateComments from '../GenComments/GenComments';
import Comments from '../Comments/Comments';
import NextVideo from '../NextVideo/NextVideo';
import axios from 'axios';

const API_URL = 'http://localhost:8080';

class Main extends React.Component {
    state = {
        currVidData: [],
        sideVidData: [],
    }

    fetchDataMain = (url) => {
        axios.get(`${url}`)
        .then(response => {
            this.setState({
                currVidData: response.data[0]
            })
        })
        .catch(error => {
            return error;
        })
    }

    fetchDataSide = (url) => {
        axios.get(`${url}`)
        .then(response => {
            this.setState({
                sideVidData: response.data
            })
        })
        .catch(error => {
            return error;
        })
    }

    componentDidMount() {
        this.fetchDataMain(`${API_URL}/videos`)
        this.fetchDataSide(`${API_URL}/videos`)
    }

   
    componentDidUpdate(prevProps) {
        let { vidId } = this.props.match.params;
        let previousVidId = prevProps.match.params.vidId;

        if(vidId !== previousVidId && !vidId) {
            this.fetchDataMain(`${API_URL}/videos/1af0jruup5gu`)

        } else if (vidId !== previousVidId) {
            this.fetchDataMain(`${API_URL}/videos/${vidId}`)
        }
    }

    
    render() {
        return(
            <main className="main-content">
                <Hero currVidData={this.state.currVidData}/>
                <div className="main-content__wrapper">
                    <div className="main-content__main-vid-ctn">
                        <MainVidContent  currVidData={this.state.currVidData}/>
                        <Comments currVidData={this.state.currVidData}/>
                        <GenerateComments currVidData={this.state.currVidData} />
                    </div>
                    <div className="main-content__aside-ctn">
                        <NextVideo sideVidData={this.state.sideVidData} currVidData={this.state.currVidData}/>
                    </div>
                </div>
            </main>
            
        )
    }
}

export default Main;