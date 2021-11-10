export default function (classObj) {
  var className = '';
  Object.keys(classObj).forEach(function (resKey) {
    if (classObj[resKey]) {
      className += resKey + " ";
    }
  });
  return className;
}