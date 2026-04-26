import { theme } from "./Theme.styled";

type FontProps = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: string;
  Fmin?: number;
  Fmax?: number;
};
export const font = ({
  family,
  weight,
  color,
  lineHeight,
  Fmin,
  Fmax,
}: FontProps) => `
    font-family: ${family || theme.fonts.primery};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.darkGrey};
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw - 360px)/(1440 - 360)*(${Fmax} - ${Fmin}) + ${Fmin}px);
`;
