/***************************************************
 *  Sorted.js 支持3.9.1
 *
 *  用于拦截并修改 App 的订阅 / 购买响应数据：
 *   - 将原本 2022 年的时间改为 2026 年
 *   - 对应毫秒时间戳改为 2026-09-21 11:40:35 UTC
 *   - 将 isPro 设为 true, status 设为 0
 *
 *  免责声明：
 *    此脚本仅作学习 JavaScript 混淆与逆向之用，
 *    在实际环境中使用可能违反应用条款或面临法律风险，
 *    请谨慎使用。
 ****************************************************/

// 拦截并解析原始响应
var objc = JSON.parse($response.body);

// 构造并替换返回给客户端的 JSON 对象
objc = {
  receipt: {
    receipt_type: "Production",
    adam_id: 1302150742,
    app_item_id: 1302150742,
    bundle_id: "com.xxx.xxx",
    application_version: "1.0.0",
    download_id: 83526521719064,
    version_external_identifier: 8513143715,

    // 以下所有日期从 2022 改为 2026
    // 毫秒时间戳改成 1789981235000（对应 2026-09-21 11:40:35 UTC）
    receipt_creation_date: "2026-09-21 11:40:35 Etc/GMT",
    receipt_creation_date_ms: "1789981235000",
    receipt_creation_date_pst: "2026-09-21 04:40:35 America/Los_Angeles",

    request_date: "2026-09-21 11:40:35 Etc/GMT",
    request_date_ms: "1789981235000",
    request_date_pst: "2026-09-21 04:40:35 America/Los_Angeles",

    original_purchase_date: "2026-09-21 11:40:35 Etc/GMT",
    original_purchase_date_ms: "1789981235000",
    original_purchase_date_pst: "2026-09-21 04:40:35 America/Los_Angeles",

    original_application_version: "185",
    in_app: []
  },

  environment: "Production",
  status: 0,
  isCustomer: false,
  isPro: true,
  flagged: false,
  isBundleEnabled: true
};

// 返回给客户端
$done({ body: JSON.stringify(objc) });
