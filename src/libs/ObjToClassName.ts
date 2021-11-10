export default function (classObj: { [key: string]: boolean }) {
  let className = '';
  Object.keys(classObj).forEach((resKey) => {
    if (classObj[resKey]) {
      className += `${resKey} `;
    }
  });

  return className;
}
