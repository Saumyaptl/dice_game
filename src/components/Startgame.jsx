import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'
const Startgame = ({ onClick }) => {
    return (
        <Container>
            <figure>
                <img src='/images/dices.png' />
            </figure>
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={onClick}>Play Game</Button>
            </div>
        </Container>
    )
}
export default Startgame;
const Container = styled.div`
margin:0;
max-width: 1180px;
height: 100vh;
display: flex;
margin: 0 auto;
align-items: center;
.content{
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}

`