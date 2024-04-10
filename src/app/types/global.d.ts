declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  // @ts-ignore
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
