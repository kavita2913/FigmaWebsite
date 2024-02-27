import Header from './Component/Header';
import Heading from './Component/Heading';
import Footer from './Component/Footer';
import MainContainer from './Component/MainContainer';
import data from './Component/Data';
import Exclusive from './Component/Exclusive';
import Tempt from './Component/Tempt';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Heading />
      {data.map((item, index) => (
        <MainContainer key={index} obj={item} />
      ))}
      {/* {parentdata.map((item,index) =>(
        <RelatedDetails key={index} alpha={item} />
      )) } */}
      <Tempt/>
      <Exclusive />

      <Footer />
    </div>
  );
}

export default App;
{/* <Rectangle obj={data[0]} />
<Rectangle obj={data[1]} />
<Rectangle obj={data[2]} />
<Rectangle obj={data[3]} /> */}