var body = $response.body;  // 获取响应体
var obj = JSON.parse(body);  // 解析响应体为对象

// 设置修改字段
obj.data.proEndDate = "2099-01-01T00:00:00.000+0000";  // 设置 proEndDate 为 2099-01-01
obj.data.needSubscribe = false;  // 设置 needSubscribe 为 false
obj.data.pro = true;  // 设置 pro 为 true

// 将修改后的对象转回 JSON 字符串
body = JSON.stringify(obj);

// 返回修改后的响应
$done({body: body});  // Loon 需要使用 {body: body} 来返回修改后的响应体
