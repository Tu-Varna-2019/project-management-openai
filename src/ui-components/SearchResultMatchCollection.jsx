/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Ticket } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import SearchResultMatch from "./SearchResultMatch";
import { Collection } from "@aws-amplify/ui-react";
export default function SearchResultMatchCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) =>
      s.Title(SortDirection.ASCENDING).TicketID(SortDirection.ASCENDING),
  };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Ticket,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={3}
      direction="column"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "SearchResultMatchCollection")}
      {...rest}
    >
      {(item, index) => (
        <SearchResultMatch
          ticket={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SearchResultMatch>
      )}
    </Collection>
  );
}
