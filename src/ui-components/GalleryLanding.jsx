/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavBar from "./NavBar";
import { Text, View } from "@aws-amplify/ui-react";
export default function GalleryLanding(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="414px"
      height="896px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "GalleryLanding")}
    >
      <NavBar
        display="flex"
        gap="20px"
        position="absolute"
        top="14px"
        left="15px"
        direction="row"
        width="406px"
        height="63px"
        justifyContent="center"
        alignItems="center"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
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
        top="168px"
        left="73px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="sample link"
        {...getOverrideProps(overrides, "sample link")}
      ></Text>
    </View>
  );
}
