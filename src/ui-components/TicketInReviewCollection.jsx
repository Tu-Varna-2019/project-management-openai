/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Ticket } from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Ticketshort from "./Ticketshort";
import { Collection } from "@aws-amplify/ui-react";
export default function TicketInReviewCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = {
    field: "TicketStatus",
    operator: "eq",
    operand: "InReview",
  };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Ticket,
    criteria: itemsFilter,
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
      itemsPerPage={5}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "TicketInReviewCollection")}
      {...rest}
    >
      {(item, index) => (
        <Ticketshort
          margin="5px 0 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Ticketshort>
      )}
    </Collection>
  );
}
