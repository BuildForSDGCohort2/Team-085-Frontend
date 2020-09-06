import React from "react";
import "../css/App.css";
import { Provider} from 'react-redux'; 
import configureStore from './store/configureStore';
import {Route, Switch} from 'react-router-dom';
import Landing from "./components/Landing";

const store = configureStore(); 

function App() {
  return (
    <Provider store={store}>
       <Switch>
          <Route path="/" component = {Landing}/>
      </Switch>
    </Provider>
  );
}

export default App;
