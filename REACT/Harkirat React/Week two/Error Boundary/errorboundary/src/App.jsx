import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Component } from "react";

function App() {
  return (
    <>
      <ClassBoundary>
        <Card1 />
      </ClassBoundary>
      <Card2 />
    </>
  );
}

class ClassBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getStateDerived(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Sometthing went wrong</h1>;
    }

    return this.props.children;
  }
}

const Card1 = () => {
  // throw new Error("D");
  throw new Error("Im carshed");
};

const Card2 = () => {
  return <h1>hi Sachin</h1>;
};

export default App;
