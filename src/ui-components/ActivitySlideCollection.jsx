/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Activity } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ActivitySlide from "./ActivitySlide";
import { Collection } from "@aws-amplify/ui-react";
export default function ActivitySlideCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) => s.ModifiedDate(SortDirection.ASCENDING),
  };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Activity,
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
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "ActivitySlideCollection")}
      {...rest}
    >
      {(item, index) => (
        <ActivitySlide
          Ac={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ActivitySlide>
      )}
    </Collection>
  );
}
