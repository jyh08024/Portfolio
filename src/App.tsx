import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import CodeBlock from './components/CodeBlock/CodeBlock';

const App = () => {
  const headerNavigationData: string[] = [
    'ABOUT ME',
    'SKILLS',
    'PROJECT',
    'ACTIVITY',
    'CONTACT',
  ];

  const [openTabList, setOpenTab] = useState<string[]>([]);
  const [nowTap, setNowTab] = useState<string>('');

  return (
    <>
      <div className="wrap">
        <Header navigationData={headerNavigationData} />
        <CodeBlock />
      </div>
    </>
  );
};

export default App;
