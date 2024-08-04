import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Side from '../components/Side'
import TopPicks from '../components/TopPicks'
import NewArrivals from '../components/NewArrivals'
import OurBlogs from '../components/OurBlogs'
import OurInstagram from '../components/OurInstagram'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Side/>
      <TopPicks/>
      <NewArrivals/>
      <OurBlogs/>
      <OurInstagram/>
      <Footer/>
    </>
  )
}

export default Home