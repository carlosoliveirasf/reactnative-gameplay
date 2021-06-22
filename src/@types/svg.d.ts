import { Rect } from "react-native-svg";

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from 'react-native';
  const content: Rect.FC<SvgProps>;
  export default content;
}