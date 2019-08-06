import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostForm from "./PostForm";
import PostList from "./PostList";

function App() {
  return (
    <Router>
      <div className="App">
        <br />
        <button>
          <Link to={"/PostList"}>Show All Posts</Link>
        </button>
        <Switch>
          <Route exact path="/" component={PostForm} />
          <Route path="/PostList" component={PostList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
