/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { User } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import UsersAdminInfo from "./UsersAdminInfo";
import { Collection } from "@aws-amplify/ui-react";
export default function UsersAdminInfoCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.username(SortDirection.ASCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: User,
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
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={4}
      direction="column"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "UsersAdminInfoCollection")}
      {...rest}
    >
      {(item, index) => (
        <UsersAdminInfo
          user={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></UsersAdminInfo>
      )}
    </Collection>
  );
}
