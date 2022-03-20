import React from "react";
import loadingImage from "../images/preloader.gif";

const Loading = () => {
  return (
    <div>
      <img src={loadingImage} alt='loading' className='loading' />
    </div>
  );
};

export default Loading;
