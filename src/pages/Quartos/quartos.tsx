import { PageHeader } from 'components';
import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import NovoQuarto from './modais/novoQuarto/novoQuarto';

export const Quartos = () => {
  const [novoQuarto, setNovoQuarto] = useState(false);

  return (
    <div>
      <PageHeader
        titulo="Quartos"
        buttons={[
          {
            children: 'Novo quarto',
            variant: 'outlined',
            startIcon: <IoAdd />,
            onClick: () => setNovoQuarto(true),
          },
        ]}
      />
      {novoQuarto && <NovoQuarto novoQuarto={novoQuarto} setNovoQuarto={setNovoQuarto} />}
    </div>
  );
};

export default Quartos;
