import React from 'react'
import Layout from '../components/Layout'
import "../index.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
        <div className='home' >
         <div className='headerContainer '>
          <h1>YumYum Food Website</h1>
          <p>We offers all varaity of Foods😋 </p>
          <Link to={"/menu"}><button>Check our Menu</button></Link>
         </div>
        </div>
    </Layout>
    
  )
}

export default Home