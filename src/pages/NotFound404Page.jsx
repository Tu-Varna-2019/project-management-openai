import React, { useContext } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { NotFound404Func } from '../overrides/NotFound404Override';
import { Notfound, SearchBoxRect, SearchResultMatchCollection, Toolbar } from '../ui-components';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';
import { ToolbarSelectContext } from '../contexts/ToolbarSelectContext';


export default function NotFound404Page(props) {
  
    const {
        NotFound404Override
    } = NotFound404Func();
    const {
        showSearchRect
      } = useContext(ToolbarSelectContext);
      const {
        ToolbarOverride,
        SearchTicketOverride,
        OverrideSearchTicketItems,
      } = ToolbarFunc();
  
    return (  
        <>
        <div className='amplify-container'
            style={{ position:'relative', display: 'inline-block',overflow: "hidden",top: "-50px",left: "0px"}}>
        <Notfound overrides={NotFound404Override}/>
        <div style={{ position: 'absolute',display: 'block', bottom: 820, right: 1095, width:825 }}>
        <Toolbar overrides={ToolbarOverride}/>
        </div>

        {!showSearchRect && (
        <div style={{position: 'absolute', bottom: "825px" , left:"1100px" }}>
          <SearchBoxRect/>
        </div>
        )}
        <div
          style={{ position: 'absolute' , width:"120px", display: 'block',bottom: "990px",left: "1350px",objectFit: "cover"}}>
          <SearchResultMatchCollection style={{position: 'absolute',bottom:"-150px", left:"-235px" }}
              overrides={SearchTicketOverride}
              overrideItems={OverrideSearchTicketItems}/>
        </div>

        </div>
        </>)}