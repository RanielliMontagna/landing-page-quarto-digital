import { TitleBar } from 'components';
import Intro from './intro/intro';
import * as styled from './landingPage.styles';
import Sobre from './sobre/sobre';
import Segmentos from './segmentos/segmentos';
import Footer from './footer/footer';
import Propaganda from './propaganda/propaganda';

const LandingPage = () => {
  return (
    <styled.Geral>
      <TitleBar rota="home" />
      <Intro />
      <Propaganda />
      <Sobre />
      <Segmentos />
      <Footer />
    </styled.Geral>
  );
};

export default LandingPage;
