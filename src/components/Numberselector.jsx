import React from 'react'
import { styled } from 'styled-components'
const Numberselector = ({setError, selectednumber, setSelectednumber, error}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
 
 const numberhandler=(item)=>{
    setSelectednumber(item);
    setError("")
  }
  return (
    <Numberselectorcontainer  >

      <div>
        <div className="error">
        {error}
        </div>
        <div className="number-selector">
          {arrNumber.map((item, i) => {
            return (
              <div key={i}
              className={`${item === selectednumber ? 'selected': ''}`}
                onClick={()=>numberhandler(item)}>{item}</div>
            )
            
          })}
        </div>
      </div>
      <div className="select">Select Number</div>

    </Numberselectorcontainer>


  )
}

export default Numberselector
const Numberselectorcontainer = styled.div`
       display: flex;
    justify-content: space-between;
    flex-direction: column;
    .error{
    text-align: right;
    font-family: Poppins;
font-size: 24px;
font-weight: 400;
line-height: 36px;
color:#FF0C0C;

}
.number-selector{
    width: 552px;
    display: flex;
    justify-content: space-between;
    line-height: 100px;
}
.number-selector div{
    width: 72px;
    height: 72px;
    text-align: center;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 23px;
    font-family: Poppins;
font-size: 24px;
font-weight: 700;
line-height: 36px;

}
.number-selector div.selected{
  background-color: black;
  color:white;
}
.number-selector div:hover{
    color: white;
    background-color: black;
    cursor: pointer;
}
.select{
text-align: right;
width: 100%;
font-family: Poppins;
font-size: 24px;
font-weight: 700;
line-height: 36px;

}
  
`
