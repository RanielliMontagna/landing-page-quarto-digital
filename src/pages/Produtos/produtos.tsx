import { useState } from 'react';
import { PageHeader } from 'components';
import { IoAdd } from 'react-icons/io5';
import NovoProduto from './novoProduto/novoProduto';

export const Produtos = () => {
  const [novoProduto, setNovoProduto] = useState(false);

  return (
    <div>
      <PageHeader
        titulo="Produtos"
        buttons={[
          {
            children: 'Novo produto',
            variant: 'outlined',
            startIcon: <IoAdd />,
            onClick: () => setNovoProduto(true),
          },
        ]}
      />
      {novoProduto && <NovoProduto novoProduto={novoProduto} setNovoProduto={setNovoProduto} />}
    </div>
  );
};

export default Produtos;
