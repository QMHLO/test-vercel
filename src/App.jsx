import React from "react";
import "./App.css";
import axios from "axios";
import Header from "./compoments/Header";

import Parent from "./Test";
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fectchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setData(data);
      } catch (err) {
        setData("Error");
      }
    };
    fectchData();
  }, []);

  console.log(data);

  if (data === "Error") return <div>Error Occured While fetching data</div>;
  if (!data) return <div>Loading ... </div>;
  return (
    <>
      <Header />
      <div className="row">
        {data &&
          data.map(({ id, title, image }) => {
            return (
              // <div key={id}>
              //   <h1>{id}</h1>
              //   <p>{title}</p>
              //   <img src={image} alt="some image"/>
              // </div>
              <>
                <div className="card" key={id}>
                  <img src={image} alt="some image" />
                  <div className="container">
                    <h4>
                      <b>{title}</b>
                    </h4>
                    {/* <p>Architect & Engineer</p> */}
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default App;
