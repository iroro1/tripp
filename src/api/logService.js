function init() {
  console.log("logging service initialized");
}

function log(err) {
  console.error(err);
}

export { init, log };
