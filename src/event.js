import React from 'react'
import logo from './images/reactlogo.jpg';
import './App.css';
import Circle from './circles'

const Event = (props) => {
    return (
        <div>
            <div >
                <div style={{ "backgroundColor": "#85C1E9", "border": "2px solid black", "height": "auto", "width": "300px", "alignContent": "center", "padding": "20px", "paddingBotom": "5px","borderRadius":"20px"}}>

                    <div style={{ "alignItems": "center" }}>
                        <div>
                            <img src={logo} style={{ "height": "50px", "width": "50px", "float": "left", "marginRight": "20px","borderRadius":"10px" }} />
                        </div>
                        <h4 style={{ "marginBottom": "0px" }}>Design Talk</h4>
                        <p style={{ "margin": "0px" }}>12 Oct,13:300</p>
                        <div style={{ "display": "inline-block" }}>
                            <p >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illo quam harum. Nemo consectetur obcaecati necessitatibus, culpa officiis provident qui harum sunt ullam tempore consequuntur dolores explicabo quos sed optio?                </p>

                            <hr></hr>
                            <Circle />

                            <p style={{ 'float': 'right', 'marginTop': '-35px' }}>
                                112 joined

                            </p>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Event