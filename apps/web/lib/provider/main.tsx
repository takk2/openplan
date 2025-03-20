"use client";

import { PropsWithChildren } from "react";
import EmotionProvider from "./emotion";
import TanstackQueryProvider from "./tanstackQuery";

const MainProvider = ({ children }: PropsWithChildren) => {
  return (
    <EmotionProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </EmotionProvider>
  );
};

export default MainProvider;
