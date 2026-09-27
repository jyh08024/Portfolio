import React, { useCallback, useState } from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import CodeBlock from './components/CodeBlock/CodeBlock';
import { copyrightName, defaultTab, enabledTabs, navigationTabs } from './config/tabs';

const App = () => {
  const [openTabList, setOpenTab] = useState<string[]>(enabledTabs.map((tab) => tab.name));
  const [nowTab, setNowTab] = useState<string>(defaultTab);

  const handleSetNowTab = useCallback((newTab: string) => setNowTab(newTab), []);

  return (
    <>
      <div className="wrap">
        <Header
          navigationData={navigationTabs}
          userName={copyrightName}
          setNowTab={setNowTab}
          setOpenTab={setOpenTab}
        />
        <CodeBlock
          openTabList={openTabList}
          nowTab={nowTab}
          setNowTab={handleSetNowTab}
          setOpenTab={setOpenTab}
        />
      </div>
    </>
  );
};

export default App;
