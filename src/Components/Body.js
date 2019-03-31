import React from "react";
import CompanyBranches from "./bodyComponents/CompanyBranches"
import JoinUs from "./bodyComponents/JoinUs"

function Body(){
    /**
     * Pode se fazer as coisas normais de Js aqui,
     * dai ser uma função ...
     */
    
    return (
        <main>
            <CompanyBranches />
            <JoinUs />
        </main>
    )
}

export default Body;