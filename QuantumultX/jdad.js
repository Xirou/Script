const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

// 根据不同的 functionId 进行不同的处理
if (url.includes("functionId=deliverLayer") || url.includes("functionId=orderTrackBusiness")) {
  // 物流页面处理逻辑
  if (obj?.bannerInfo) {
    // 收货时寄快递享八折 享受条件苛刻 故移除
    delete obj.bannerInfo;
  }
  if (obj?.floors?.length > 0) {
    // 运费八折
    obj.floors = obj.floors.filter((i) => !["banner", "jdDeliveryBanner"]?.includes(i?.mId));
  }
} else if (url.includes("functionId=getTabHomeInfo")) {
  // 新品页面处理逻辑
  if (obj?.result?.iconInfo) {
    // 新品页 悬浮动图
    delete obj.result.iconInfo;
  }
  if (obj?.result?.roofTop) {
    // 新品页 下拉二楼
    delete obj.result.roofTop;
  }
} else if (url.includes("functionId=myOrderInfo")) {
  // 订单页面处理逻辑
  if (obj?.floors?.length > 0) {
    let newFloors = [];
    for (let floor of obj.floors) {
      if (["bannerFloor", "bpDynamicFloor", "plusFloor"]?.includes(floor?.mId)) {
        // bannerFloor满意度评分 bpDynamicFloor专属权益 plusFloor开通会员
        continue;
      } else {
        if (floor?.mId === "virtualServiceCenter") {
          // 服务中心
          if (floor?.data?.virtualServiceCenters?.length > 0) {
            let newItems = [];
            for (let item of floor.data.virtualServiceCenters) {
              if (item?.serviceList?.length > 0) {
                let newCards = [];
                for (let card of item.serviceList) {
                  if (card?.serviceTitle === "精选特惠") {
                    continue;
                  }
                  newCards.push(card);
                }
                item.serviceList = newCards;
              }
              newItems.push(item);
            }
            floor.data.virtualServiceCenters = newItems;
          }
        }
        if (floor?.mId === "customerServiceFloor") {
          // 客户服务
          if (floor?.data?.moreText) {
            // 点此获得更多服务
            delete floor.data.moreIcon;
            delete floor.data.moreIcon_dark;
            floor.data.moreText = " ";
          }
        }
        newFloors.push(floor);
      }
    }
    obj.floors = newFloors;
  }
} else if (url.includes("functionId=personinfoBusiness")) {
  // 个人页面处理逻辑
  if (obj?.floors?.length > 0) {
    let newFloors = [];
    for (let floor of obj.floors) {
      const items = [
        "bigSaleFloor", // 双十一
        "buyOften", // 常买常逛
        "newAttentionCard", // 关注的频道
        "newBigSaleFloor", // 双十一
        "newStyleAttentionCard", // 新版关注的频道
        "newsFloor", // 京东快讯
        "noticeFloor", // 顶部横幅
        "recommendfloor" // 我的推荐
      ];
      if (items?.includes(floor?.mId)) {
        continue;
      } else {
        if (floor?.mId === "basefloorinfo") {
          // 弹窗相关字段移除
          if (floor?.data?.commonPopup) {
            delete floor.data.commonPopup;
          }
          if (floor?.data?.commonPopup_dynamic) {
            delete floor.data.commonPopup_dynamic;
          }
          if (floor?.data?.commonTips?.length > 0) {
            floor.data.commonTips = [];
          }
          if (floor?.data?.commonWindows?.length > 0) {
            floor.data.commonWindows = [];
          }
          if (floor?.data?.floatLayer) {
            delete floor.data.floatLayer;
          }
        } else if (floor?.mId === "iconToolFloor") {
          // 底部工具栏处理
          if (floor?.data?.nodes?.length > 0) {
            const sortLists = [
              "applezhushou", // apple助手 1-1-1
              "lingjindouxin", // 签到领豆 1-1-2
              "dongdongnongchangxin", // 京东农场 1-1-3
              "chongwangwang", // 宠汪汪 1-1-4
              "kehufuwu", // 客户服务 1-2-1
              "xianzhiguanjia", // 闲置换钱 1-2-2
              "wenyisheng", // 问医生 1-2-3
              "jijianfuwu", // 寄件服务 1-2-5
              "zhuanzuanhongbao", // 天天赚红包 2-2-1
              "huanletaojin" // 欢乐淘金 2-2-2
            ];
            let node = floor.data.nodes;
            if (node?.[0]?.length > 0) {
              // 第一组十个
              node[0] = node[0]
                .filter((i) => sortLists?.includes(i?.functionId))
                .sort((a, b) => sortLists.indexOf(a?.functionId) - sortLists.indexOf(b?.functionId));
            }
            if (node?.[1]?.length > 0) {
              // 第二组四个
              node[1] = node[1]
                .filter((i) => sortLists?.includes(i?.functionId))
                .sort((a, b) => sortLists.indexOf(a?.functionId) - sortLists.indexOf(b?.functionId));
            }
          }
        } else if (floor?.mId === "orderIdFloor") {
          if (floor?.data?.commentRemindInfo?.infos?.length > 0) {
            // 发布评价的提醒
            floor.data.commentRemindInfo.infos = [];
          }
        } else if (floor?.mId === "userinfo") {
          // 个人页相关字段移除
          if (floor?.data?.newPlusBlackCard) {
            delete floor.data.newPlusBlackCard;
          }
        }
        newFloors.push(floor);
      }
    }
    obj.floors = newFloors;
  }
} else if (url.includes("functionId=start")) {
  // 开屏广告处理逻辑
  if (obj?.images?.length > 0) {
    obj.images = [];
  }
  if (obj?.showTimesDaily) {
    obj.showTimesDaily = 0;
  }
} else if (url.includes("functionId=welcomeHome")) {
  // 首页配置处理逻辑
  if (obj?.floorList?.length > 0) {
    const delItems = [
      "bottomXview", // 底部悬浮通栏推广
      "float", // 悬浮推广小圆图
      "photoCeiling", // 顶部通栏动图推广
      "ruleFloat", // 资质与规则
      "searchIcon", // 右上角消费券
      "topRotate", // 左上角logo
      "tabBarAtmosphere" // 底部悬浮通栏推广
    ];
    // 首页 图层列表
    obj.floorList = obj.floorList.filter((i) => !delItems?.includes(i?.type));
  }
  // 首页 下拉二楼
  if (obj?.webViewFloorList?.length > 0) {
    obj.webViewFloorList = [];
  }
}

