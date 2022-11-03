import init from './index'
const packageInfo = require('../../package.json')

let isDebugger = false
if (process.argv.slice(3)) {
  console.log('已启用调试模式')
  isDebugger = process.argv.slice(3)[0] === 'dev'
}

function run(argv: any) {
  if (argv[0] === '-v' || argv[0] === '--version') {
    console.log(`  version is ${packageInfo.version}`)
  } else if (argv[0] === '-h' || argv[0] === '--help') {
    console.log('  usage:\n')
    console.log('  swag init [初始化]')
    console.log('  swag run [执行生成]')
    console.log('  swag -v --version [show version]')
  } else {
    init(argv[0], isDebugger)
  }
}

run(process.argv.slice(2))
