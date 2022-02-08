import { CardIndicador, PaginaBase } from 'components';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from 'styled-components';
import { apexOptions, DadosCards } from './indicadores.static';
import * as styled from './indicadores.styles';

export const Indicadores = () => {
  const theme: any = useTheme();

  return (
    <PaginaBase titulo="Indicadores">
      <div>
        <styled.DivCards>
          {DadosCards().map(({ titulo, valor }, index) => {
            return <CardIndicador titulo={titulo} valor={valor} index={index} />;
          })}
        </styled.DivCards>
        <div>
          <ReactApexChart
            options={apexOptions(theme)}
            series={[
              {
                name: 'Hóspedes ativos',
                data: [5, 10, 11, 7, 4, 8, 11],
              },
            ]}
            type="area"
            height="300px"
          />
        </div>
      </div>
    </PaginaBase>
  );
};

export default Indicadores;
