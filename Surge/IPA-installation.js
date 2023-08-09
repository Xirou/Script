/*
 * iOS16+ IPA installation script.
 * Author: @NobyDa
 */

const eva = $request;
const ipaUrl = eva.url.match(/\/jsbox/) ? "http://127.0.0.1:8080/download?path=%2Fapp.ipa" : "http://localhost/";
if (eva.url.match(/install/)) {
	$httpClient.head(ipaUrl, (err, resp, data) => {
		if (resp && resp.headers && JSON.stringify(resp.headers).match(/UTF-8''.+?\.ipa/) && resp.status == 200) {
			const plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>items</key>
	<array>
		<dict>
			<key>assets</key>
			<array>
				<dict>
					<key>kind</key>
					<string>software-package</string>
					<key>url</key>
					<string>https://nobyda/download${eva.url.match(/jsbox/)?"/jsbox":""}</string>
				</dict>
			</array>
			<key>metadata</key>
			<dict>
				<key>bundle-identifier</key>
				<string>${$persistentStore.read("IPA-install")}</string>
				<key>bundle-version</key>
				<string>1.0</string>
				<key>kind</key>
				<string>software</string>
				<key>title</key>
				<string>${decodeURIComponent(JSON.stringify(resp.headers).match(/UTF-8''(.+?)\.ipa/)[1])}</string>
			</dict>
		</dict>
	</array>
</dict>
</plist>`;
			$done({
				response: {
					status: 200,
					body: plist
				}
			});
		} else {
			$notification.post('APP安装失败', '', '无法读取IPA安装包');
			$done()
		}
	})
} else if (eva.method == "GET") {
	$httpClient.head(ipaUrl, (err, resp, data) => {
		if (resp && resp.headers && resp.status == 200) {
			const name = `正在安装: ${JSON.stringify(resp.headers).match(/UTF-8''(.+?)\.ipa/)[1]} ...`
			const size = `应用大小: ${(resp.headers['Content-Length'] / 1000 / 1000).toFixed(2)} MB`
			$notification.post(decodeURIComponent(name), size, '');
		} else {
			$notification.post('APP安装失败', '', `无法下载IPA安装包`);
		}
		$done({
			url: ipaUrl
		});
	})
} else {
	$done({
		url: ipaUrl
	});
}