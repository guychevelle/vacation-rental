/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function MyCard(props) {
  const { rentals, overrides, ...rest } = props;
  return (
    <View
      width="420px"
      height="470px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MyCard")}
    >
      <View
        width="420px"
        height="43px"
        position="absolute"
        top="427px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="107px"
        height="15px"
        position="absolute"
        top="448px"
        left="7px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"$"}${rentals?.price}${"/night"}`}
        {...getOverrideProps(overrides, "Cost")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="107px"
        height="15px"
        position="absolute"
        top="433px"
        left="7px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={rentals?.location}
        {...getOverrideProps(overrides, "Caption")}
      ></Text>
      <Image
        width="420px"
        height="427px"
        position="absolute"
        top="0px"
        left="0px"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        src={rentals?.image}
        {...getOverrideProps(overrides, "SkyMasterson 1")}
      ></Image>
    </View>
  );
}
