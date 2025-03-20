"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

export interface ButtonStylenProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizes;
  isLoading?: boolean;
  full?: boolean;
}

export const Button = styled.button<ButtonStylenProps>`
  padding: 12px;
  border-radius: 12px;
  color: #fff;
  background-color: #111111;
  font-size: 16px;
  font-weight: 600;
  line-height: 148%;
  letter-spacing: -0.25px;
  cursor: pointer;

  ${(props) => sizes[props.size || "base"]};

  :disabled {
    background-color: #111111cc;
    cursor: not-allowed;
  }

  :active {
    background-color: #111111cc;
  }
`;

const sizes = {
  lg: css`
    width: 335px;
    height: 60px;
    padding: 12px;
    font-size: 24px;
  `,
  base: css`
    width: 100%;
    height: 48px;
    padding: 12px;
  `,
  sm: css`
    width: 154px;
    height: 48px;
    padding: 12px 63px;
  `,
};
