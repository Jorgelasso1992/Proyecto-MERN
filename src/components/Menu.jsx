import React from 'react'
import styled from 'styled-components'
import {Avatar} from './Avatar'

const StyledMenu = styled.select`
    width: auto;
    height: 20px;
    position: absolute;
    right: 20vh;
    top: 20px;
    appearance: none;
    background: url(https://cdn-icons-png.flaticon.com/512/147/147144.png);
`
export function Menu() {
    return (
        <StyledMenu>
            
            <option value="">valor 1</option>
            <option value="">valor 2</option>
            <option value="">valor 3</option>
            
        </StyledMenu>
    )
}
