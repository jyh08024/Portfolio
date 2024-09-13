import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import CodeBlock from './components/CodeBlock/CodeBlock';

const App = () => {
  const headerNavigationData: string[] = [
    'WELCOME.md',
    'ABOUT ME',
    'SKILLS',
    'PROJECT',
    'ACTIVITY',
    'CONTACT',
  ];

  const [openTabList, setOpenTab] = useState<string[]>(['WELCOME.md']);
  const [nowTab, setNowTab] = useState<string>('WELCOME.md');

  return (
    <>
      <div className="wrap">
        <Header navigationData={headerNavigationData} />
        <CodeBlock openTabList={openTabList} nowTab={nowTab} />
      </div>
    </>
  );
};

export default App;
