import Intro from './intro/intro';
import * as styled from './landingPage.styles';
import Sobre from './sobre/sobre';
import TitleBar from './titleBar/titleBar';

const LandingPage = () => {
  return (
    <styled.Geral>
      <TitleBar />
      <Intro />
      <Sobre />
      {/* <>adasldasd</> */}
    </styled.Geral>
  );
};

export default LandingPage;
