import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    imgUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  clickMethod() {
    //obj.method() => this will return obj
    //function() with out object it will return undefine
    alert("undefined count value " + this.state.count);
  }
  clickMethodBind() {
    alert("display count value " + this.state.count);
  }
  // Method 1 to access current object in click event
  constructor() {
    //   Here super method to access all curret object values without this we will get an error
    super();
    this.clickMethodBind = this.clickMethodBind.bind(this);
    console.log(this.clickMethodBind);
  }
  // Method 2 using arrow function  no need to use constrator
  clickMethodBind2 = () => {
    alert("display count value using arrow fun " + this.state.count);
  };
  NoincreamentCount = () => {
    this.state.count++;
  };
  increamentCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  increamentCountWitharg = () => {
    this.doincrement({ val: 1 });
  };
  doincrement(value) {
    console.log(value);
  }
  // render method is asyn, my it will be call 10 MS(milliseconds) or 1 MS
  render() {
    return (
      // step 1: React.createElement('h1') //React will render like this
      <div className="container-fluid" style={{ marginLeft: 10 }}>
        {/* step 2: {<img src={this.state.imgUrl} alt="" />} */}
        <span className={this.getBadgeMethod()}>{this.formateCount()}</span>
        <button className="btn btn-secondary btn-sm">increament</button>
        {/* step 3: //rendering list 
        
        of elements Here key is unique item to identify react, 
        if any value is change then react will identify easyly to which one was changed and rerender */}
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

        {/* step 4: Conditional Rendering  */}

        {/* In javascript & condtion always retrun last condtion operand ex: true& 'hi' & 1, it return 1  */}
        {/* Method 1  */}
        {this.state.tags == 0 && "No tags are found!"}
        {/* Method 2  */}
        {this.renderTags()}
        {/* step 5: Handling Events  */}
        <button className="btn btn-secondary btn-sm" onClick={this.clickMethod}>
          onClick
        </button>
        {/* step 6: Binding Event Handlers  */}
        <button
          className="btn btn-secondary btn-sm m-3"
          onClick={this.clickMethodBind}
        >
          onClick Method
        </button>
        {/* step 7: Binding Event Handlers  */}
        <button
          className="btn btn-secondary btn-sm m-3"
          onClick={this.clickMethodBind2}
        >
          onClick using arrow fun
        </button>
        {/* step 8: Updating the State  */}
        {/* This will not update the state bcoz react will update automitically as just like AngularJs this reason it will work to solve this see below   */}
        <button
          className="btn btn-secondary btn-sm m-3"
          onClick={this.NoincreamentCount}
        >
          No increament
        </button>
        {/* here we telling to react which value is changing using setState() method  */}
        <button
          className="btn btn-secondary btn-sm m-3"
          onClick={this.increamentCount}
        >
          increament value
        </button>
        {/* step 9: Virtual DOM 
            Tree Stacture                                       old tree

                div                                                 div
            span button button button button ect..              span button button button ect

            In virtual dom if count is updated then it will update only span tag in real dom
            other DOM will not effect
         */}
        {/* step 10: Passing Event Arguments method1 redefine method  */}
        <button
          className="btn btn-secondary btn-sm m-3"
          onClick={this.increamentCountWitharg}
        >
          {" "}
          increament with Arguments
        </button>
        {/* Method 2 using arrow function this is best way  */}
        <button
          className="btn btn-secondary btn-sm m-3"
          onClick={() => this.doincrement(10)}
        >
          {" "}
          increament with Arguments with arrowfun
        </button>
      </div>
    );
  }
  renderTags() {
    //   if tags then display  Tags otherwise will display No tags
    if (this.state.tags.length === 0) return <p>No tags</p>;
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }
  formateCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  //classs
  getBadgeMethod() {
    let _badgeclass = "badge m-2 badge-";
    _badgeclass += this.state.count === 0 ? "warning" : "primary";
    return _badgeclass;
  }
}

export default Counter;
