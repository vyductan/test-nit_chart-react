import * as React from 'react';

import { SVGProps, memo } from 'react';

const ShapeRightTitle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 108 108'
    fill='currentColor'
    {...props}
  >
    <path d='M0 54v54.1l3.8-.7c7.1-1.2 16.7-6.4 21.9-11.7 3.2-3.3 14.9-21 31.8-48.2C72.2 23.8 85 3.5 85.8 2.2L87.2 0H0v54z' />
  </svg>
);

export default memo(ShapeRightTitle);
