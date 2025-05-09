import React from "react";
import { firstContext } from "./FirstContext";
export function FirstProvider(props) {
  return <firstContext.Provider>{props.children}</firstContext.Provider>;
}
