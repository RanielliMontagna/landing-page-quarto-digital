import { PageHeader } from 'components';
import { IoAdd } from 'react-icons/io5';

export const Quartos = () => {
  return (
    <div>
      <PageHeader
        titulo="Quartos"
        buttons={[
          {
            children: 'Novo quarto',
            variant: 'outlined',
            startIcon: <IoAdd />,
            onClick: () => console.log('teste'), //TODO onClick novo quarto
          },
        ]}
      />
    </div>
  );
};

export default Quartos;
