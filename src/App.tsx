import React, { useCallback, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header/Header';
import CodeBlock from './components/CodeBlock/CodeBlock';
import { copyrightName, enabledTabs, findTabByPath, getTabPath, navigationTabs } from './config/tabs';

const App = () => {
  // 현재 탭은 주소(/career 등)로 결정됨. 루트(/)는 WELCOME 탭
  const { tab: tabPath = '' } = useParams();
  const navigate = useNavigate();
  const currentTab = findTabByPath(tabPath);

  const [openTabList, setOpenTab] = useState<string[]>(enabledTabs.map((tab) => tab.name));

  const handleSetNowTab = useCallback((newTab: string) => navigate(getTabPath(newTab)), [navigate]);

  // 없는 탭이나 비활성화된 탭 주소로 들어오면 루트로 이동
  if (!currentTab) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div className="wrap">
        <Header
          navigationData={navigationTabs}
          userName={copyrightName}
          setNowTab={handleSetNowTab}
          setOpenTab={setOpenTab}
        />
        <CodeBlock
          openTabList={openTabList}
          nowTab={currentTab.name}
          setNowTab={handleSetNowTab}
          setOpenTab={setOpenTab}
        />
      </div>
    </>
  );
};

export default App;
