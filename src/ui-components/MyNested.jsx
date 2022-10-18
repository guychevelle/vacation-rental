/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function MyNested(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="106px"
      direction="column"
      position="relative"
      padding="48px 62px 48px 62px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MyNested")}
    >
      <Flex
        gap="10px"
        direction="column"
        width="fit-content"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(215,27,27,1)"
        {...getOverrideProps(overrides, "nestedframe")}
      ></Flex>
      <View
        width="219px"
        height="117px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
    </Flex>
  );
}
