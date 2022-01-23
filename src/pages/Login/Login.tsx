import { useNavigate } from 'react-router-dom';
import * as styled from './Login.styles';

const Login = () => {
  const navigate = useNavigate();

  return (
    <styled.DivBase>
      <styled.DivLayout>
        <styled.DivLayoutHeader>
          <div style={{ marginRight: '32px' }}>
            {/* Logo */}
            <img src="./static/logo/quartoDigitalPreto.svg" alt="logo" width="200vh" />
          </div>
          <div>
            {/* Texto */}
            <h2 style={{ fontWeight: 400 }}>
              Tenha o <span>controle</span> da situação <br />
              para aumentar sua produtividade.
            </h2>
          </div>
        </styled.DivLayoutHeader>
        {/* Imagem ilustrativa */}
        <styled.DivLayoutImagem>
          <img src="./static/svgs/loginIllustration.svg" alt="loginIllustration" style={{ width: '50vh' }}></img>
        </styled.DivLayoutImagem>
      </styled.DivLayout>
      {/* Login */}
      <styled.DivConteudo>
        <h1>Seja bem vindo!</h1>
        <hr style={{ marginBottom: '50px' }} />
        {/* Email */}
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

        {/* Copyright */}
        <styled.Copyright>© Copyright 2022 Ranielli. Todos os direitos reservados.</styled.Copyright>
      </styled.DivConteudo>
    </styled.DivBase>
  );
};

export default Login;
