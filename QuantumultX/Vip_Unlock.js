//Revenuecat Pro Time:5.19

hostname= api.revenuecat.com

# > Revenuecat Pro

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[a-zA-Z0-9_-]*$) url script-response-body https://raw.githubusercontent.com/langkhach270389/Quantumult-X-LK/master/Scripts/langkhach/revenuecat.js

# > Filebox Pro
^https:\/\/api\.revenuecat\.com\/v\d\/subscribers url script-response-body https://raw.githubusercontent.com/Xirou/Script/master/QuantumultX/FB.js

# > Scanner pro
^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/(\$RCAnonymousID\%)?(\w)+$ url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/scannerpro.js

^https?:\/\/api\.revenuecat\.com\/v\d\/receipts$ url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/scannerpro.js

# > Lake Pro
https?:\/\/revenuecat\.lakecoloring\.com\/v\d\/(receipts|subscribers) url script-echo-response https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/lakepro.js

# > Tutu Pro&Apollo Pro
^https?:\/\/api\.revenuecat\.com\/v\d\/(receipts|subscribers\/(\$RCAnonymousID%3A)?\w{32})$ url script-echo-response https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/tutujizhang.js

# > Noto Pro
//https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/noto.js

# > Grow Pro
^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/(\$RCAnonymousID\%)?(\w)+$ url script-echo-response https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/Grow.js
^https?:\/\/api\.revenuecat\.com\/v\d\/receipts$ url script-echo-response https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/Grow.js

# > Vsco Pro
^https:\/\/api\.revenuecat\.com\/v\d\/subscribers\/\d+$ url script-response-body https://raw.githubusercontent.com/githubdulong/Script/master/vsco.js
