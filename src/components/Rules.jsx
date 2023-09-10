import React from 'react'
import styled from 'styled-components'

const Rules = ({showrule}) => {
    return (
        <Rulescontainer>
            <div  className={`${showrule?"show":"hide"}`}>
            <h3>How to play dice game</h3>
            <ul>
                <li>Select any number</li>
                <li>Click on dice image</li>
                <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
                <li>if you get wrong guess then  2 point will be dedcuted </li>
            </ul>
            </div>
        </Rulescontainer>

    )
}
export default Rules
const Rulescontainer = styled.div`
width: 794px;
height: 208px;
padding: 20px;
margin: 0 auto;
margin-top: 20px;
/* background: #FBF1F1; */

div.hide{
    visibility: hidden;
    
}
div.show{
visibility: visible;
background: #FBF1F1;

}
h3{
    font-family: Poppins;
font-size: 24px;
font-weight: 700;
line-height: 36px;
line-height: 50px;
}

ul li{
    list-style: none;
    line-height: 25px;
    font-family: Poppins;
font-size: 16px;
font-weight: 500;
line-height: 24px;

}


`
