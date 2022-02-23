import { Copyright, DivFooter, RedeSocial, RedesSociais } from './footer.styles';

const Footer = () => {
  return (
    <DivFooter id="footer">
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '32px' }}>
        <div className="quarto">Quarto</div>
        <div className="digital">Digital</div>
      </div>
      <RedesSociais>
        <RedeSocial onClick={() => window.open('https://www.instagram.com/raniellimontagna/', '_blank')}>
          INSTAGRAM
        </RedeSocial>
        <RedeSocial onClick={() => window.open('https://twitter.com/Ranii_Montagna/', '_blank')}>TWITTER</RedeSocial>
        <RedeSocial onClick={() => window.open('https://ranimontagna.com/', '_blank')}>SITE</RedeSocial>
        <RedeSocial onClick={() => window.open('mailto:contato@ranimontagna.com', '_blank')}>EMAIL</RedeSocial>
      </RedesSociais>
      <Copyright>
        Copyright 2022 – Ranielli Montagna.
        <span>Todos os direitos reservados.</span>
      </Copyright>
    </DivFooter>
  );
};

export default Footer;
