/****************************** 
脚本功能：GLaDOS / Railgun 自动签到 + 积分兑换 (Loon版)
更新时间：2026-05-27
使用说明：访问 GLaDOS 任意域名的 /console/account 页面抓包保存 Cookie，
         定时任务自动对已保存 Cookie 的域名执行签到。
         支持 glados.network、railgun.info、glados.vip
*******************************/

// ================== Loon 配置 ==================
// [Script]
// GLaDOS签到 = type=http-request,pattern=^https:\/\/(glados\.network|railgun\.info|glados\.vip)\/console\/account$,requires-body=0,max-size=0,script-path=https://yourscript.js,script-update-interval=0

// [Task]
// 10 7 * * * https://yourscript.js, tag=GLaDOS签到, enabled=true

// [MITM]
// hostname = glados.network, railgun.info, glados.vip
// ===============================================

const COOKIE_KEY_PREFIX = "GLaDOS_Cookie";
const DOMAINS_LIST_KEY = "GLaDOS_Domains";
const DOMAINS = ["glados.network", "railgun.info", "glados.vip"];
const EXCHANGE_PLAN = "plan500";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

const isGetHeader = typeof $request !== "undefined";

function safeJsonParse(str) {
  try {
    return JSON.parse(str);
  } catch (_) {
    return null;
  }
}

function cookieKeyFor(domain) {
  return `${COOKIE_KEY_PREFIX}:${domain}`;
}

function getSavedDomains() {
  const raw = $persistentStore.read(DOMAINS_LIST_KEY);
  if (!raw) return [];
  const list = safeJsonParse(raw) || [];
  return Array.isArray(list) ? list.filter(Boolean) : [];
}

function addDomain(domain) {
  let list = getSavedDomains();
  if (!list.includes(domain)) {
    list.push(domain);
    $persistentStore.write(JSON.stringify(list), DOMAINS_LIST_KEY);
    console.log(`[GLaDOS] Updated domains list: ${list.join(", ")}`);
  }
}

function getStoredCookie(domain) {
  return $persistentStore.read(cookieKeyFor(domain)) || "";
}

function saveCookie(domain, cookie) {
  const old = getStoredCookie(domain);
  if (old !== cookie && cookie) {
    $persistentStore.write(cookie, cookieKeyFor(domain));
    addDomain(domain);
    console.log(`[GLaDOS] Cookie saved for ${domain}`);
    return true;
  }
  return false;
}

function notify(title, subtitle, body) {
  $notification.post(title, subtitle, body);
}

function getHostFromRequest() {
  return $request.headers.Host || $request.headers.host || "";
}

function request(url, method, cookie, domain, body) {
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Origin: `https://${domain}`,
    Referer: `https://${domain}/console/current`,
    "User-Agent": UA,
    Cookie: cookie,
  };

  return new Promise((resolve) => {
    $httpClient[method.toLowerCase()]({ url, headers, body: body ? JSON.stringify(body) : undefined }, (err, resp, data) => {
      if (err) {
        resolve({ statusCode: 0, data: null, raw: "", error: err });
        return;
      }
      const statusCode = resp.status;
      const json = safeJsonParse(data);
      resolve({ statusCode, data: json, raw: data });
    });
  });
}

async function checkin(cookie, domain) {
  const url = `https://${domain}/api/user/checkin`;
  const body = { token: domain };
  const { statusCode, data, raw, error } = await request(url, "POST", cookie, domain, body);

  if (error || !data) return { status: "签到失败", code: -2, message: error || raw, points: "0" };

  const code = data.code ?? -2;
  const message = data.message || "";
  const points = String(data.points ?? 0);

  if (code === 0) {
    return { status: "签到成功", code: 0, message, points };
  } else if (code === 1) {
    return { status: "重复签到", code: 1, message, points: "0" };
  } else {
    return { status: "签到失败", code, message, points: "0" };
  }
}

async function getStatus(cookie, domain) {
  const url = `https://${domain}/api/user/status`;
  const { data } = await request(url, "GET", cookie, domain);
  const leftDays = data?.data?.leftDays;
  return { leftDays: leftDays !== undefined ? `${parseInt(leftDays)} 天` : "N/A" };
}

async function getPoints(cookie, domain) {
  const url = `https://${domain}/api/user/points`;
  const { data } = await request(url, "GET", cookie, domain);
  const points = data?.points;
  const pointsNum = points !== undefined ? parseInt(points) : 0;
  return { points: `${pointsNum}`, pointsNum };
}

async function exchange(cookie, domain, plan) {
  const url = `https://${domain}/api/user/exchange`;
  const body = { planType: plan };
  const { data } = await request(url, "POST", cookie, domain, body);

  return (data?.code === 0) ? `兑换成功(${plan})` : `兑换失败: ${data?.message || "未知错误"}`;
}

async function checkinForDomain(cookie, domain) {
  console.log(`[GLaDOS] ── Domain: ${domain} ──`);

  const statusBefore = await getStatus(cookie, domain);
  const checkinResult = await checkin(cookie, domain);
  const pointsResult = await getPoints(cookie, domain);

  let exchangeResult = "跳过(积分不足)";
  if (pointsResult.pointsNum >= 500) {
    exchangeResult = await exchange(cookie, domain, EXCHANGE_PLAN);
  }

  const statusAfter = await getStatus(cookie, domain);

  return {
    domain,
    status: checkinResult.status,
    code: checkinResult.code,
    earnedPoints: checkinResult.points,
    totalPoints: pointsResult.points,
    daysBefore: statusBefore.leftDays,
    daysAfter: statusAfter.leftDays,
    exchange: exchangeResult,
  };
}

// ===================== 主逻辑 =====================
if (isGetHeader) {
  // 抓取 Cookie
  const cookie = $request.headers.Cookie || $request.headers.cookie || "";
  const host = getHostFromRequest();

  if (cookie && host) {
    const saved = saveCookie(host, cookie);
    if (saved) {
      notify("GLaDOS", `Cookie 已更新 [${host}]`, "后续将用于自动签到");
    }
  }
  $done({});
} else {
  // 执行签到任务
  const delay = Math.floor(Math.random() * 11);
  console.log(`[GLaDOS] 随机延迟 ${delay}s`);

  setTimeout(async () => {
    const savedDomains = getSavedDomains();

    if (savedDomains.length === 0) {
      notify("GLaDOS 签到", "无 Cookie", "请先访问 /console/account 抓包保存");
      return $done();
    }

    console.log(`[GLaDOS] 🚀 开始签到 ${savedDomains.join(", ")}`);
    const allResults = [];

    for (const domain of savedDomains) {
      const cookie = getStoredCookie(domain);
      if (!cookie) continue;
      allResults.push(await checkinForDomain(cookie, domain));
    }

    const ok = allResults.filter(r => r.code === 0).length;
    const dup = allResults.filter(r => r.code === 1).length;
    const fail = allResults.filter(r => r.code !== 0 && r.code !== 1).length;

    const lines = allResults.map(r => {
      const icon = r.code === 0 ? "✅" : r.code === 1 ? "🔄" : "❌";
      const pts = r.earnedPoints !== "0" ? ` +${r.earnedPoints}` : "";
      return `${icon} ${r.domain} | ${r.status}${pts} | ${r.daysBefore}→${r.daysAfter} | ${r.totalPoints}积分`;
    });

    const title = `GLaDOS | 成${ok} 重${dup} 败${fail}`;
    const content = lines.join("\n");

    notify(title, "", content);
    $done();
  }, delay * 1000);
}