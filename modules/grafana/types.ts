import { IconType } from 'react-icons';
import { ReactNode } from 'react';

export type GrafanaData = {
  meta: {
    slug: string;
  };
  dashboard: {
    id: number;
    templating: Templating;
    panels: Panel[];
  };
};

export type Panel = {
  id: number;
  title: string;
  description?: string;
};

type Templating = {
  list: DashboardOption[];
};
type DashboardOption = {
  name: string;
  label: string;
  current: Option;
  options: Option[];
};
type Option = {
  selected: boolean;
  text: string;
  value: string;
};

export type DescriptionInfo = {
  title?: string;
  icon?: string;
  filters?: string[];
};

export type PanelOption = DashboardOption;
export type TPanel = {
  id: number;
  title: string;
  embedUrl: string;
  icon?: string;
  opts?: PanelOption[];
};
