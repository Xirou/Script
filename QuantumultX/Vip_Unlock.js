hostname = api.interpreter.caiyunai.com, ap*.intsig.net, api1.dobenge.cn, account.wps.cn, vsco.co, license.pdfexpert.com, musicpay.kuwo.cn, vip1.kuwo.cn, mb3admin.com, jabi.coding.net, quanzi.jizhangapp.com, iosoi.cn, 106.54.2.168, api.yonekura.cn, api.xiuxiu.meitu.com, api.meiyan.com, panel.getdailyart.com, biz.caiyunapp.com, www.40sishi.com, outcut.szsszykj.com, picturebook.ipalfish.com, license.pdfexpert.com, api2.fitplanapp.com, api.shayujizhang.com, r.51wnl-cq.com, d.smkj33.top, api.dushu.io, getway.radio.cn, api.reface.video, www.helloshiyu.com, api.bspapp.com, avoscloud.com, bbs.maibaapp.com, duoting.tatatimes.com, cm.szsszykj.com, avoscloud.com, api.flexibits.com, d.syshhc.top, 115.28.168.103, dbapi.ganbuguo.com, mb3admin.com, api.591master.com, www.mindmeister.com, subs.platforms.team, sports.lifesense.com, api.pushover.net, subs.platforms.team, api.hulusaas.com, snailsleep.net,music.snailsleep.net,community.snailsleep.net, api.jiaonizuocai.com, nmeditation.snailsleep.net, api.m.jd.com, claritywallpaper.com, subscription-service.neuralprisma.com, mappsv5.caixin.com, diary.7english.cn, buy.itunes.apple.com, api.gotokeep.com, *.ddly666.top, hkj178.com, a.jxjt888.top, lysl2020.com, www.i3zh.com, ios.tipsoon.com

//彩云小译
^https:\/\/api\.interpreter\.caiyunai\.com\/v1\/user url script-response-body https://raw.githubusercontent.com/Xirou/Script/master/QuantumultX/File/cyxy.js

# 扫描全能王 pro
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

# 水印精灵 vip (By Alex0510)
^https:\/\/api1\.dobenge\.cn\/api\/user\/getuserinfo url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/syjl.js

# WPS (By eHpo)
^https://account.wps.*/api/users/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

# VSCO滤镜VIP
^https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/user-subscriptions\/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js

#Kuwo
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=2
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/kuwo.js

#Emby
^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-echo-response https://subweb.oss-cn-hongkong.aliyuncs.com/Script/embycrack.js

#简讯
^https:\/\/ios\.tipsoon\.com\/\?a=getUserInfo url script-response-body https://raw.githubusercontent.com/Xirou/Script/master/QuantumultX/File/jianxun.js

# > 060 Scanner Pro 解锁会员权限 一次性解锁勿卸载（20201219）
https://license.pdfexpert.com/api/2.0/scanner/subscription/refresh url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/sp.js

# > 059 扎比科技资源箱 微信小程序crack 弹框显示最新三天download地址（20201214）
https://jabi.coding.net/p/xcx/d/xcx/git/raw/master/jabikj.json url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/jabi.js

# > 058 圈子记账 你的记账小工具（20201214）
https://quanzi.jizhangapp.com/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/qzjz.js

# > 057 AppleAndroid 微信小程序破解 弹框显示内容（20201214）
https://iosoi.cn/wp-json/wp/v2/posts/\d+ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/aa.js
https://iosoi.cn/wp-content/plugins/xingshu.php url response-body adid":"[^"]*" response-body adid":""

# > 056 emmo 解锁会员（20201209）
^http://106.54.2.168/emmoDiary/user/getUser url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/emmo.js

# > 055 用电助手 炫酷充电更好了解电池（20201206）
https://api.yonekura.cn/3.6.8/uicommon/getuser url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/cdzs.js

# > 054 美图秀秀 你笑的真好看（20201124）
https://api.xiuxiu.meitu.com/v1/user/show.json url response-body vip_type":0 response-body vip_type":1

