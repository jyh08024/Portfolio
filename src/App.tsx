import React from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import About from './components/About/About';

const App = () => {
  const headerNavigationData: string[] = [
    'ABOUT ME',
    'SKILLS',
    'PROJECT',
    'ACTIVITY',
    'CONTACT',
  ];

  return (
    <>
      <div className="wrap">
        <Header navigationData={headerNavigationData} />
		<About />
      </div>
    </>
  );
};

export default App;
