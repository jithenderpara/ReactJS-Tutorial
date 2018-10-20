import React, { Component } from "react";
import Counter from "./counter";
class TutorialAdv extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  };
  render() {
    return (
      // Composing Components
      //Rendering component list items here key is unique itentification for each
      // Selected is true, by default it is true
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} selected />
        ))}
        {/* or  <Counter key={counter.id} value={counter.value} selected={true} />  */}
        {/* Step2 Passing Children  */}
        <Counter value={10} selected>
          <h4>Children Title</h4>
        </Counter>
        {/* Step3 Debugging React Apps  */}
      </div>
    );
  }
}

export default TutorialAdv;
