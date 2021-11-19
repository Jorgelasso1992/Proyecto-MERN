import React from 'react'
import styled from 'styled-components'
const StyledAvatar = styled.div`
    position: absolute;
    top: 5px;
    right: 10vh ;
    img{
        width: 60px;
        height: 60px;
    }
`
export function Avatar() {
    return (
        <StyledAvatar>
            <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="{props.user.name}" />
        </StyledAvatar>
    )
}
