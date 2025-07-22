import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import "./YoutubeEmbed.css";

function YoutubeWrap() {
  return (
    <div className="youtube-wrap">
      <div className="section-header">
      <div className="section-title section-titlee">
        <h2>Expert Doctor Talks</h2>
        <p>Watch our trusted doctors share insights, tips, and real advice on our YouTube channel</p>
        </div>
      </div>
      <YoutubeEmbed embedId="shxqFEtApuY" />
    </div>
  );
}

export default YoutubeWrap;
