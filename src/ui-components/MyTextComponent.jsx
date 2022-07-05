/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function MyTextComponent(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="115px"
      height="15px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MyTextComponent")}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="0px"
        left="15px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Vacation Rental"
        {...getOverrideProps(overrides, "Vacation Rental")}
      ></Text>
    </View>
  );
}
