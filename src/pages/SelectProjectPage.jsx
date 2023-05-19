import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { SelectProject } from '../ui-components';
import { SelectProjectFunc } from '../overrides/SelectProjectOverride';


export default function SelectProjectPage(props) {
  
    const {
        SelectProjectOverride
    } = SelectProjectFunc();
  
    return (  
        <>
        <SelectProject overrides={SelectProjectOverride}/>
        </>
        )
    }