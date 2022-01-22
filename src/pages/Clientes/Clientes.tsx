import { PageHeader } from 'components';
import { IoAdd } from 'react-icons/io5';

export const Clientes = () => {
  return (
    <div>
      <PageHeader
        titulo="Clientes"
        buttons={[
          {
            children: 'Novo cliente',
            variant: 'outlined',
            startIcon: <IoAdd />,
            onClick: () => console.log('teste'),
          },
        ]}
      />
    </div>
  );
};

export default Clientes;
