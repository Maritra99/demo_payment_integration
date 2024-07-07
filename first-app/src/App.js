import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const data = params.get("data");

  return (
    <div>
      <h1>Welcome to the Website</h1>
      {data ? (
        <>
          <p>Data from Telegram: {JSON.stringify(data)}</p>
          <p>Typeof Data from Telegram: {typeof data}</p>
        </>
      ) : (
        <p>No data provided</p>
      )}
    </div>
  );
};

const App = () => {
  return <Home />;
};

export default App;
