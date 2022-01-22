import * as styled from './Login.styles';

const Login = () => {
  return (
    <styled.DivBase>
      <styled.DivLayout>
        <styled.DivLayoutConteudo>
          <styled.Logo>
            <img src="./static/logo/logoBranco_modelo3.png" alt="logo" width="500vh" />
          </styled.Logo>
          <h2 style={{ fontWeight: 400, marginTop: '20px' }}>
            Tenha o <span>controle</span> da situação <br />
            para aumentar sua produtividade.
          </h2>
        </styled.DivLayoutConteudo>
        <styled.DivLayoutImagem>
          <img src="./static/svgs/illustrationLogo.svg" alt="loginIllustration" style={{ width: '50vh' }}></img>
        </styled.DivLayoutImagem>
      </styled.DivLayout>
      <styled.DivConteudo>
        <h1>Seja bem vindo!</h1>
        <hr style={{ marginBottom: '50px' }} />
        <styled.DivField>
          <styled.Label>E-mail</styled.Label>
          <styled.Input type="email" placeholder="Seu e-mail" />
        </styled.DivField>
        <styled.DivField>
          <styled.Label>Senha</styled.Label>
          <styled.Input type="password" placeholder="Sua senha" />
        </styled.DivField>
        <styled.DivCheckbox>
          <styled.StayConnect>
            <input type="checkbox" /> <p style={{ marginLeft: '8px' }}>Manter conectado</p>
          </styled.StayConnect>
          <styled.ForgotPassword>Esqueci minha senha</styled.ForgotPassword>
        </styled.DivCheckbox>
        <styled.ButtonEnter type="submit">Entrar</styled.ButtonEnter>
        <styled.Copyright>© Copyright 2022 Ranielli. Todos os direitos reservados.</styled.Copyright>
      </styled.DivConteudo>
    </styled.DivBase>
  );
};

export default Login;
