"use client"
import React from "react";
import Image from "next/image";

interface Params{
    params:{
      id:string
    }
  }

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


const page = async ({params}:Params) =>{
const {id} = await params;
const res = await fetch (`https://fakestoreapi.com/products/${id}`)
const data:IProducts = await res.json()
console.log(data)
return(
 <div className="flex flex-col gap-[24px] justify-center items-center pb-[12px]">
    <h1 className="text-blue-800 font-bold text-[32px] p-[12px]">Product Detail Page</h1>

    <Image className="pt-[50px]" src={data.image} alt={data.title}width={250}height={200}/>
                    <p className="font-bold text-[24px]">{data.category}</p>
                    <p className="text-[24px] font-medium ">{data.title}</p>
                    <p className="flex text-center text-[24px] p-[24px]">{data.description}</p>
                    <p className="font-bold text-[#5a5858] text-[24px]">price:${data.price}</p>
                    <p className="flex gap-[10px]"><h1 className="text-[24px] text-yellow-300 font-bold">{data.rating.rate}</h1><h2 className="text-[20px] text-[#DB4444] font-semibold">({data.rating.count} reviews)</h2></p>
                    <button className="w-[150px] h-[50px] bg-[#ec8b8b] rounded-full font-bold">BUY NOW</button>



 </div>
   
)
  
}

export default page
