import React from "react";
// import flashSaleImg from './flash-sale.jpg';
// import time from './time.jpg';
// import learn from './learn.jpg';
import './home.css';

function Home() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide mt-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active bg-flash">
                        <div className="bg-dark divSize container-fluid row contentcard">
                            <h2 className="mx-auto my-auto text-white fs-4">24-Hour Flash Sale</h2>
                            <p className="mx-auto my-auto text-white">Courses as low as ₹499 for one day only. Grab your favorite.</p>
                        </div>
                    </div>
                    <div className="carousel-item bg-time">
                        <div className="bg-dark divSize container-fluid row contentcard">
                                <h2 className="mx-auto my-auto text-white fs-4">Benefit big-time</h2>
                                <p className="mx-auto my-auto text-white">Join our email list for special offers, personalized course recommendations, and more.</p>
                            </div>
                        </div>
                    <div className="carousel-item bg-learn">
                        <div className="bg-dark divSize container-fluid row contentcard">
                                <h2 className="mx-auto my-auto text-white fs-4">Learn from anywhere</h2>
                                <p className="mx-auto my-auto text-white">On the couch, from the backyard, or on your commute. Our app lets you decide.</p>
                            </div>
                        </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon mt-5" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon mt-5" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Home;
