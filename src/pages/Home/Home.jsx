//import React from 'react'
import { useState } from 'react';
import ExpolreMenu from '../../components/Explore/ExploreMenu'

import Header from '../../components/Header/Header'
import './Home.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const[category,setCategory] = useState("All");
  return (
    <div>
        <Header/>
        <ExpolreMenu  category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home