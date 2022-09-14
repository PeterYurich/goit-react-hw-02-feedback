import React from "react";
import { Tittle } from "../feed-back-styles.styled";

export const Section = ({title, children}) => (
    <div>
        <Tittle>{title}</Tittle>
        {children}
    </div>
)