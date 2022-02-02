import { FC } from 'react';
import { Modal } from 'components';
import { MdAdd } from 'react-icons/md';

interface NovoServicoProps {
  novoServico: boolean;
  setNovoServico: React.Dispatch<React.SetStateAction<boolean>>;
}

const NovoServico: FC<NovoServicoProps> = ({ novoServico, setNovoServico }) => {
  const _onClose = () => {
    setNovoServico(false);
  };

  const _handleSubmit = () => {
    console.log('submit');
    _onClose();
  };

  return (
    <Modal
      open={novoServico}
      onClose={_onClose}
      titulo="Novo serviço"
      footer={{
        botaoPrimario: {
          children: 'Adicionar',
          variant: 'outlined',
          startIcon: <MdAdd />,
          onClick: _handleSubmit,
        },
      }}
    >
      <>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
      </>
    </Modal>
  );
};

export default NovoServico;
