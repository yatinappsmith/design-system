import React from "react";
import { Sizes } from "../__config__/types";

export type ToggleSizes = Extract<Sizes, "sm" | "md">;

// Toggle props
export type ToggleButtonProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** the icon to be rendered */
  icon: string;
  /** the size of the toggle button */
  size: ToggleSizes;
  /** Whether the toggle button is disabled or not. */
  isDisabled?: boolean;
  /** Whether the toggle button is selected or not. */
  isSelected?: boolean;
  /** Whether the element should be selected (uncontrolled). */
  defaultSelected?: boolean;
  /** Handler that is called when the element's selection state changes. */
  onClick?: (isSelected: boolean) => void;
  /** tabIndex for the button */
  tabIndex?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
