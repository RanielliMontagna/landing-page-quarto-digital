import { useState } from 'react';
import { PaginaBase } from 'components';
import { IoAdd } from 'react-icons/io5';
import NovoCliente from './modais/novoCliente/novoCliente';

export const Clientes = () => {
  const [novoCliente, setNovoCliente] = useState(false);

  return (
    <PaginaBase
      titulo="Clientes"
      button={{
        children: 'Novo cliente',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setNovoCliente(true),
      }}
    >
      <>{novoCliente && <NovoCliente novoCliente={novoCliente} setNovoCliente={setNovoCliente} />}</>
    </PaginaBase>
  );
};

export default Clientes;
