import React from "react";
import { TitelPage, WrapTable } from "./Title.styles";
export const Title = ({ children }) => {
  return <TitelPage> {children}</TitelPage>;
};
export const WarperTable = ({ children }) => {
  return <WrapTable> {children}</WrapTable>;
};
