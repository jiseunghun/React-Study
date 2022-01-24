import PropTypes from "prop-types";

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <>
      <div>제 이름은 {name} 입니다.</div>
      children 값은 {children}
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
