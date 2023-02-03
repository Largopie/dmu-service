import React from 'react';
// CSS 관련
import './App.css';
import styled from 'styled-components';

// 페이지 관련
import Header from '../header';
import WeekLaunchMenu from '../weeklaunch';
// import MainAd from '../ad';
// import Main from '../main';
// import Test from '../test';

const StyledHeader = styled.div`
  box-shadow: 0 0 0 1px blue inset;
  height: 100px;
  width: 1280px;
`;

const AdDiv = styled.div`
  box-shadow: 0 0 0 1px black inset;
  width: 1280px;
  height: 160px;
`;

const Section = styled.div`
  width: 1280px;
  box-shadow: 0 0 0 1px pink inset;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Content1 = styled.div`
  width: 639px;
  padding: 40px 0px;
`;

const Content2 = styled.div`
  width: 639px;
  padding: 40px 0px;
`;

const Bar = styled.div`
  width: 2px;
  height: 1000px;
  margin: 20px 39px;
  background-color: red;
`;

const DayDiv = styled.div`
  box-shadow: 0 0 0 1px green inset;
  width: 600px;
  height: 84px;
  margin-bottom: 40px;
`;

const DayTimetable = styled.div`
  box-shadow: 0 0 0 1px green inset;
  width: 600px;
  height: 105px;
  margin-bottom: 40px;
`;

const WeekTimetable = styled.div`
  box-shadow: 0 0 0 1px green inset;
  width: 600px;
  height: 600px;
  margin-bottom: 40px;
`;

const SchoolCalendar = styled.div`
  box-shadow: 0 0 0 1px green inset;
  width: 600px;
  height: 101px;
  margin-bottom: 40px;
`;

const Notice = styled.div`
  box-shadow: 0 0 0 1px green inset;
  width: 600px;
  height: 460px;
  margin-bottom: 40px;
`;

const App = () => {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <AdDiv>
        <h3>광고 담을거임</h3>
        {/* <MainAd /> */}
      </AdDiv>
      <Section id="section">
        <Content1>
          <DayDiv />
          <DayTimetable />
          <WeekTimetable />
          {/* <Main /> */}
        </Content1>
        <Bar />
        <Content2>
          <SchoolCalendar />
          <WeekLaunchMenu />
          <Notice />
        </Content2>
      </Section>
      {/* <Test /> */}
    </>
  );
}

export default App;
