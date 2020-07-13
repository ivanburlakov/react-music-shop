import React from 'react';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

const Image = () => (
  <div style={{width: 300, height: 300}}>
    <RenderSmoothImage src={'your-image-source'} alt="alternate-text"  />
  </div>
);

export default Image;