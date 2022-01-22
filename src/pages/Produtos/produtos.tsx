import { PageHeader } from 'components';
import { IoAdd } from 'react-icons/io5';

export const Produtos = () => {
  return (
    <div>
      <PageHeader
        titulo="Produtos"
        buttons={[
          {
            children: 'Novo produto',
            variant: 'outlined',
            startIcon: <IoAdd />,
            onClick: () => console.log('teste'), //TODO onClick novo produto
          },
        ]}
      />
    </div>
  );
};

export default Produtos;
