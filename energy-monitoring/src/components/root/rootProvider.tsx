"use client";

import React from "react";
import StyledComponentsRegistry from "@/lib/registry";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
};

export default RootProvider;