# > 053 美颜相机 解锁内购（20201123）⭐️Need Old Version：V9.6.20 ID：839250957
https://api.meiyan.com/iap/verify.json url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/myxj.js

# > 052 每日艺术 解锁vip权限（20201123）
https://panel.getdailyart.com/APIMobile/users/single url response-body account_type":"0 response-body account_type":"2

# > 051 彩云天气 解锁会员权限（20201121）
https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/caiyun.js

# > 050 豌豆清单 为你的日程好好规划一下(20201112)
^https:\/\/www\.40sishi\.com\/list\/user\/profile$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/wdqd.js

# > 049 Quicut 体验大片视频编辑的感觉 (20201112)
http://outcut.szsszykj.com/api/OverseasPay/GetVip url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/qc.js

# > 048 伴鱼绘本 孩子不可或缺的英语绘本读物(20201109) 
https://picturebook.ipalfish.com/pfapi(/profile/picturebook/get|/base/growthsystem/user/vip/equity/get) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/byhb.js

# > 047 Document 解锁PDF会员编辑功能 一次性解锁（20201108）
https:\/\/license\.pdfexpert\.com\/api\/.+\/subscription\/(refresh$|check$) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/documents.js

# > 046 Fitplan 要不要做做Vip专属有氧运动 登录使用（20201107）
https://api2.fitplanapp.com/fitplan-server/v2/user/profile url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/fitplan.js

# > 045 鲨鱼记账 需要登录 解锁会员记账权限（20201104）
https://api.shayujizhang.com/account/detail/info/ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/syjz.js

# > 044 万年历 解锁会员权限 出门看下黄历今天是个好日子（20201028）
https://r.51wnl-cq.com/Api/User/GetExtInfo url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/wnl.js

# > 043 森茂雅苑 微信小程序解锁隐藏内容 去除广告直接查看内容（20201027）
https://d.smkj33.top/wp-json/wp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js

# > 042 樊登读书 解锁会员的课程音频 畅游知识的海洋（20201026）
https://api.dushu.io/Album/Info url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/fdds.js

# > 041 云听 解锁会员专属音频 舒舒服服躺着听（20201020）
http://getway.radio.cn/app* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/yt.js

# > 040 Reface 解锁会员权限 随心移花接木（20201013）
https://api.reface.video/api/reface/v1/iosSubscription url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/reface.js

# > 039 睡眠助手 解锁VIP独享的白噪音乐（20201010）
https://www.helloshiyu.com/sleep/user/profile url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/smzs.js

# > 038 纸塘壁纸 微信小程序 免广告直接下载原图壁纸（20201006）Attention：登录使用⭐️
https://api.bspapp.com/client url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/ztbz.js

# > 037 汉字的故事 解锁会员字体 探寻古汉字之美（20201002）
https://avoscloud.com/1.1/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/hzdgs.js

# > 036 小妖精美化 解锁会员 美化桌面widget（20201002）
https://bbs.maibaapp.com/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xyjmh.js 

# > 035 色采 Unlock VIP (20200929) Attention：恢复购买
;The content is consistent with rcam, no longer repeated.

# > 034 英语阅读 解锁永久会员 （20200926）Attention：登录使用 ⭐️
^http:\/\/duoting\.tatatimes\.com\/tataeraapi\/api\.s\?h=QueryVipUser url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/englishread.js 

# > 033 趣制作 解锁会员模板视频（20200925）Attention：登录使用
https://cm.szsszykj.com/interface/GetVip.php url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/qzz.js

# > 032 Fantastical 解锁SVIP会员订阅 （20200924）⭐️
^https:\/\/api\.flexibits\.com\/(v1\/auth\/device|v1\/account\/details) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/fantastical.js

# > 031 西窗烛 解锁终身会员 文艺范的福音（20200924）Attention：登录使用
https://avoscloud.com/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcz.js

