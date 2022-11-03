#!/usr/bin/env node
const packageInfo = require('../package.json');
const init = require('../dist/index').default;
function run (argv) {
  if (argv[0] === '-v' || argv[0] === '--version') {
    console.log(`  version is ${packageInfo.version}`);
  } else if (argv[0] === '-h' || argv[0] === '--help') {
    console.log('  usage:\n');
    console.log('  swag init [初始化]');
    console.log('  swag run [执行生成]');
    console.log('  swag -v --version [show version]');
  } else {
    init(argv[0]);
  }
}
run(process.argv.slice(2));
