const cookieName = 'yjb'
const cookieKey = 'cookie_yjb'
const cookieVal = $request.headers['Cookie'] || $request.headers['cookie']

if (cookieVal) {
  let cookie = $persistentStore.write(cookieVal, cookieKey)
  if (cookie) {
    let msg = `${cookieName}`
    $notification.post(msg, 'Cookie写入成功', '详见日志')
    console.log(msg)
    console.log(cookieVal)
  }
}

$done({})