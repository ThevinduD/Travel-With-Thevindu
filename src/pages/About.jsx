import React from 'react'
import Location from '../components/Location'

const About = () => {
  return (
    <div className='container pt-16 sm:pt-20'>
      <div className='py-10'>
        <h1 className='my-8 border-l-8 border-emerald-400/50 py-2 pl-2 text-2xl font-bold sm:text-3xl'>About us</h1>
        <p>Welcome to Travel with Thevindu, your trusted partner in creating unforgettable travel experiences! At Travel with Thevindu, we believe that every journey should be as unique and extraordinary as you are. Our mission is to make your dream vacations a reality, offering personalized travel solutions to destinations around the globe.</p>
        <br />
        <p>Founded by Thevindu, a passionate traveler and explorer, we bring together years of expertise and a deep love for discovering new cultures, landscapes, and adventures. Whether you're seeking a relaxing beach holiday, a cultural escape, or an adrenaline-packed adventure, we have the perfect travel packages and expert guidance to help you every step of the way.</p> 
        <br />
        <p>We understand that planning a trip can be overwhelming, which is why we're here to simplify the process. From flights, hotels, and transportation to local tours and activities, Travel with Thevindu offers a seamless, one-stop booking experience. Our team works tirelessly to ensure that your journey is smooth, affordable, and tailored to your personal preferences.</p><br />
        <h1 className='font-semibold'>What we offer :</h1> <br />
        <ul className='list-disc pl-10'>
          <li>Custom Travel Packages: Curated itineraries based on your interests, budget, and travel style.</li>
          <li>Handpicked Destinations: Carefully selected destinations that offer the perfect mix of culture, adventure, relaxation, and exploration.</li>
          <li>Expert Advice & Assistance: Our team of travel experts provides helpful insights and support throughout your entire journey.</li>
          <li>Exclusive Deals & Discounts: We offer competitive rates and exclusive deals that make your travel experience more affordable.</li>
        </ul><br />
        <p>Our goal is to help you explore the world with ease and confidence. Whether you’re planning a family vacation, a romantic getaway, or a solo adventure, Travel with Thevindu ensures your trip is unforgettable, stress-free, and tailored just for you.</p>
        <br />
        <p>Thank you for choosing us to be a part of your travel journey. Get ready to Travel with Thevindu—where the world is yours to explore!</p>
      </div>
      <Location/>
    </div>
  )
}

export default About
