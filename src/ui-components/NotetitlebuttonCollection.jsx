/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { NoteV2 } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Notetitlebutton from "./Notetitlebutton";
import { Collection } from "@aws-amplify/ui-react";
export default function NotetitlebuttonCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) =>
      s.Title(SortDirection.ASCENDING).createdAt(SortDirection.ASCENDING),
  };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: NoteV2,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          ONoteMTask: await item.ONoteMTask.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Search note..."
      itemsPerPage={8}
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="right"
      items={items || []}
      {...getOverrideProps(overrides, "NotetitlebuttonCollection")}
      {...rest}
    >
      {(item, index) => (
        <Notetitlebutton
          height="auto"
          width="auto"
          margin="10px 20px 10px 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Notetitlebutton>
      )}
    </Collection>
  );
}
