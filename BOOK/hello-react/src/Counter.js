import React, { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  // super함수를 선언해야지만 Compenent 클래스의 생성자 함수를 상속받을수 있음
  //     super(props);
  //     this.state = {
  //       number: 0,
  //       fixedNunber: 0,
  //     };
  //   }
  // state를 선언하는 다른 방식
  state = {
    number: 0,
    fixedNunber: 0,
  };
  render() {
    const { number, fixedNunber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>두배로 올라가는 숫자 : {fixedNunber}</h1>
        <button
          onClick={() => {
            this.setState(
              (prevState) => {
                return { number: prevState.number + 1 };
              },
              () => {
                console.log("방금 setState가 호출 되었습니다.");
                console.log(this.state);
              }
            );
            this.setState((prevState) => {
              return { fixedNunber: prevState.number + 1 };
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
