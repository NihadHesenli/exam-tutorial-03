import React from 'react'
import HomrBanner from './Home-section-1/HomrBanner'
import HomeProducts from './Home-section-2/HomeProducts'
import HomeSellers from './Home-section-3/HomeSellers'
import HomeBlog from './Home-section-4/HomeBlog'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <HomrBanner/>
    <HomeProducts/>
    <HomeSellers/>
    <HomeBlog/>
    </>
  )
}

export default Home