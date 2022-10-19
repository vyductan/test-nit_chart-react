import * as Is from '@mui/icons-material';

import { ComponentProps } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

type SvgIconComponent = typeof SvgIcon;

type Props = ComponentProps<SvgIconComponent> & {
  name: string;
};
const Icon = ({ name, ...props }: Props) => {
  const IconToRender = (Is as any)[name] as SvgIconComponent;
  return <>{IconToRender ? <IconToRender {...props} /> : name}</>;
};

export default Icon;
