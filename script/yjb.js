var body = $response['body'];
var obj = JSON['parse'](body);
obj['data']['nickname'] = 1;
obj['data']['vip_label'] = true;
obj['data']['is_pay'] = true;
obj['data']['vip_expiry_date'] = 2099-12-31;
body = JSON['stringify'](obj);
$done({
    body
})
