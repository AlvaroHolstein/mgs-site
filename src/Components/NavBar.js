import React from "react"

function NavBar() {
    return (
        <nav id="navbar" className="navbar navbar-expand-large">
            <a className="navbar-brand" href="#navbar">Memórias Global Software</a>
            {/* <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget>
                <span className="collapse navbar-collapse"></span>
            </button> */}
            <ul className=" mt-2 mt-lg-0 list-inline">
                <li className="list-inline-item">
                    Home</li>
                <li className="list-inline-item">
                    About</li>
                <li className="list-inline-item">Jobs</li>
                <li className="list-inline-item">Contacts</li>
            </ul>
        </nav>
    )
}

export default NavBar;