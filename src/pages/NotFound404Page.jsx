import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { NotFound404Func } from '../overrides/NotFound404Override';
import { Notfound, Toolbar } from '../ui-components';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';


export default function NotFound404Page(props) {
  
    const {
        NotFound404Override
    } = NotFound404Func();
    const {
        ToolbarOverride
      } = ToolbarFunc();
  
    return (  
        <>
        <div className='amplify-container'
            style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
        <Notfound overrides={NotFound404Override}/>
        <div style={{ position: 'absolute',display: 'block', bottom: 820, right: 1095, width:825  }}>
        <Toolbar overrides={ToolbarOverride}/>
        </div>
        </div>
        </>)}