// 添加新的广告模块并移除 jumpInfo
let newAdModule = {
  "mId": "newAdFloor", // 新模块的唯一标识
  "data": {
    "spl": "grey_strip_CH",
    "bgc": "#ffffff",
    "expoMta": {
      "eventId": "MyJD_NewCardExpo",
      "eventParam": "0.01_4",
      "pageLevel": "",
      "pageId": "MyJD_Main"
    },
    "functionId": "newCardFloor",
    "clickMta": {
      "eventId": "MyJD_NewCard_Open",
      "eventParam": "0.01_4",
      "pageLevel": "",
      "pageId": "MyJD_Main"
    },
    "subtitle": {
      "color": "#81838e",
      "value": "100元优惠券包，多券可叠！"
    },
    "showType": 0,
    "buyType": 4,
    "buttonInfo": {
      "image": "https://img30.360buyimg.com/mobilecms/jfs/t1/144102/16/8322/1883/5f602caaE9874dd8e/0433ccd9391c90c3.png",
      "needLogin": 1,
      "value": ["￥", "0.01", "元 立即开通"]
    },
    "title": {
      "color": "#232326",
      "value": "手慢无！999+用户正在抢购！"
    },
    "logoUrl": "https://img30.360buyimg.com/jdmonitor/jfs/t1/75792/27/29030/25734/66de6917F25267d92/fef72f1d4027963c.png",
    "bkgUrl": "https://img30.360buyimg.com/jdmonitor/jfs/t1/178651/20/3112/10343/6097744aE17dc1c37/82f9985d4c028dc0.png",
    "jumpInfo": { /* 需要移除的内容 */ }
  }
};

// 删除 jumpInfo 属性
delete newAdModule.data.jumpInfo;

// 将新的广告模块添加到 floors 数组中
if (obj.floors && Array.isArray(obj.floors)) {
  obj.floors.push(newAdModule);
} else {
  obj.floors = [newAdModule];
}

// 返回修改后的响应
$done({ body: JSON.stringify(obj) });