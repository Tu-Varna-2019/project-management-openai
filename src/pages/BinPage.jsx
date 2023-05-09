import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Bin ,NotetitlebuttonCollection } from "../ui-components";
import { BinFunc } from '../overrides/BinOverride';

export default function BinPage(props) {

  const {
    BinOverride,
    customOverrideItems,
    BinNoteCollectionOverride
  } = BinFunc();

    return (  
        <>
        <div  
          style={{position: 'relative',display: 'inline-block',overflow: "hidden"}}>
         <Bin overrides={BinOverride}/>
    </div><div style={{ position: 'relative' , display: 'block',top: "-10px",left: "100px",objectFit: "cover"}}>
    <NotetitlebuttonCollection
    style={{position: 'absolute', bottom: 160, right: 180 }}
    overrides={BinNoteCollectionOverride}
overrideItems={customOverrideItems}/></div></>);}