import React from 'react';
import styled from '@emotion/styled';

const Container = styled.section``;

const ScrollSection1 = () => {
  return (
    <Container className='scroll-section' id='scroll-section-0'>
      <h1>AirMug Pro</h1>
      <div className='sticky-elem sticky-elem-canvas'>
        <canvas id='video-canvas-0' width='1920' height='1080'></canvas>
      </div>
      <div className='sticky-elem main-message a'>
        <p>
          온전히 빠져들게 하는
          <br />
          최고급 세라믹
        </p>
      </div>
      <div className='sticky-elem main-message b'>
        <p>
          주변 맛을 느끼게 해주는
          <br />
          주변 맛 허용 모드
        </p>
      </div>
      <div className='sticky-elem main-message c'>
        <p>
          온종일 편안한
          <br />
          맞춤형 손잡이
        </p>
      </div>
      <div className='sticky-elem main-message d'>
        <p>
          새롭게 입가를
          <br />
          찾아온 매혹
        </p>
      </div>
    </Container>
  );
};

export default ScrollSection1;
