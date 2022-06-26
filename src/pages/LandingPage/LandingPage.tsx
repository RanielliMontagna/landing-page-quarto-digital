import { useEffect } from 'react';
import { Element, animateScroll } from 'react-scroll';

import { Footer, TitleBar } from 'components';
import Intro from './intro/intro';
import * as styled from './landingPage.styles';
import Sobre from './sobre/sobre';
import Segmentos from './segmentos/segmentos';

const LandingPage = () => {
  useEffect(() => {
    animateScroll.scrollTo(1);
    setTimeout(() => {
      animateScroll.scrollToTop();
    }, 0);
  }, []);

  return (
    <styled.Geral id="geral">
      <TitleBar rota="home" />

      <Element name="intro">
        <Intro />
      </Element>

      <Element name="sobre" style={{ marginBottom: '-40px', paddingBottom: '40px' }}>
        <Sobre />
        <Segmentos />
      </Element>

      <Footer />
    </styled.Geral>
  );
};

export default LandingPage;
