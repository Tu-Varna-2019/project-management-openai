import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { HomeV2,NotetitlebuttonCollection } from "../ui-components";
import { HomeOverrideFunc } from '../overrides/HomeOverride';


export default function HomePage(props) {

const {
  HomeOverride,
  HomeNoteCollectionOverride,
  customOverrideItems
} = HomeOverrideFunc();

    return (  
        <>
        <div className='homepages' 
          style={{position: 'relative',display: 'inline-block',overflow: "hidden"}}>
        <HomeV2 overrides={HomeOverride}/>
    </div><div style={{ position: 'relative' , display: 'block',top: "-10px",left: "100px",objectFit: "cover"}}>
    <NotetitlebuttonCollection
    style={{position: 'absolute', bottom: 160, right: 180 }}
    overrides={HomeNoteCollectionOverride}
overrideItems={customOverrideItems}/></div></>);}