import { PageHeader } from 'components';
import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import NovoServico from './modais/novoServico/novoServico';

export const Servicos = () => {
  const [novoServico, setNovoServico] = useState(false);

  return (
    <div>
      <PageHeader
        titulo="Servicos"
        buttons={[
          {
            children: 'Novo serviço',
            variant: 'outlined',
            startIcon: <IoAdd />,
            onClick: () => setNovoServico(true),
          },
        ]}
      />
      {novoServico && <NovoServico novoServico={novoServico} setNovoServico={setNovoServico} />}
    </div>
  );
};

export default Servicos;
