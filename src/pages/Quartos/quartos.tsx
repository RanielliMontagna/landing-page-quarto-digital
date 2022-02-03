import { PaginaBase } from 'components';
import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import NovoQuarto from './modais/novoQuarto/novoQuarto';

export const Quartos = () => {
  const [novoQuarto, setNovoQuarto] = useState(false);

  return (
    <PaginaBase
      titulo="Quartos"
      button={{
        children: 'Novo quarto',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setNovoQuarto(true),
      }}
    >
      <> {novoQuarto && <NovoQuarto novoQuarto={novoQuarto} setNovoQuarto={setNovoQuarto} />}</>
    </PaginaBase>
  );
};

export default Quartos;
