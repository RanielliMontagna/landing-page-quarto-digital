import { TitleBar } from 'components';
import Intro from './intro/intro';
import * as styled from './landingPage.styles';
import Sobre from './sobre/sobre';

const LandingPage = () => {
  return (
    <styled.Geral>
      <TitleBar rota="home" />
      <Intro />
      <Sobre />
    </styled.Geral>
  );
};

export default LandingPage;
