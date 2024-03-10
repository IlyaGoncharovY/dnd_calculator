import {Constructor, DropContainer} from '../dnd';

function App() {

  return (
    <div style={{display: 'flex', width: '700px', margin: 'auto', gap: '40px'}}>
      <div style={{border: '1px solid black', flex: 1}}>
        <Constructor/>
      </div>
      <DropContainer/>
    </div>
  );
}

export default App;
