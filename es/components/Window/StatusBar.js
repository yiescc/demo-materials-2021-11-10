import style from './StatusBar.module.scss';
export default (function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    className: style.StatusBar
  }, /*#__PURE__*/React.createElement("div", {
    className: style.Left
  }, /*#__PURE__*/React.createElement("time", {
    className: style.Time
  }, "08:08")), /*#__PURE__*/React.createElement("div", {
    className: style.Right
  }, /*#__PURE__*/React.createElement("span", {
    className: style.RightIcon
  })));
});