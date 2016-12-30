import React from 'react'

const Canvas = (props) => {
  return(
    <div>
      <canvas id="scene" style={{backgroundColor: props.background_color, maxHeight: props.img_max_height}}/>
    </div>
  )
};

Canvas.defaultProps = {
  background_color: 'white',
  img_max_height: 130
};

export default Canvas;
