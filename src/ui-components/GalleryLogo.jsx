/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function GalleryLogo(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "gallerylogo-honeydew 1": {}, GalleryLogo: {} },
      variantValues: { variation: "link" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const gallerylogohoneydewOneOnClick = useNavigateAction({
    type: "url",
    url: "https://runondemandgallery.com",
  });
  return (
    <View
      width="173px"
      height="48px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "GalleryLogo")}
    >
      <Image
        width="173px"
        height="48px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src="https://gallerypubliccontent-bucket.s3.amazonaws.com/gallerylogo-honeydew.png"
        onClick={() => {
          gallerylogohoneydewOneOnClick();
        }}
        {...getOverrideProps(overrides, "gallerylogo-honeydew 1")}
      ></Image>
    </View>
  );
}
