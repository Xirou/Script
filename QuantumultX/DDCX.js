//滴滴出行AD 2022/3/21 By：KYLE
hostname=guard.sec.xiaojukeji.com, conf.diditaxi.com.cn, api.udache.com, res.xiaojukeji.com, shop-gw.chengxinyouxuan.com


// > 01 安全提示横幅
^https:\/\/guard\.sec\.xiaojukeji\.com\/api\/guard\/psg\/v2\/getShieldStatus url reject

// > 02 底部打车&代价推荐
^https:\/\/conf\.diditaxi\.com\.cn\/one\/page url reject

// > 03 福利专区-金融服务-公交-骑车-滴滴乐园
^https:\/\/conf\.diditaxi\.com\.cn\/nav\/widget url reject

// > 04 接送机-优惠商城
^https:\/\/api\.udache\.com\/gulfstream\/pre-sale\/v1\/other\/pGetSceneList url reject

// > 05 主页领任务
^https:\/\/conf\.diditaxi\.com\.cn\/dynamic\/conf url reject

// > 06 主页 非主流式悬浮挂件
^https:\/\/res\.xiaojukeji\.com\/resapi\/activity\/mget url reject

// > 07 商城
^https:\/\/shop-gw\.chengxinyouxuan\.com\/(route|indexConfig|apolloConfig|getShopTuanInfos) url reject


