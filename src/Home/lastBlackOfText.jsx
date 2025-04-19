import React from "react";
import { Link } from "react-router-dom";

export default function LastBlockOfText() {
    return (
        <div className="mt-3 mb-3 px-2 md:px-5">
            <hr />
            <div className="exhibitor-container mb-3 mt-3 ml-1 mr-1">
                <h3 className="flex-container align-vertical-middle pt-3 pb-3 pr-3 pl-3"  style={{textAlign: 'center'}}>
                    Connect with the next generation of Aviation Professionals
                </h3>
                <div className="exhibitor-inner-container"  style={{textAlign: 'center'}}>
                    <h4 className="uppercase mb-1">Become an exhibitor</h4>

                    <p className="mb-3">
                        Put your product in front of 6000 enthusiasts and the
                        current industry experts, and future best and bright of
                        the aviation industry.
                    </p>
                    <div className="flex-container align-center">
                        <Link to="/ExhibitorRegistration" className="btn-secondary mt-3">
                            <span className="uppercase">Book my exhibit</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}