# > 030 老胡工具箱 微信小程序解除隐藏内容 （20200916）
https://d.syshhc.top/wp-json/wp/v2/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js

# > 029 一言 解锁终身会员 （20200916）Attention:登录使用
http://115.28.168.103:8080/yiyan/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/yiyan.js

# > 028 done 解锁会员功能 PRO （20200914）Attention：登录使用
http://dbapi.ganbuguo.com/user/userinfo url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/done.js

# > 027 emby 流媒体解锁订阅（20200913）Attention: 配合普拉斯影业提供的账号可进行观影：域名: https://movie.xeton.dev 端口: 443 账号：普拉斯影业 密码：plusisbest
^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-echo-response https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/emby.js

# > 026 VCUS Unlock VIP (20200912)
;The content is consistent with rcam, no longer repeated.

# > 025 手机硬件管家 高级VIP (20200912)
http:\/\/api\.591master\.com\:8081\/(1.0|3.6.8)\/ui(forum|common)\/(downloadwallpaper|getuser) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/phoneyjgj.js

# > 024 MeisterTask Premium(20200910)
https://www.mindmeister.com/api/v2/licenses/meistertask url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/meistertask.js

# > 023 实时天气 解锁VIP功能（20200909）-----失效已加密
;^https:\/\/subs\.platforms\.team\/apple\/verifyTransaction$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/sstq.js

# > 022 乐心健康 步数修改 （20200908）Attention：APP里面数据共享，打开微信和支付宝，需要修改步数的时候，打开乐心健康
^https:\/\/sports\.lifesense\.com\/sport_service\/sport\/sport\/uploadMobileStepV2 url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/lxhealth.js

# > 021 pushover 解锁会员（20200905）
^https://api.pushover.net/1/messages.json url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/pushover.js

# > 020 productive Unblock（20200905）
^https:\/\/subs\.platforms\.team\/.+\/apple\/verify$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/productive.js

# > 019 葫芦时刻 解锁SVIP（20200905）
^https:\/\/api\.hulusaas\.com\/api\/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/hulu.js

# > 018 蜗牛睡眠 解锁会员音乐（20200906）
^https:\/\/(snailsleep\.net\/|(music|community)\.snailsleep\.net\/)(snail\/v1\/profile\/get|snail-music\/music\/(sleeping|meditation)\/single\/list) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/wnsm.js

# > 017 菜谱大全 解锁VIP功能（20200906）
https?:\/\/api\.jiaonizuocai\.com url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/cpdq.js

# > 016 大象冥想 解锁会员音乐（20200904）
^https?:\/\/nmeditation\.snailsleep\.net\/meditation-(audio|user|order|audio)\/(api|user)\/(audio\/master\/detail|get\/info|order/user\/vip\/info|ad\/get) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/dxmx.js

# > 015 京东APP商品显示历史价格（20200904）
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/jd_price.js

# > 014 滴答清单 解锁会员功能（20200903）仅适用旧版 V5.2.51 ID:832943581
^https:\/\/(ticktick|dida365)\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/ddqd.js

# > 013 克拉壁纸 解锁付费壁纸（20200903）仅适用旧版 V4.7.3 ID:833188498 ⭐️
^https:\/\/claritywallpaper\.com\/clarity\/api\/(userInfo|special\/queryByCatalogAll) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/clarity.js

# > 012 剪影 解锁订阅（20200902）
;The content is consistent with rcam, no longer repeated.    

# > 011 lensa 人像修图解锁（20200902）
^https?:\/\/subscription-service\.neuralprisma\.com\/subscription_get url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/lensa.js

# > 010 财新 解锁付费文章（20200901）
https://mappsv5.caixin.com/articlev5/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/caixin.js

# > 009 moo 日记永久会员 (20200831) ⭐️
https://diary.7english.cn:2433//api/user/userInfo url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/moo.js

# > 008 Geist  Picsew 二者解锁会员功能（20200831）
;The content is consistent with rcam, no longer repeated.