import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
    return(
        <div className="skills__content">
        <h3 className="skills__title">Producer</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Recording & Editing</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Mixing & Mastering</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Music Theory & Composition</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Songwriting & Collaboration</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                {/* 
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Node.js</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                 */}
            </div>
        </div>
    </div>
    );
}

export default Backend;