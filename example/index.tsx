import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Thing, Button, Ruler } from '../.';
import Ruler from '../.';
// import Ruler from '@kedachen/ruler';

const App = () => {
  const [zoom, setZoom] = React.useState(1);
  setTimeout(() => {
    setZoom(0.5);
  }, 10000);

  return (
    <div
      style={{
        padding: '100px',
        background: '#333',
        width: '500px',
        margin: '0 auto',
      }}
    >
      {/* <Ruler height={26} zoom={0.25} lineColor="red" /> */}
      {/* <Ruler height={26} zoom={0.2} min={-120} lineColor="red" /> */}
      {/* <Ruler height={26} zoom={0.4} min={-120} lineColor="red" /> */}
      {/* <Ruler height={26} zoom={0.8} min={-120} lineColor="red" /> */}
      {/* <Ruler
        width={30}
        height={420}
        zoom={1}
        min={-120}
        scaleLineStyle={{
          shortLength: 10,
          mediumLength: 18,
          longLength: 30,
        }}
        textStyle={{
          top: 20,
        }}
        horizontal={false}
      /> */}
      <br />
      <br />
      <Ruler
        height={30}
        width={221}
        zoom={zoom}
        min={0}
        scaleLineStyle={{
          shortLength: 10,
          mediumLength: 14,
          longLength: 30,
        }}
        textFormat={(val: number) => {
          return `${val}px`;
        }}
        onMouseOver={number => {
          console.log('over>>>' + number);
        }}
        onMouseOut={number => {
          console.log('out>>>' + number);
        }}
        onMouseMove={number => {
          // console.log(number);
        }}
      />
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
