import React from 'react';
import styled from '@emotion/styled';
import ScrollSection1 from '../components/main/ScrollSection1';
import ScrollSection2 from '../components/main/ScrollSection2';
import ScrollSection3 from '../components/main/ScrollSection3';
import ScrollSection4 from '../components/main/ScrollSection4';

const MainContainer = styled.div``;

const Main = () => {
  return (
    <MainContainer>
      <ScrollSection1 />
      <ScrollSection2 />
      <ScrollSection3 />
      <ScrollSection4 />
    </MainContainer>
  );
};

export default Main;
