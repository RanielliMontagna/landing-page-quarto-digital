import { PaginaBase } from 'components';
import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import NovoServico from './modais/novoServico/novoServico';

export const Servicos = () => {
  const [novoServico, setNovoServico] = useState(false);

  return (
    <PaginaBase
      titulo="Servicos"
      button={{
        children: 'Novo serviço',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setNovoServico(true),
      }}
    >
      <> {novoServico && <NovoServico novoServico={novoServico} setNovoServico={setNovoServico} />}</>
    </PaginaBase>
  );
};

export default Servicos;
