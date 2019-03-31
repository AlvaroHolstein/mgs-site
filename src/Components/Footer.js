import React from "react"

function Footer() {
    return (
        <footer style={{ backgroundColor: "#2e3141", color: "white", padding: "20px 0px"}} className="container-fluid">

            <div className="row">
                <div className="col-md-6 text-center">
                    <ul style={{ listStyleType: "none" }}>

                        <li className="morada"> <i className="fas fa-home"></i>Memórias Globais Software
                            <p>Avenida Brasil, N.º 282, Apt 301</p>
                            <p>4480-659 Vila do Conde</p>
                            <p>Portugal</p>
                        </li>
                        <br />
                        <li><p><i className="fas fa-phone"></i>(+351) 252 063 124</p></li>
                        <br />
                        <li><p><i className="fas fa-envelope"></i> admin@mgserp.com</p></li>
                    </ul>
                </div>
                <div className="footer-divider"></div>
                <div className="col-md-6 text-center">

                    <ul style={{ listStyleType: "none" }}>
                        <li className="morada"> <i className="fas fa-home"></i> Memórias Globais Software
                            <p>Ludwig - Blum - Str. 13</p>
                            <p>70327 Stuttgart</p>
                            <p>Deutschland</p>
                        </li>
                        <br />
                        <li><p><i className="fas fa-phone"></i> (+49) 7021 92804 60</p></li>
                        <br />
                        <li><p><i className="fas fa-envelope"></i> info@mgserp.com</p></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;