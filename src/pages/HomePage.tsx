import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import VideoSection from '../components/VideoSection';
import MethodFeatures from '../components/MethodFeatures';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import BlogList from '../components/BlogList';
import CallToAction from '../components/CallToAction';
import SubscriptionForm from '../components/SubscriptionForm';
import FAQ from '../components/FAQ';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <VideoSection />
      <MethodFeatures />
      <About />
      <Testimonials />
      <BlogList />
      <CallToAction />
      <SubscriptionForm />
      <FAQ />
    </>
  );
};

export default HomePage;