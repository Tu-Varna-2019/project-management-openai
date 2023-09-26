import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { NotFound404Func } from '../overrides/NotFound404Override';
import { Notfound } from '../ui-components';


export default function NotFound404Page(props) {
  
    const {
        NotFound404Override
    } = NotFound404Func();
  
    return (  
        <>
        <div className='amplify-container'
            style={{ position:'relative', display: 'inline-block',overflow: "hidden",top: "-50px",left: "0px"}}>
        <Notfound overrides={NotFound404Override}/>
        </div>
        </>)}