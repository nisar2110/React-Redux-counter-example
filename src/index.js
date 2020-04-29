import React from "react";
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"

import Counter from "./Counter";

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1
            }
        case 'decrement':
            return {
                count: state.count - 1
            }

        default:
            return state;
    }
}

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
      <Counter />
    </Provider>
  );

render(<App />, document.getElementById('root'))
