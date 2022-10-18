/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function GalleryProfileCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="350px"
      height="400px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "GalleryProfileCard")}
    >
      <Text
        fontFamily="Gothic A1"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        textDecoration="underline"
        position="absolute"
        top="62px"
        left="180px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="upload image"
        {...getOverrideProps(overrides, "uploadlink")}
      ></Text>
      <Text
        fontFamily="Gothic A1"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="142px"
        left="39px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="User:"
        {...getOverrideProps(overrides, "userlabel")}
      ></Text>
      <Text
        fontFamily="Gothic A1"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="142px"
        left="101px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="username"
        {...getOverrideProps(overrides, "username")}
      ></Text>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="344px"
        left="110px"
        width="131px"
        height="39px"
        justifyContent="center"
        alignItems="center"
        size="small"
        isDisabled={false}
        variation="primary"
        children="Save"
        {...getOverrideProps(overrides, "SaveButton")}
      ></Button>
      <Image
        width="123.16px"
        height="120px"
        position="absolute"
        top="12px"
        left="39px"
        borderRadius="218px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ProfilePic")}
      ></Image>
      <Flex
        gap="10px"
        position="absolute"
        top="169px"
        left="30px"
        justifyContent="center"
        alignItems="flex-start"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Form")}
      >
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="266px"
          height="68px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Email"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextFieldEmail")}
        ></TextField>
      </Flex>
    </View>
  );
}
