import React from 'react';
import { HiOutlineSpeakerphone, HiOutlineMusicNote, HiOutlineSparkles } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineSpeakerphone className="about__icon" />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">4 Years</span>
        </div>
        <div className="about__box">
            <HiOutlineMusicNote className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">35+ Projects</span>
        </div>
        <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  );
}

export default Info;