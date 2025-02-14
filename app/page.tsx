"use client"
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div>
    <div className=" flex flex-col justify-center items-center gap-[12px] bg-[url('/images/hero-img.jpeg')] h-screen bg-no-repeat bg-cover text-[32px] text-[#FFFFFF]">
      <h1>Welcome to the E-Commerce Website</h1>
      <h2>Shop the best deals on Trendy Products!</h2></div>
      <div className="flex justify-center items-center font-bold text-[32px] text-slate-700 p-[24px]">Choose the Best Product As you Like!</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[44px] ml-[50px] mr-[50px] mt-[50px] pb-[24px]">
      {Data.map((products) =>(
        <div key={products.id} className="flex flex-col gap-5 border bg-[#F5F5F5] rounded-3xl pl-[10px]">
          <Image className="pl-[50px] pt-[50px]" src={products.image} alt={products.title}width={250}height={200}/>

          <Link href={`/products/${products.id}`}>
          <button className="w-[150px] h-[50px] bg-[#ec8b8b] rounded-full font-bold hover:bg-slate-400">BUY NOW</button></Link>
          
          </div>
          
          
          
      ))}
      
    </div>
    </div>
  )
}

export default Page
