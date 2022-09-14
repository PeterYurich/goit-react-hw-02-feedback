import React from "react";
import { Tittle } from "../feed-back-page.styled";

export const Section = ({title, children}) => (
    <div>
        <Tittle>{title}</Tittle>
        {children}
    </div>
)