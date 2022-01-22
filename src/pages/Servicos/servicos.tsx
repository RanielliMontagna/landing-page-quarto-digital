import { PageHeader } from 'components';
import { IoAdd } from 'react-icons/io5';

export const Servicos = () => {
  return (
    <div>
      <PageHeader
        titulo="Servicos"
        buttons={[
          {
            children: 'Novo servico',
            variant: 'outlined',
            startIcon: <IoAdd />,
            onClick: () => console.log('teste'), //TODO onClick novo servico
          },
        ]}
      />
    </div>
  );
};

export default Servicos;
