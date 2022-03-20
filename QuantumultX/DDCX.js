//滴滴出行AD 2022/3/21 By：KYLE
hostname= as.xiaojukeji.com, pt-starimg.didistatic.com, security.xiaojukeji.com, guard.sec.xiaojukeji.com, conf.diditaxi.com.cn, api.udache.com, res.xiaojukeji.com, shop-gw.chengxinyouxuan.com, img-ys011.didistatic.com 


// > 01 安全提示横幅

//^https:\/\/as\.xiaojukeji\.com\/ep\/as url reject
^https:\/\/security\.xiaojukeji\.com\/sec\/risk-gateway url reject

^https:\/\/guard\.sec\.xiaojukeji\.com\/api\/guard\/psg\/v2\/getShieldStatus url reject

// > 02 底部打车&代价推荐
^https:\/\/conf\.diditaxi\.com\.cn\/one url reject

// > 03 福利专区-金融服务-公交-骑车-滴滴乐园
^https:\/\/conf\.diditaxi\.com\.cn\/nav\/widget url reject

// > 04 接送机-优惠商城
^https:\/\/api\.udache\.com\/gulfstream url reject

// > 05 主页领任务
^https:\/\/conf\.diditaxi\.com\.cn\/api\/(component|fusion|dynamicmodule|usercenter) url reject

^https:\/\/conf\.diditaxi\.com\.cn\/dynamic url reject

// > 06 主页 非主流式悬浮挂件
^https:\/\/res\.xiaojukeji\.com\/resapi\/activity\/mget url reject

// > 07 商城
^https:\/\/shop-gw\.chengxinyouxuan\.com\/(route|indexConfig|apolloConfig|getShopTuanInfos) url reject

// > 08 开屏广告
^https:\/\/img-ys011\.didistatic\.com\/static url reject

// > 09 骑行
^https:\/\/pt-starimg\.didistatic\.com\/static url reject
