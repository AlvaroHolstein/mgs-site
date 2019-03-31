import React from "react";

function JoinUs() {
    return (
        <div style={{ marginBottom: "10px" }}>
            <h1 className="text-center">Join Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card" style={{ width: "inherit", borderRadius: "10px" }}>
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="text-center card-title">WHAT DO WE NEED FROM YOU?</h5>
                            <hr />
                            <ul>
                                <li>Graduation in Computer Science or related</li>
                                <li>Strong experience with JavaScript, HTML and CSS</li>
                                <li>Frontend skills and rich experience with JS and JS frameworks/libs (design skills would be awesome)</li>
                                <li>And most of all we need your passion!</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="card" style={{ width: "inherit", borderRadius: "10px" }}>
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title text-center">WHAT CAN WE OFFER YOU?</h5>
                            <hr />
                            <ul>
                                <li>Great work environment</li>
                                <li>Build a career in an international company</li>
                                <li>Training and working with a hard-working, dedicated and motivated team</li>
                                <li>Our support enhancing your individual skills.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            <p><i className="fas fa-arrow-right rounded" style={{border: "1px solid black"}}></i> SEND US YOUR APPLICATION AND FIND YOUR DREAM JOB. </p>

        </div>
    )
}

export default JoinUs;