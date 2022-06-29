import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Thing, Button, Ruler } from '../.';
// import Ruler from '../.';
import Ruler from '@kedachen/ruler';

const App = () => {
  return (
    <div style={{ margin: '100px' }}>
      {/* <Ruler height={26} zoom={0.25} lineColor="red" /> */}
      {/* <Ruler height={26} zoom={0.2} min={-120} lineColor="red" /> */}
      {/* <Ruler height={26} zoom={0.4} min={-120} lineColor="red" /> */}
      {/* <Ruler height={26} zoom={0.8} min={-120} lineColor="red" /> */}
      <Ruler height={26} zoom={1} min={-120} lineColor="red" />
      {/* <Ruler height={26} zoom={1.2} min={-120} lineColor="red" /> */}
      {/* <Ruler height={26} zoom={2.2} min={-120} lineColor="red" /> */}
      {/* <Ruler height={26} zoom={5} min={-120} lineColor="red" /> */}
      {/* <Ruler height={26} zoom={10} min={-120} lineColor="red" /> */}
    </div>
  );
};
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(<App />);

ReactDOM.render(<App />, document.getElementById('root'));
