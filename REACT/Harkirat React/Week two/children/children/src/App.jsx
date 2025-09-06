import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // height: "100vh",
        border: "1px solid black",
        borderRadius: "5px",
        // backgroundColor: "white",
        // width: "300px",
        gap: "10px",
        margin: "auto",
      }}
    >
      {/* <Cart
        children={
          <h1
            style={{
              color: "red",
            }}
          >
            hi there
          </h1>
        }
      /> */}{" "}
      {/* // you can do this as well */}
      <Cart>
        <h1
          style={{
            color: "red",
          }}
        >
          hi there
        </h1>
      </Cart>
      <Cart
        children={
          <h1
            style={{
              color: "red",
            }}
          >
            hi Sachin
          </h1>
        }
      />
    </div>
  );
}

function Cart({ children }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // height: "100vh",
          border: "1px solid black",
          borderRadius: "5px",
          backgroundColor: "white",
          width: "300px",
          margin: "auto",
          color: "black",
        }}
      >
        upper
        {children}
        lower
        {children}
      </div>
    </>
  );
}

export default App;
