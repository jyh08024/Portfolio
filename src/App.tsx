import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header/Header';

const App = () => {
  const headerNavigationData: string[] = [
    'ABOUT ME',
    'SKILLS',
    'POJECT',
    'ACTIVITY',
    'CONTACT',
  ];

  return (
    <>
      <div className="wrap">
        <Header navigationData={headerNavigationData} />
      </div>
    </>
  );
};

export default App;
