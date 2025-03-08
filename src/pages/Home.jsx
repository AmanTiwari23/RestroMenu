import React from 'react'
import Layout from '../components/Layout'
import Banner from "../assets/images/banner2.jpg"
import "../index.css";

const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${Banner})`}} >
         <div className='headerContainer'>
          <h1>YumYum Food Website</h1>
          <p>We offers all varaity of Foods😋 </p>
          <button>Check our Menu</button>
         </div>
        </div>
    </Layout>
    
  )
}

export default Home