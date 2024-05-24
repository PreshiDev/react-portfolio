import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Singer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Vocal Technique</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div> 
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Delivery & Performance</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Genre Expertise</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Collaboration</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    {/*
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Typescript</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
    );
}

export default Frontend;