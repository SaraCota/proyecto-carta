import React from 'react';
import '../components/Letter.css';
import Canvas from '../components/Canvas.js';

class Letter extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='card'>
                    <div className='canvasContainer'>
                        <Canvas id='canvas'></Canvas>
                    </div>
                </div>
            </div>
        );
    };
}

export default Letter;