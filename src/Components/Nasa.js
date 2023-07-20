import React from "react";
import style from "styled-components"

const StyleCard = style.div`
border: 2px solid black;
padding: 2rem;
border-radius: 12px;

h3 {
   color: ${props => props.color};
    margin: 0 0 1rem 0; 
   font-size: 2.5em;  
}

p { 
    margin: 0 0 1.5rem 0;

&:: first-line {
font-size: 1.5rem;

}

}

`
const StyleImg = style.img`
border-radius: 12px;
max-width: 40%;
`

const StyleP = style.p`

color: ${props => props.color};
;border-radius: 12px;
max-width: 40%;
font-color: blue;
`

const NasaPhoto = (props) => {
    return (
        <StyleCard color="orange" className="nasa-photo-wrapper">
                <h3> {props.photo.title} </h3>
            <StyleP>{props.photo.date} </StyleP>  
            <StyleImg src={props.photo.hdurl} />
            <StyleP color="blue" className="explanation"> { props.photo.explanation}</StyleP>
</StyleCard>
            )


}
export default NasaPhoto;