// global.d.ts
// declare module "*.svg" {
//   import { FC, SVGProps } from "react";
//   const ReactComponent: FC<SVGProps<SVGSVGElement>>;
//   export { ReactComponent };
// }

declare module "*.svg" {
  import React from "react";
  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}
