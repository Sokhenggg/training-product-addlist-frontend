"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { productState } from "../atom/atom";

export default function ProductAdd() {
   const [productName, setProductName] = useState("");
   const [productPrice, setProductPrice] = useState("");
   const [products, setProducts] = useRecoilState(productState);
   const [productBrand, setProductBrand] = useState("");

   const addProduct = () => {
      setProducts([
         ...products,
         {
            id: products.length + 1,
            name: productName,
            brand: productBrand,
            price: Number(productPrice),
            available: false,
         },
      ]);
      setProductName("");
      setProductBrand("");
      setProductPrice("");
   };
   console.log("products", products);

   return (
      <div>
         <Input
            placeholder="Add Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
         />
         <Input
            placeholder="Add Product Brand"
            value={productBrand}
            onChange={(e) => setProductBrand(e.target.value)}
         />
         <Input
            placeholder="Add Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
         />
         <Button
            className="bg-red-500 text-white w-haft mt-4"
            onClick={addProduct}
         >
            +
         </Button>
      </div>
   );
}
