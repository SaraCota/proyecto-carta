import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';

const Canvas = () => {

  const [canvas, setCanvas] = useState('');
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  const [imgURL, setImgURL] = useState('');

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 300,
      width: 800,
      backgroundColor: 'white'
    })
  )

  const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: 'yellow'
    });
    canvi.add(rect);
    canvi.renderAll();
  }

  const addImg = (e, url, canvi) => {
    e.preventDefault();
    new fabric.Image.fromURL(url, img => {
      img.scale(0.75);
      canvi.add(img);
      canvi.renderAll();
      setImgURL('');  
    });
 }
 
  return(
    <div>
      <h1></h1>
      <button onClick={() => addRect(canvas)}>Rectangle</button>
      <form onSubmit={e => addImg(e, imgURL, canvas)}>
        <div>
            <input 
                type="text" 
                value={imgURL} 
                onChange={ e => setImgURL(e.target.value)} 
            />
            <button type="submit">Add Image</button>
        </div>
        </form>
      <canvas id="canvas" />
      <button>Download</button>
    </div>
  );
}

export default Canvas;