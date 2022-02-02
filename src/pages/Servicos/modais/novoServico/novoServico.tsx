import { Modal } from 'components';
import { FC } from 'react';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AppActions } from 'store';

interface NovoServicoProps {
  novoServico: boolean;
  setNovoServico: React.Dispatch<React.SetStateAction<boolean>>;
}

const NovoServico: FC<NovoServicoProps> = ({ novoServico, setNovoServico }) => {
  const dispatch = useDispatch();

  const _onClose = () => {
    setNovoServico(false);
  };

  const _handleSubmit = () => {
    dispatch(AppActions.toggleNotificacao({ mensagem: 'Novo serviço adicionado com sucesso!' }));
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
