import React from 'react';
import styled from 'styled-components';
import Totalscore from './Totalscore';
import Numberselector from './Numberselector';
import Dice from './Dice';
import Rules from './Rules';
import { useState } from 'react';
const Gameplay = () => {
const[score, setScore] = useState(0)
const [selectednumber, setSelectednumber] = useState();
const [dicenum, setDicenum] = useState(1);
const[error, setError] = useState("");
const[showrule, setShowrule] = useState(false);
const[resetscore, setResetscore] = useState()
const getRandomNum = () => {
  return Math.floor(Math.random() * 6) + 1;
}
const roleDice = ()=>{
  if(!selectednumber) {
    setError("You have not selected any number")
    return;
  }
let a = getRandomNum();
setDicenum(a);

if(a===selectednumber)
{
  setScore((prv)=> prv+selectednumber)
  console.log(dicenum)
  console.log(a)
}
else{
  setScore((prv)=>prv-2)
}
setSelectednumber(undefined)
}
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <Maincontainer>
      <div className='top-section'>
        <Totalscore score={score}/>
        <Numberselector setError={setError}  selectednumber={selectednumber} 
        setSelectednumber={setSelectednumber} error={error} />
       
      </div>
      <Dice showrule={showrule} setShowrule={setShowrule} dicenum={dicenum}
      setScore={setScore}
      roleDice={roleDice} setResetscore={setResetscore} resetscore={resetscore}
      />
       <Rules showrule={showrule}/>
    </Maincontainer>
  );
};

export default Gameplay;

const Maincontainer = styled.div`
  .top-section{
       max-width: 1280px;
    height: 151px;
    display: flex;
    justify-content: space-between;
    margin: 20px 40px 0px 40px;
  }
`;


