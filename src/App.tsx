import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import CodeBlock from './components/CodeBlock/CodeBlock';

const copyrightName = '장영훈';

const headerNavigationData: string[] = [
  'ABOUT ME',
  'SKILLS',
  'PROJECT',
  'ACTIVITY',
  'CONTACT',
];
const titleAnimationData: string[] = [
  'React, TypeScript',
  'Dart, Flutter',
  'PHP, MySQL',
  'Node.js, Nest.js',
];

const normalTitle = '저는 프론트엔드 개발자 장영훈입니다.';

const titleAnimation = true;

const App = () => {
  const [openTabList, setOpenTab] = useState<string[]>(['WELCOME']);
  const [nowTab, setNowTab] = useState<string>('WELCOME');

  return (
    <>
      <div className="wrap">
        <Header
          navigationData={headerNavigationData}
          userName={copyrightName}
          setNowTab={setNowTab}
          setOpenTab={setOpenTab}
        />
        <CodeBlock
          openTabList={openTabList}
          nowTab={nowTab}
          titleAnimation={titleAnimation}
          titleAnimationData={titleAnimationData}
          normalTitle={normalTitle}
          setNowTab={setNowTab}
          setOpenTab={setOpenTab}
        />
      </div>
    </>
  );
};

export default App;
