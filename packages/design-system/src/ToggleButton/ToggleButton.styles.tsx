import styled, { css } from "styled-components";
import { ToggleIconClassName } from "./ToggleButton.constants";
import { ToggleSizes } from "./ToggleButton.types";

const Variables = css`
  --toggle-padding: var(--ads-v2-spaces-2);
  --toggle-color-border: var(--ads-v2-color-border);
  --toggle-color-background: var(--ads-v2-color-bg);
  --toggle-color-icon: var(--ads-v2-color-fg);
  --toggle-height: var(--ads-v2-spaces-5);
  --toggle-width: var(--ads-v2-spaces-5);
`;

const Sizes = {
  sm: css`
    --toggle-padding: var(--ads-v2-spaces-1);
    --toggle-height: var(--ads-v2-spaces-5);
    --toggle-width: var(--ads-v2-spaces-5);
  `,
  md: css`
    --toggle-padding: var(--ads-v2-spaces-2);
    --toggle-height: var(--ads-v2-spaces-7);
    --toggle-width: var(--ads-v2-spaces-7);
  `,
};

export const StyledToggleButton = styled.button<{
  isDisabled?: boolean;
  isSelected?: boolean;
  size?: ToggleSizes;
}>`
  ${Variables};

  ${({ size }) => size && Sizes[size]};

  padding: var(--toggle-padding);
  border-radius: var(--ads-v2-border-radius);
  cursor: pointer;
  height: var(--toggle-height);
  width: var(--toggle-width);

  & > .${ToggleIconClassName} {
    height: 100%;
    width: 100%;
  }

  &:hover:enabled {
    --toggle-color-background: var(--ads-v2-color-bg-subtle);
    --toggle-color-border: var(--ads-v2-color-border-emphasis);
  }

  ${({ isSelected }) =>
    isSelected &&
    `--toggle-color-background: var(--ads-v2-color-bg-brand-secondary);
     --toggle-color-border: var(--ads-v2-color-border-brand-secondary);
     --toggle-color-icon: var(--ads-v2-color-fg-on-brand-secondary);

     &:hover:enabled {
       --toggle-color-background: var(--ads-v2-color-bg-brand-secondary-emphasis);
       --toggle-color-border: var(--ads-v2-color-border-brand-secondary-emphasis);
     }
  `}

  &:focus-visible {
    outline: var(--ads-v2-border-width-outline) solid
      var(--ads-v2-color-outline);
    outline-offset: var(--ads-v2-offset-outline);
  }
  &:disabled {
    opacity: var(--ads-v2-opacity-disabled);
    cursor: not-allowed;
  }

  border: 1px solid var(--toggle-color-border);
  background-color: var(--toggle-color-background);
  & .${ToggleIconClassName} {
    color: var(--toggle-color-icon);
  }
`;
