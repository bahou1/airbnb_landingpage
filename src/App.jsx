import React from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import SlideMenu from './components/SlideMenu';
import HouseListing from './components/HouseListing';
import Footer from '../src/components/Footer'
const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Searchbar />
      <SlideMenu />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <HouseListing />
        <HouseListing />
        <HouseListing />
        <HouseListing />
        <HouseListing />
        <HouseListing />
        <HouseListing />
        <HouseListing />
        <HouseListing />
        <HouseListing />
        <HouseListing />
        <HouseListing />
        <HouseListing />
        <HouseListing />
        <HouseListing />

      </div>
      <Footer />
    </div>

  );
};

export default App;
