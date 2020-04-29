import React from "react";
import { connect } from "react-redux"

class Counter extends React.Component {
    increment() {
        this.props.dispatch({ type: 'increment'});
    }

    decrement() {
        this.props.dispatch({ type: 'decrement'});
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <button onClick={() => this.decrement()}>-</button>
                <span>{this.props.count}</span>
                <button onClick={() => this.increment()}>+</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);