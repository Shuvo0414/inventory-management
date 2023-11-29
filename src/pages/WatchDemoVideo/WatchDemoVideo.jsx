const WatchDemoVideo = () => {
  const openYouTubeVideo = () => {
    const youtubeVideoUrl = "https://www.youtube.com/watch?v=DZhHSR4_9B4";

    window.open(youtubeVideoUrl, "_blank");
  };

  return (
    <li>
      <button onClick={openYouTubeVideo} className="cursor-pointer  ">
        Watch Demo
      </button>
    </li>
  );
};

export default WatchDemoVideo;
