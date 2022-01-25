import PropTypes from "prop-types";
import React, { Component } from "react";

// const MyComponent = ({ name, children, favoriteNumber }) => {
//   return (
//     <>
//       <div>제 이름은 {name} 입니다.</div>
//       children 값은 {children}
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </>
//   );
// };

class MyComponent extends Component {
  //클래스 내부에서 defaultProps와 propTypes를 사용하는 방법

  static defaultProps = {
    name: "기본이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    //this.props를 렌더 안에서 선언해주면된다.
    const { name, children, favoriteNumber } = this.props;
    return (
      <>
        <div>제 이름은 {name} 입니다.</div>
        children 값은 {children}
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </>
    );
  }
}

// MyComponent.defaultProps = {
//   name: "기본이름",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent;
