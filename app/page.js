"use client";
import {useState, useEffect} from 'react';
 import Hero from "../components/HeroComponents/Hero";


export default function Home() {

  const [projectClicked, setProjectClicked] = useState({});
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  useEffect(() => {}, [isProjectOpen, projectClicked])
  return (
    
    <main className="">
     <Hero /> 
    
    </main>
    
  );
}
