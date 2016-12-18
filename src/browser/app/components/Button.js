/* @flow */
import type { Exact, Styled } from '../themes/types';
import type { TextProps } from './Text';
import Text from './Text';
import styled from './styled';

type ButtonProps = TextProps & {
  disabled?: boolean,
  onClick?: (e: SyntheticMouseEvent) => void,
};

const Button: Styled<ButtonProps> = styled((theme, props) => ({
  $extends: Text,
  backgroundColor: props.backgroundColor
    ? theme.colors[props.backgroundColor]
    : theme.colors.primary,
  borderRadius: props.borderRadius || theme.border.radius,
  borderWidth: 0,
  color: theme.colors.white,
  cursor: 'pointer',
  display: props.display || 'inline-block',
  fontSize: theme.typography.fontSize(
    props.size === undefined ? -1 : props.size,
  ),
  fontWeight: props.bold === undefined
    ? 'bold'
    : props.bold ? theme.text.bold : 'normal',
  paddingLeft: '1.5em',
  paddingRight: '1.5em',
}), 'button', ['onClick']);

Button.defaultProps = ({
  antialiasing: true,
}: Exact<TextProps>);

export default Button;
