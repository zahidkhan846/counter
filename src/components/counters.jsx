import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      counters,
      onDelete,
      onIncrement,
      onReset,
      onDecrement,
    } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
        <button onClick={onReset} className="btn btn-info btn-sm m-2">
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
