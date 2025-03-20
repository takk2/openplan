"use client";

import { ReactNode } from "react";
import * as S from "./styles";

interface ButtonProps extends S.ButtonStylenProps {
  loading?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  return (
    <>
      <S.Button {...props}>
        {props.isLoading ? props.loading : props.children}
      </S.Button>
    </>
  );
};
