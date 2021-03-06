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
export default function GalleryLogo(props) {
  const { overrides, ...rest } = props;
  const galleryLogoOneOnClick = useNavigateAction({
    type: "url",
    url: "https://runondemandgallery.com",
  });
  return (
    <View
      width="350px"
      height="100px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "GalleryLogo")}
    >
      <Image
        width="350px"
        height="100px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src="https://gallerypubliccontent-bucket.s3.amazonaws.com/GalleryLogo.png"
        onClick={() => {
          galleryLogoOneOnClick();
        }}
        {...getOverrideProps(overrides, "GalleryLogo 1")}
      ></Image>
    </View>
  );
}
