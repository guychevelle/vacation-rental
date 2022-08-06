/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Rental } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import TallCard from "./TallCard";
import { Collection } from "@aws-amplify/ui-react";
export default function RentalCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Rental,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      itemsPerPage={6}
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "RentalCollection")}
    >
      {(item, index) => (
        <TallCard
          rental={item}
          height="auto"
          width="auto"
          margin="0 0px 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></TallCard>
      )}
    </Collection>
  );
}
