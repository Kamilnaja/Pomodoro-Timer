export let worker: Worker;

if (typeof Worker !== 'undefined') {
  worker = new Worker('scripts/counter.js');
} else {
  console.log('Your browser do not allow to use web workers. Please use other browser');
}
