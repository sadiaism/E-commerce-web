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
    <div className="grid grid-cols-1 lg:gap-[50px] md:grid-cols-3 ml-[50px] mr-[50px] mt-[50px] sm:gap-[40px]">
      {Data.map((products) =>(
        <Link href={`/products/${products.id}`} key={products.id} className="flex flex-col gap-5 border bg-[#F5F5F5] rounded-3xl pl-[10px]">
          <Image className="pl-[50px] pt-[50px]" src={products.image} alt={products.title}width={250}height={200}/>
          
          
          
          
          </Link>
      ))}
      
    </div>
    </div>
  )
}

export default Page
