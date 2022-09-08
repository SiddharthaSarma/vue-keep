export function debounce(fn, delay) {
  let timeoutID = null;
  return () => {
    clearTimeout(timeoutID);
    const args = arguments;
    timeoutID = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
}
