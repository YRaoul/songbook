import { useState } from "react";
import { Link } from "react-router-dom";
import Tool from "./Tool";

export default function NavBar (props) {
    return (
        <nav>
            <ul>
                <li>
                    <Tool url="/login" 
                    name="Login"/>
                </li>
                <li>
                    <Tool action={props.togglePanel} 
                    name="Browser"/>
                </li>
            </ul>
        </nav>
    )
};
