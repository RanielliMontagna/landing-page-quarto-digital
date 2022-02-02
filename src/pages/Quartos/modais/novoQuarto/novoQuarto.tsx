import { FC } from 'react';
import { Modal } from 'components';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AppActions } from 'store';

interface NovoQuartoProps {
  novoQuarto: boolean;
  setNovoQuarto: React.Dispatch<React.SetStateAction<boolean>>;
}

const NovoQuarto: FC<NovoQuartoProps> = ({ novoQuarto, setNovoQuarto }) => {
  const dispatch = useDispatch();

  const _onClose = () => {
    setNovoQuarto(false);
  };

  const _handleSubmit = () => {
    dispatch(AppActions.toggleNotificacao({ mensagem: 'Novo quarto adicionado com sucesso!' }));
    _onClose();
  };

  return (
    <Modal
      open={novoQuarto}
      onClose={_onClose}
      titulo="Novo quarto"
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

export default NovoQuarto;
