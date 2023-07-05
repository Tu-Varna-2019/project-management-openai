import React from 'react';
import { SearchBoxRect, SearchResultMatchCollection } from '../ui-components';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';

const SearchBoxRectComponent = () => {
    const {
        SearchTicketOverride,
        OverrideSearchTicketItems,
      } = ToolbarFunc();

    return (
        <>
        <div style={{position: 'absolute', bottom: "970px" , left:"1100px" }}>
          <SearchBoxRect/>
        </div>
            <div
                style={{ position: 'absolute' , width:"120px", display: 'block',bottom: "1150px",left: "1340px",objectFit: "cover"}}>
                <SearchResultMatchCollection style={{position: 'absolute',bottom:"-150px", left:"-235px" }}
                    overrides={SearchTicketOverride}
                    overrideItems={OverrideSearchTicketItems}/>
              </div>
              </>
    );
}

export default SearchBoxRectComponent;
