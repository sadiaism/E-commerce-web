"use client"
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

interface IProducts {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{
      rate:number;
      count:number;
    }
}

const Page = () => {

  const [Data,setData] = useState<IProducts[]>([]);

  useEffect(()=>{
    const fetchData= async ()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    const parsedResponse:IProducts[] = await response.json();
    console.log("products >>>" , parsedResponse)
    setData(parsedResponse);
    };
    fetchData();

  },[])
  return (
    <div><h1 className="flex justify-center items-center text-[32px] font-semibold">Products Fetching</h1>
    <div className="grid grid-cols-1 md:gap-[50px] md:grid-cols-3 ml-[50px] mr-[50px] mt-[50px] sm:gap-[40px]">
      {Data.map((products,index) =>(
        <div key={index} className="flex flex-col gap-5 border bg-[#F5F5F5] rounded-3xl pl-[10px]">
          <Image className="pl-[50px] pt-[50px]" src={products.image} alt={products.title}width={250}height={200}/>
          
          <p className="text-[24px] font-medium">title:{products.title}</p>
          <p className="font-light text-[24px]">{products.category}</p>
          <p>{products.description}</p>
          <p className="font-bold text-[#5a5858] text-[24px]">price:${products.price}</p>
          <p className="flex gap-[10px]"><h1 className="text-[24px] text-yellow-300 font-bold">{products.rating.rate}</h1><h2 className="text-[20px] text-[#DB4444] font-semibold">({products.rating.count} reviews)</h2></p>
          <button className="w-[150px] h-[50px] bg-[#ec8b8b] rounded-full font-bold">BUY NOW</button>
          
          </div>
      ))}
      
    </div></div>
  )
}

export default Page
