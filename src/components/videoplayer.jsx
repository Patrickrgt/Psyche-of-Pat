import React from "react";
// import { useState } from "react";
// import { useTransition, animated } from "react-spring";

import "../App.css";

const VideoPlayer = (props) => {
  //   const [isVisible, setIsVisible] = useState(false);
  //   const transition = useTransition(isVisible, {});

  //   const transitions = useTransition(slides[index], (item) => item.id, {
  //     from: { opacity: 0 },
  //     enter: { opacity: 1 },
  //     leave: { opacity: 0 },
  //   });

  return (
    <React.Fragment>
      {/* <div>
        {transition((style, item) =>
          item ? (
            <animated.div style={style}>
              <div className="video-overlay">
                <h1 className="overlay-quote fade-in">{props.quote}</h1>
                <h1 className="overlay-author fade-in">{props.author}</h1>
              </div>
              <video
                id="videoPlayer"
                // className="fade-in"
                autoplay
                loop
                muted
              >
                <source src={props.pv} type="video/mp4"></source>
              </video>
            </animated.div>
          ) : (
            ""
          )
        )}
      </div> */}

      <div className="video-overlay animate__animated animate__fadeIn">
        <h1 className="overlay-quote">{props.quote}</h1>
        <h1 className="overlay-author fade-in">{props.author}</h1>
      </div>
      <video
        id="videoPlayer"
        className=" animate__animated animate__fadeIn"
        autoplay
        loop
        muted
        playsInline
      >
        <source src={props.pv} type="video/mp4"></source>
      </video>

      {/* <div className="video-overlay">
        <h1 className="overlay-quote fade-in">{props.quote}</h1>
        <h1 className="overlay-author fade-in">{props.author}</h1>
      </div>
      <video
        id="videoPlayer"
        // className="fade-in"
        autoplay
        loop
        muted
      >
        <source src={props.pv} type="video/mp4"></source>
      </video> */}
    </React.Fragment>
  );
};

export default VideoPlayer;
