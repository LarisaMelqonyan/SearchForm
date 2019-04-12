import React, { Component } from "react";
import Search from "./Search";
import DownshiftMultiple from "./DownshiftMultiple";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <DownshiftMultiple />
      </div>
    );
  }
}

export default App;
