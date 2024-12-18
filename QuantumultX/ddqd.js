var obj = JSON.parse($response.body);
console.log("Original Response: ", $response.body);  // 输出原始响应体

if (obj && obj.data) {
    obj.data.timeStamp = 1734539835894;
    obj.data.proEndDate = "2099-01-01T00:00:00.000+0000";
    obj.data.pro = true;
$done({ body: JSON.stringify(obj) });
