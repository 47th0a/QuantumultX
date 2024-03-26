var body = $response.body;
var obj = JSON.parse(body);

obj['data']['nickname'] = 1;
obj['data']['subscribe_status'] = 1;
obj['data']['vip_label'] = true;
obj['data']['is_pay'] = true;
obj['data']['vip_expiry_date'] = "2099-12-31 09:12:11";
obj['data']['open_free_vip_sign'] = true;
body = JSON.stringify(obj);

console.log(body);

$done(body);
