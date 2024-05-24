"use client";
import React from "react";
import { RecoilRoot, atom } from "recoil";

export const ProductListState = atom({
   key: "ProductList",
   default: [],
});

export default function RecoidContextProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   return <RecoilRoot>{children}</RecoilRoot>;
}
