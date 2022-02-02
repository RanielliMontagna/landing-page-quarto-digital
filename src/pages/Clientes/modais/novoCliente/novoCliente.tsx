import { FC } from 'react';
import { Modal } from 'components';
import { MdAdd } from 'react-icons/md';

interface NovoClienteProps {
  novoCliente: boolean;
  setNovoCliente: React.Dispatch<React.SetStateAction<boolean>>;
}

const NovoCliente: FC<NovoClienteProps> = ({ novoCliente, setNovoCliente }) => {
  const _onClose = () => {
    setNovoCliente(false);
  };

  const _handleSubmit = () => {
    console.log('submit');
    _onClose();
  };

  return (
    <Modal
      open={novoCliente}
      onClose={_onClose}
      titulo="Novo cliente"
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

export default NovoCliente;
