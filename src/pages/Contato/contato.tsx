import { Footer, TitleBar } from 'components';
import { DivContato, Titulo } from './contato.styles';

const Contato = () => {
  return (
    <DivContato>
      <TitleBar rota="contato" />
      <Titulo>
        <h1> Entre em contato</h1>
        <h2>
          Um sistema de gestão hoteleira criado com carinho para simplificar a vida dos hotéis e pousadas de pequeno e
          médio porte.
        </h2>
        {/* <h1>Tenha total controle sobre suas reservas.</h1>
        <h1>Conheça o Quarto Digital e veja como funciona.</h1>
        <h1>Fale conosco</h1>
        <p></p> */}
      </Titulo>
      <Footer />
    </DivContato>
  );
};

export default Contato;
