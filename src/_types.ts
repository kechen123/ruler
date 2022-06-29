export type Target =
  | (() => Element)
  | Element
  | React.MutableRefObject<Element>
  | Window
  | Document;

export type Props<T extends Target = Target> = {
  target?: T;
  height?: number;
  width?: number;
  backgroundColor?: string;
  lineColor?: string;
  fontColor?: string;
  min?: number;
  max?: number;
  zoom?: number;
  horizontal?: boolean;
  onHover?: (ev: HTMLElementEventMap['mousemove']) => void;
};
