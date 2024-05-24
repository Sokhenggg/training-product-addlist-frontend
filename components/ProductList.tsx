"use client";
import React, { useState } from "react";
import { productState } from "@/atom/atom";
import { useRecoilValue, useRecoilState } from "recoil";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

export default function ProductList() {
   const productList = useRecoilValue(productState);
   const [products, setProducts] = useRecoilState(productState);
   const [isEditing, setIsEditing] = useState(false);

   const deleteProduct = (id: number) => {
      setProducts(products.filter((product) => product.id !== id));
   };

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      id: number,
      field: "name" | "brand" | "price"
   ) => {
      setProducts(
         products.map((product) => {
            if (product.id === id) {
               return {
                  ...product,
                  [field]:
                     field === "price"
                        ? Number(e.target.value)
                        : e.target.value,
               };
            }
            return product;
         })
      );
   };
   return (
      <div className="flex flex-wrap justify-content items-center space-x-2 mt-4 ">
         {productList.map((product) => (
            <div
               className="flex flex-row justify-content items-center
                space-x-4 space-y-4 margin-4"
               key={product.id}
            >
               {isEditing ? (
                  <Card className="w-[350px]">
                     <CardHeader>
                        <Input
                           value={product.name}
                           onChange={(e) => handleChange(e, product.id, "name")}
                        />
                        <Input
                           value={product.brand}
                           onChange={(e) =>
                              handleChange(e, product.id, "brand")
                           }
                        />
                        <Input
                           value={product.price}
                           onChange={(e) =>
                              handleChange(e, product.id, "price")
                           }
                        />
                     </CardHeader>
                     <CardFooter>
                        <Button
                           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                           onClick={() => {
                              setIsEditing(false);
                              // add api update function here
                           }}
                        >
                           Save
                        </Button>
                        <Button
                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                           onClick={() => setIsEditing(false)}
                        >
                           Cancel
                        </Button>
                     </CardFooter>
                  </Card>
               ) : (
                  <Card className="w-[350px]">
                     <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>{product.brand}</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <p>{product.price}</p>
                     </CardContent>
                     <CardFooter>
                        <Button
                           className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                           onClick={() => {
                              deleteProduct(product.id);
                           }}
                        >
                           Delete
                        </Button>
                        <Button
                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                           onClick={() => {
                              setIsEditing(true);
                           }}
                        >
                           Edit
                        </Button>
                     </CardFooter>
                  </Card>
               )}
            </div>
         ))}
      </div>
   );
}
