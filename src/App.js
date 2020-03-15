import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import Home from "./Views/Home";
import TakePhoto from "./Views/TakePhoto";
import FirstConfig from "./Views/firstConfig";

class App extends Component {
  // const history = useHistory();

  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/takephoto">TakePhoto</Link>
            </li>
            <li>
              <Link to="/firstconfig">First Config</Link>
            </li>
          </ul>

          <div
            onClick={() => {
              // history.push("/takephoto");
            }}
          >
            Start
          </div>
          <div>Konfiguracja</div>

          <Route exact path="/" component={Home} />
          <Route path="/firstconfig" component={FirstConfig} />
          <Route path="/takephoto" component={TakePhoto} />
        </div>
      </Router>
    );
  }
}

export default App;
