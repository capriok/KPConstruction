import React from "react";
import ReactPlayer from "react-player";

window.YTConfig = {
  host: "https://www.youtube.com",
};

const Media = () => {
  return (
    <>
      <h1 className="title">Check out what we do</h1>
      <div className="media-cont">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=qIDsw7q63B0&feature=youtu.be"
          controls={true}
        />
      </div>
    </>
  );
};

export default Media;
