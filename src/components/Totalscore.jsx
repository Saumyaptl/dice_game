import React from 'react'
import styled from 'styled-components'
const Totalscore = ({ score }) => {
  return (


    <TotalScore>
      <h1>{score}</h1>
      <span>Total Score</span>

    </TotalScore>
  )
}
export default Totalscore
const TotalScore = styled.div`
    width: 135px;
    height: 151px;
    text-align: center;
    h1{
      font-family: Poppins;
font-size: 100px;
font-weight: 500;
line-height: 100px;

    }
    span{
      font-family: Poppins;
font-size: 24px;
font-weight: 500;
line-height: 36px;
    }
`
