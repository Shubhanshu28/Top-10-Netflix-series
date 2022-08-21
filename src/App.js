// import logo from './logo.svg';
// import Tform from "./components/Tform";
// import './App.css';
// import Display from "./components/Display";
import Netflix from "./components/Netflix";
import Sdata from "./components/Sdata";
import "./components/Netflix.css";

function App() {
  // console.log(Sdata[0]);

  return (
    <div className="App-header">
      <h1>Top 4 Netflix Series</h1>
      {Sdata.map((value) => {
        return (
          <Netflix
            key={value.id}
            imgsrc={value.imgsrc}
            title={value.title}
            sname={value.sname}
            link={value.link}
          />
        );
      })}
    </div>
  );
}

export default App;
