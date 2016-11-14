const {rrand} = require('./my-lib');
try {
  exports.bang = bang;
} catch (e) {
}

autowatch = 1;
inlets = 0;
outlets = 2;

function bang() {
  post('Coucou');

  outlet(0, rrand(0, 11));
  outlet(1, rrand(0, 111));
}