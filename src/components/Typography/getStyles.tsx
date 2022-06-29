import { css } from 'styled-components';
import type { TypographySize } from './Typography';

const Mini = css`
  font-size: 13px;
  line-height: 20px;
`;

const Standard = css`
  font-size: 16px;
  line-height: 24px;
`;

const Medium = css`
  font-size: 21px;
  line-height: 28px;
`;

const Big = css`
  font-size: 36px;
  line-height: 44px;
`;

export const getTextStyles = (type?: TypographySize) => {
  switch (type) {
    case 'mini':
      return Mini;
    case 'medium':
      return Medium;
    case 'big':
      return Big;
    case 'standard':
    default:
      return Standard;
  }
};