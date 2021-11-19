//import React, {Fragment, useStatement} from 'react';
import { Footer } from './components/Footer';
import  {Header} from './components/Header.js';
import { Main } from './components/Main';
import {Admin} from  './views/Admin'

import styled from "styled-components";


const StyledApp = styled.div`
.admin{

        margin-left: auto;
        margin-right: auto;
}
`
 export function App(props) {
    return (
        
            <StyledApp>
            <Header/>
            <Admin className="admin"/>
            <Footer/>
            </StyledApp>
        
    )
}
