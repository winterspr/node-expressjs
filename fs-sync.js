const {readFileSync, writeFileSync} = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')//đọc file lấy thông tin
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
    './content/third.txt',
    `here is result: ${first}, ${second}`,
    {flag: 'a'}
)

//{flag: 'a'}: kiểm tra nếu có file cần viết vòa tồn tạ thì ghi vào