// @flow
import type { OpenColor } from './openColor';

// Theme.

// Because { [color: Color]?: boolean } doesn't work, we have to define props.
export type ColorProps = {
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  danger?: boolean,
  // Don't hesitate to add your own.
  black?: boolean,
  white?: boolean,
  gray?: boolean,
};

export type Color = $Keys<ColorProps>;

export type Theme = {|
  typography: {|
    fontSize: (number) => number,
    lineHeight: number,
    rhythm: (number) => number,
  |},
  colors: {
    [color: Color]: string,
    open: OpenColor,
  },
  border: {|
    radius: number,
  |},
  states: {
    active: {|
      darken: number,
    |},
    disabled: {|
      cursor: string,
      opacity: number,
    |},
  },
  container: {|
    maxWidths: {|
      small: number,
      medium: number,
      big: number,
      bigger: number,
    |},
  |},
  text: {|
    bold: 'normal' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
    fontFamily: string,
  |},
  block: {|
    marginBottom: number,
    maxWidth: number,
  |},
  heading: {|
    fontFamily: string,
    marginBottom: number,
  |},
  paragraph: {|
    marginBottom: number,
  |},
  // input: {| In case someone needs that.
  // |},
|};
