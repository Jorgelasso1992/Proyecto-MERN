import React from 'react'
import styled from 'styled-components'
import {Table} from './Table'
const StyledAdmin = styled.div`
    .title{
        text-align: center;
        color: #916BBF;
    }
    margin: auto;

`
export function Admin() {
    return (
        <StyledAdmin>
            <h1 className="title">Actividades por docentes</h1>
            <Table/>
        </StyledAdmin>
    )
}
