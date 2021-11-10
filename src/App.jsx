import React, {Fragment, useStatement} from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

 export function App(props) {
    return (
        <div>
            <Header user={props.user}/>
            <Main/>
            <Footer/>
        </div>
    )
}
