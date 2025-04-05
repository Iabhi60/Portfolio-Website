import React, { useState } from "react";
import { motion } from "framer-motion";
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div
                        className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-award qualification__icon"></i>
                        Certifications
                    </div>
                </div>

                <div className="qualification__sections">
                    <motion.div
                        className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
                        initial="hidden"
                        animate={toggleState === 1 ? "visible" : "hidden"}
                        variants={tabVariants}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Undergraduation</h3>
                                <span className="qualification__subtitle">Abdul Kalam Technical University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021-Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Intermediate</h3>
                                <span className="qualification__subtitle">Saraswati Vidya Mandir Inter College Gola Gokarannath Kheri [UP Board]</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020-2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">Saraswati Vidya Mandir Inter College Gola Gokarannath Kheri [UP Board]</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018-2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}
                        initial="hidden"
                        animate={toggleState === 2 ? "visible" : "hidden"}
                        variants={tabVariants}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Programming with Java</h3>
                                <span className="qualification__subtitle">Coding Ninjas</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 9 May 2024
                                </div>
                                <a 
        href="https://drive.google.com/file/d/1gWlVCQKz2gairMTtl60syuZ5nasByACa/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        className="qualification__certificate-link"
    >
        View Certificate
    </a>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full Stack Web Development</h3>
                                <span className="qualification__subtitle">Apna College</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 9 Feb 2024
                                </div>
                                <a 
        href="https://drive.google.com/file/d/1YVJsVseKRLVZWqIOl_gNzleLq5wJfRJE/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        className="qualification__certificate-link"
    >
        View Certificate
    </a>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Front-end Web Development</h3>
                                <span className="qualification__subtitle">Coding Ninjas</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 21 Dec 2023
                                </div>
                                <a 
        href="https://drive.google.com/file/d/1u99L0wfhMaK3WAxp6TgYzt9MPmWEvbyY/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        className="qualification__certificate-link"
    >
        View Certificate
    </a>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
