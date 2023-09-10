import React, { useState } from 'react'
import styled from 'styled-components'

const Dice = ({ resetscore, setResetscore, showrule, setShowrule, setScore, dicenum, roleDice }) => {
    return (
        <Dicecontainer>
            <img
                src={`images/Dice/dice_${dicenum}.png`}
                onClick={roleDice}
            />
            <div className="click">Click on Dice to roll</div>
            <div>
                <button className= "rst-btn" onClick={() => {
                          const approve=  confirm("Are you sure, you want to reset score")
                          if(approve){
                    setScore(0)
                    setResetscore(!resetscore)
                          }

                }} >
                    Reset Score
                </button>
            </div>
            <div>
                <button onClick={() => setShowrule((prv) => !prv)} className={`${(showrule) ? "clicked" : ""} show-btn`}>
                    {`${showrule ? "Hide Rules" : "Show Rules"}`}
                </button>
            </div>
        </Dicecontainer>
    )
}

export default Dice;
const Dicecontainer = styled.div`
margin: 0 auto;
margin-top: 40px;
width: 255px;
flex-direction: column;
display: flex;
gap:20px;
align-items: center;
 img{
    width: 200px;
    height: 200px;
    cursor: pointer;
}
.click{
    font-family: Poppins;
font-size: 24px;
font-weight: 500;
line-height: 36px;
  }
button{
    width:  220px;
height:  44px;
padding: 10px 18px 10px 18px;
border-radius: 5px;
border: 1px solid #000000;
background: white;
cursor: pointer;
font-family: Poppins;
font-size: 16px;
font-weight: 600;
line-height: 24px;
}
.clicked{
    background-color: #000000;
    color:white;
    
}

`
