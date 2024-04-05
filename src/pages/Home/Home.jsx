import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodList from '../../components/FoodList/FoodList'
import DownloadApp from '../../components/DownloadApp/DownloadApp'
const Home = () => {

  const [category,setCategory] = useState('all')
  return (
    <div className="home">
        <Header />
        <ExploreMenu category={category} changeCategory={setCategory} />
        <FoodList category = {category} />
        <DownloadApp />
    </div>
  )
}

export default Home