import React from 'react'
import Navbar from '../Componentt/Navbar'
import Banner from '../Componentt/Banner'
import JobSearch from '../Componentt/JobSearch'
import FeaturedJobs from '../Componentt/FeaturedJobs'
import RemoteJobs from '../Componentt/RemoteJobs'
import Features from '../Componentt/Features'
import MobileDownload from '../Componentt/MobileDownload'
import JobsDestination from '../Componentt/JobsDestination'
import Hired_jobs_Details from '../Componentt/Hired_jobs_Details'
import Footer from '../Componentt/Footer'

const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <JobSearch/>
      <FeaturedJobs/>
      <RemoteJobs/>
      <Features/>
      <MobileDownload/>
      <JobsDestination/>
      <Hired_jobs_Details/>
      <Footer/>
    </div>
  )
}

export default Main