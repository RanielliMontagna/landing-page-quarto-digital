import { useState } from 'react';
import { PaginaBase } from 'components';
import { IoAdd } from 'react-icons/io5';
import NovoProduto from './novoProduto/novoProduto';

export const Produtos = () => {
  const [novoProduto, setNovoProduto] = useState(false);

  return (
    <PaginaBase
      titulo="Produtos"
      button={{
        children: 'Novo produto',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setNovoProduto(true),
      }}
    >
      <> {novoProduto && <NovoProduto novoProduto={novoProduto} setNovoProduto={setNovoProduto} />}</>
    </PaginaBase>
  );
};

export default Produtos;
