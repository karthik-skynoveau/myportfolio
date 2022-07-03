import React, { Component, setState } from 'react'
import './Slider.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import Sliderdata from './Sliderdata'
import data from './Imagedata'

export default class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sliderIndex: 0,
            arrow: 'right'
        }
    }

    prevSlide() {
        this.setState({
            sliderIndex: this.state.sliderIndex === 0 ? data.length - 1 : this.state.sliderIndex - 1, arrow: 'left'
        })
    }

    nextSlide() {
        this.setState({
            sliderIndex: this.state.sliderIndex === data.length - 1 ? 0 : this.state.sliderIndex + 1, arrow: 'right'
        })
    }
    componentDidMount() {
        this.timer = setInterval(() => this.autoPlay(), 5000)
    }
    autoPlay() {
        if (this.state.arrow === 'left') {
            this.setState({
                sliderIndex: this.state.sliderIndex === 0 ? data.length - 1 : this.state.sliderIndex - 1, arrow: 'left'
            })
        }
        else {
            this.setState({
                sliderIndex: this.state.sliderIndex === data.length - 1 ? 0 : this.state.sliderIndex + 1, arrow: 'right'
            })
        }
    }
    render() {
        return (
            <div>
                <div className="slide-main-container-1">
                    <div className="slide-main-container">
                        <div className="slider-container">

                            <Sliderdata sliderIndex={this.state.sliderIndex} />

                            <div className="prev" onClick={() => this.prevSlide()}><IoIosArrowBack /></div>
                            <div className="next" onClick={() => this.nextSlide()}><IoIosArrowForward /></div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
