import {EqualContainer, InputContainer, KeyBoardContainer, ExpressionsContainer} from '../calculator';
import {Canvas} from '../canvas';

function App() {

  return (
    <div style={{display: 'flex', width: '700px', margin: 'auto', gap: '40px'}}>
      <div style={{border: '1px solid black', flex: 1}}>
        <InputContainer/>
        <KeyBoardContainer/>
        <ExpressionsContainer/>
        <EqualContainer/>
      </div>
      <Canvas/>
    </div>
  );
}

export default App;
