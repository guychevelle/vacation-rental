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
export default function GalleryNavMobile(props) {
  const { overrides, ...rest } = props;
  const galleryLogoSmallOnClick = useNavigateAction({
    type: "url",
    url: "https://runondemandgallery.com",
  });
  return (
    <View
      width="400px"
      height="45px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(240,255,240,1)"
      {...rest}
      {...getOverrideProps(overrides, "GalleryNavMobile")}
    >
      <Image
        width="126px"
        height="45px"
        position="absolute"
        top="0px"
        left="10px"
        padding="0px 0px 0px 0px"
        src="https://gallerypubliccontent-bucket.s3.amazonaws.com/GalleryLogoSmall.png"
        onClick={() => {
          galleryLogoSmallOnClick();
        }}
        {...getOverrideProps(overrides, "GalleryLogoSmall")}
      ></Image>
      <Image
        width="42px"
        height="37px"
        position="absolute"
        top="4px"
        left="308px"
        padding="0px 0px 0px 0px"
        src="https://gallerypubliccontent-bucket.s3.amazonaws.com/MenuHamburger.png"
        {...getOverrideProps(overrides, "MenuHamburger")}
      ></Image>
    </View>
  );
}