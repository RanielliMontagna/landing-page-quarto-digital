import { Divider } from 'components';
import { useNavigate } from 'react-router-dom';
import * as styled from './Login.styles';

const Login = () => {
  const navigate = useNavigate();
  const logo = '/static/logo/quartoDigitalPrimaria.svg';

  return (
    <div style={{ display: 'flex', overflow: 'hidden' }}>
      <styled.DivLogin>
        {/* Logo */}
        <img src={logo} alt={logo} style={{ width: '250px' }} />
        {/* Login */}
        <styled.DivField>
          <styled.Label>E-mail</styled.Label>
          <styled.Input type="email" placeholder="Seu e-mail" />
        </styled.DivField>
        {/* Senha */}
        <styled.DivField>
          <styled.Label>Senha</styled.Label>
          <styled.Input type="password" placeholder="Sua senha" />
        </styled.DivField>
        {/* Manter conectado e esqueci minha senha */}
        <styled.DivCheckbox>
          <styled.StayConnect>
            <input type="checkbox" /> <p style={{ marginLeft: '8px' }}>Manter conectado</p>
          </styled.StayConnect>
          <styled.ForgotPassword>Esqueci minha senha</styled.ForgotPassword>
        </styled.DivCheckbox>
        {/* Botao Login */}
        <styled.ButtonEnter type="submit" onClick={() => navigate('/dashboard')}>
          Entrar
        </styled.ButtonEnter>
        {/* Botao voltar home */}
        <styled.VoltarHome onClick={() => navigate('/')}>Voltar para home</styled.VoltarHome>
      </styled.DivLogin>

      <styled.DivLayout>
        <styled.DivIlustracao>
          {/* Logo */}
          <img src="./static/svgs/loginIllustration.svg" alt="loginIllustration"></img>
        </styled.DivIlustracao>
        <h1>Seja bem vindo!</h1>
        <Divider styles={{ width: '100px', margin: '0px 0px 16px 0px' }}></Divider>
        <h2>
          Simplifique suas tarefas e tenha mais tempo para se <br />
          dedicar ao bem estar dos seus hóspedes.
        </h2>
      </styled.DivLayout>
    </div>
  );
};

export default Login;
