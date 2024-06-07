"use client"
import Image from "next/image";
import Hero from "./_components/Hero";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";


export default function Home() {

  const [businessLists,setBusinessList]=useState([]);
  useEffect(()=>{
    getAllBuisnessList()
  },[])
  const getAllBuisnessList=()=>{
    GlobalApi.getAllBuisnessList().then(resp=>{
      setBusinessList(resp.businessLists)
    })
  }
  return (
  <div>
   <Hero/>
   <BusinessList businessLists={businessLists}/>
    </div>
  );
}
