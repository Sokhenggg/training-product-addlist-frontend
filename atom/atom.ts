"use client";
import { ProductItem } from "@/types";
import { atom } from "recoil";
import { RecoilEnv } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const productState = atom<ProductItem[]>({
   key: "products",
   default: [],
});

export const productListFilterState = atom({
   key: "productListFilter",
   default: "Show All",
});
