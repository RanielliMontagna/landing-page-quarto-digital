import * as styled from './titleBar.styles';

const TitleBar = () => {
  return (
    <styled.TitleBar>
      <div>
        <div style={{ display: 'flex' }}>
          <div className="quarto">Quarto</div>
          <div className="digital">Digital</div>
        </div>
      </div>
    </styled.TitleBar>
  );
};

export default TitleBar;
