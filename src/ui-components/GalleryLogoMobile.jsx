/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function GalleryLogoMobile(props) {
  const { overrides, ...rest } = props;
  const galleryLogoMobileOneOnClick = useNavigateAction({
    type: "url",
    url: "https://runondemandgallery.com",
  });
  return (
    <View
      width="175px"
      height="50px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "GalleryLogoMobile")}
    >
      <Image
        width="175px"
        height="50px"
        position="absolute"
        top="0px"
        left="2px"
        padding="0px 0px 0px 0px"
        src="https://gallerypubliccontent-bucket.s3.amazonaws.com/GalleryLogoMobile.png"
        onClick={() => {
          galleryLogoMobileOneOnClick();
        }}
        {...getOverrideProps(overrides, "GalleryLogoMobile 1")}
      ></Image>
    </View>
  );
}
