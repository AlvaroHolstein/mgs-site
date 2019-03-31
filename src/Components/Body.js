import React from "react";
import CompanyBranches from "./bodyComponents/CompanyBranches"
import JoinUs from "./bodyComponents/JoinUs"
import First from "./bodyComponents/First"

function Body() {
    /**
     * Pode se fazer as coisas normais de Js aqui,
     * dai ser uma função ...
     */

    return (
        <main id="homepagesection">
            <First />
            <CompanyBranches />
            <JoinUs />
        </main>
    )
}

export default Body;