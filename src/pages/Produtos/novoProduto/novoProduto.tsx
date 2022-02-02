import { FC } from 'react';
import { Modal } from 'components';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AppActions } from 'store';

interface NovoProdutoProps {
  novoProduto: boolean;
  setNovoProduto: React.Dispatch<React.SetStateAction<boolean>>;
}

const NovoProduto: FC<NovoProdutoProps> = ({ novoProduto, setNovoProduto }) => {
  const dispatch = useDispatch();

  const _onClose = () => {
    setNovoProduto(false);
  };

  const _handleSubmit = () => {
    dispatch(AppActions.toggleNotificacao({ mensagem: 'Novo produto adicionado com sucesso!' }));
    _onClose();
  };

  return (
    <Modal
      open={novoProduto}
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

export default NovoProduto;
