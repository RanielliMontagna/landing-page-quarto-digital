import { useState } from 'react';
import { PageHeader } from 'components';
import { IoAdd } from 'react-icons/io5';
import NovoCliente from './modais/novoCliente/novoCliente';

export const Clientes = () => {
  const [novoCliente, setNovoCliente] = useState(false);

  return (
    <div>
      <PageHeader
        titulo="Clientes"
        buttons={[
          {
            children: 'Novo cliente',
            variant: 'outlined',
            startIcon: <IoAdd />,
            onClick: () => setNovoCliente(true),
          },
        ]}
      />
      {novoCliente && <NovoCliente novoCliente={novoCliente} setNovoCliente={setNovoCliente} />}
    </div>
  );
};

export default Clientes;
