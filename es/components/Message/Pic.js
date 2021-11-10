import style from './Pic.module.scss';
export default (function (_ref) {
  var imageUrl = _ref.imageUrl;
  return /*#__PURE__*/React.createElement("div", {
    className: style.PicWrapper
  }, /*#__PURE__*/React.createElement("img", {
    referrerPolicy: "no-referrer",
    src: imageUrl,
    className: style.Pic
  }));
});