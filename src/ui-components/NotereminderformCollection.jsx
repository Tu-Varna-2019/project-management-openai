/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { NoteV2 } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Notereminderform from "./Notereminderform";
import { Collection } from "@aws-amplify/ui-react";
export default function NotereminderformCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: NoteV2,
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
      type="grid"
      searchPlaceholder="Search..."
      templateRows="1fr 1fr 1fr"
      autoFlow="column"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "NotereminderformCollection")}
      {...rest}
    >
      {(item, index) => (
        <Notereminderform
          height="auto"
          width="auto"
          margin="0 0px 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Notereminderform>
      )}
    </Collection>
  );
}
