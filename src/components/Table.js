import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table (){
        return  (
            <div>
                <table>
                <TableHeader />
                <TableBody />        
            </table>
            </div>
        )
}

export default Table;