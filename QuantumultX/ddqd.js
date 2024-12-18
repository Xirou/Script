var obj = JSON.parse($response.body);
console.log("Original Response: ", $response.body);  // 输出原始响应体

if (obj && obj.data) {
    obj.data.timeStamp = 1734539835894;
    obj.data.proEndDate = "2099-01-01T00:00:00.000+0000";
    obj.data.needSubscribe = false;
    obj.data.pro = true;
    obj.data.teamPro = false;
    obj.data.inboxId = "inbox1014893632";
    obj.data.userId = "1014893632";
    obj.data.username = "aybyl28v@user.dida365.com";
    obj.data.freeTrial = false;
    obj.data.userCode = "e5f176947ba448d195e0aaca2bc99f05";
    obj.data.activeTeamUser = false;
    obj.data.teamUser = false;
    obj.data.ds = false;
} else {
    console.log("obj or obj.data is undefined");
}

console.log("Modified Response: ", JSON.stringify(obj));  // 输出修改后的响应

$done({ body: JSON.stringify(obj) });
