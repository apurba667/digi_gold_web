'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "9a0e206b88c9618cb305d3dc91674638",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "072c8b49e4a022244d02ad32f4c76456",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7fc37c2e3adfce4503444dab4e02e799",
".git/logs/refs/heads/main": "630a68b85db7ae91e52e59ef23df9d9a",
".git/logs/refs/remotes/origin/main": "e43a20ccb655e6ea4a0d99917f5a7990",
".git/objects/00/1d54719ece7c6a65e933d173256d9094608d04": "38ac4aca8e78a4c462cd2d5574989eed",
".git/objects/00/822fa5f0881d48fa6bcc9c5f90cd1dd8d960c0": "dbf4b9be1fff17a9d9ace1231429b21c",
".git/objects/02/1f4749f3ffcd4b1a08bec754157efe5303f13c": "f24c6b5df46f705ea6e5de8eeef705b6",
".git/objects/02/a2d0618637680025cc139d7b6a3c93f61fe3a7": "7a733a88336e7f0374232888fc8f1ee7",
".git/objects/03/9bb7d5e3c7e891dbca2d23bdfcf3bc3c616295": "ad146eeb4a1ba8e1d51c66cefe0d8246",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/71ee86ed2844c1939d3573f4206f300fe9300f": "f917871d91f36a627cd18b5bcd0b873c",
".git/objects/08/69d257e7d3a461b12d8c57312960b7f0c4c69d": "50ab626f087cd700811588900b3fa0ab",
".git/objects/08/eab934403e931289428816aa1825948f2d0797": "7e9238c3cf082db28a80fbe42c928734",
".git/objects/0a/5e23afeaf9798e5eb7c51555772ccea35d6b4a": "8a616a2c96e39dfafb5754de7d79c04b",
".git/objects/1a/26b9a5bce622780e5f99b6a6eccd5d8f84134e": "bba1cf19bc4cc7ceb45f5159974a97ab",
".git/objects/1c/727e59f010db212545361d581b3892f8933f23": "b962c8a9b16b947cdac1da3a4d123863",
".git/objects/1d/51c2365ccb0c6b1ce4c651a8c069f319ebc08a": "95da14ad3e7f08458b788d4b9962f5ea",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/8d24a7cd91b49ab67380f0356a7f03b6bd2e08": "2201792c26b1c4493c1223e23e63aa34",
".git/objects/25/7c9bca4c32b718b33cd1cafc6a3a63e5d5ab45": "f6cffdd3456e98e6a817af8dc181a5be",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/6759688ab4b57133e0f2636f9476fc47283342": "a01a6462485bda00db9c309d07104fee",
".git/objects/35/bb72042e6ba1efbad02cc9a2e50e7eebac4ac9": "7e048418bb6cad81d9c9a2063423c61a",
".git/objects/37/69d70be397781a10be0d92cdaa5f2dfea7c176": "adbc6dd840bbbaf62920a1b3e1f2fff0",
".git/objects/43/43a71d642a647314215276ec1e332f991b3ecc": "f63e2c941e19def7abd1fcb17a44ae53",
".git/objects/45/1cca70aad95b1548bca3baccb1cf4023387528": "7adb5738b3f95505b76cf7c7e0abd923",
".git/objects/46/296bc8a86bb104ff2eb6dbad7157f1d2a0fd14": "268686c200c5dab670f14271af54509d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/7c14dd04dc50e69c14e6b9901be8a1a457712d": "7dc69276aadc2268962abb0bf69e6a6d",
".git/objects/4d/6c1f2bb38757c9aa92fb9ffb09e501b1b37af1": "d43fd00a1c3342f3ba124cd7184fe53d",
".git/objects/4e/41e236963c409ca0b5dfaea0f610a9f5290140": "343500058eb9deb8c954cd4087bc44d3",
".git/objects/4e/94fb6965c03a49322540b9119057e3449401ee": "fac83081008ec24cb7ea18bc53cab683",
".git/objects/4f/db75daf1f1bd4a44e6f25e27ce16db69c60c68": "f5b24d597fddba0dfb8d0a911ddc482d",
".git/objects/50/83bf017037d601723b935148e85767532db6cc": "26d869c6555bd4accc2f3be33f97a277",
".git/objects/51/5f5a5ac6e818683aa8c9fd3168c7ee8c34fdf7": "3a79ff642cc3764483c01124b8eee2f5",
".git/objects/52/9e868292bfb5da2ee8a9f331350cd677e4dd8e": "04ac6283fceeec184be0d28afd98a9a1",
".git/objects/56/c0cbb7f0aab562ee896edfce27568e4ffa5958": "37e81c505fd370c9e3f270046d07a88a",
".git/objects/58/d470bc4f81497340ceee52841ec309a1698e47": "6e848fd0be68f1173620cce41f4f11bf",
".git/objects/59/26cefdbb67acdbb05d9becfa476a4042d7a825": "abff66447f990eab293fbb631cdc6546",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/60/4c914ec1af46d301f3eac558f6f9a2bb47715c": "2016752c544723d9ad2c8715013c60c1",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/68/29bb53e10a2d3427e764ad47182ecef2b32aac": "886cb20e54932d2e1dc768b01b0827be",
".git/objects/69/cffec0c2310ff6843875c965c9611da497095a": "fc7570366295ed07b507ba56b9698bc4",
".git/objects/6b/d6eee46c4ebf25cae05cf53e38479dd4cbe677": "72a6aa34287444283aa9d8bf80969e5f",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/71/5d802ce42662158558728717dcb23ed9bd85eb": "932f9f7951502ea8d59d8011229139ae",
".git/objects/72/c1878300617e220e539a130ede159474c53299": "29b68e120fb510ff41f07483a000742e",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/92d9e549ce2d6a28ddc849b4a5aee961013bae": "610f0e711b54de9a560a3fe09c451db3",
".git/objects/75/092f256bcf293464e0aa571338482e15ab36ad": "5e103fa78c9df14caf1293c33296c077",
".git/objects/76/41f26fc63b0a66ac8655ea045e5707db3ef1c9": "e453ce89d3cad3154835717b966c6924",
".git/objects/7c/1550caea686f77b70b31a6205642d9531b904b": "c697bc23a5cf2d6a7a86f94d76cd4d0c",
".git/objects/80/befa6c9a59c84b1f68fc67662e1e5a73e67ed6": "3b60a319df2bf623ebc3aa870532e47a",
".git/objects/84/53293a940e0bc7423f7a8cd0028cded90cf437": "fada7b2eedb2f639d3d55fd289ca8c0b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/f4ed6708b42e2028ec855ef30aa9c7aca233b8": "e4bba90d59460685c7d86a80af44633f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1ed823344c2c0e11b6a4b9d160e837fcaf212f": "d71a0b91d57a6c8c09571f0455decfd2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/3e776d82b79f2297862fc5ca19979e98cb4bbd": "5b6b56b4da5b375929af15abcd949c7f",
".git/objects/8f/7162ffa7c5ae35dfbe9f0d24c983f6a82e07bb": "23e48a1eef2fd7b57a8569cc9d5d8525",
".git/objects/90/fb5a68ef39972a2758f47eca8a17c7b2b0b1a0": "6e93c54f0f7cb70948afaca440f88ac4",
".git/objects/92/d2f5b97d873da32bd4f4d2a1cb201f9f94c0c6": "26ff0a758e731f848783d0334662750b",
".git/objects/92/eae14fec476ab89203ef433e93a922a247def5": "01e76345d2f688894854da7c4609fc5a",
".git/objects/95/f0de3d6956ece0c7a6cb1cb59126e4d72ad950": "0992c4ebaf3fdb26e2217f4c31bcf1cf",
".git/objects/96/f2c4fcfd2dace9691e9e1a212e6571f7bebe9c": "f54faf813adec570220c83765f25c0f7",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/3f72ad826959ce166758115539874266956f69": "4e4c4142f4329de6c20b97917c08ac72",
".git/objects/9f/a8c837bb68891d93d9f51513ece4ceb018b0a2": "f84e3facfcfca6ce83d200be8e12b905",
".git/objects/a1/c6e26aac702c650ebe02ac67dfcdee03a48a64": "f2e4bc3010ba680c30e10f2d97ebb2b9",
".git/objects/a7/0f3cca1173513bb0f276e578b4f04c6a822739": "98ba71ac54c41c54cee08c96d7ae281a",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/3383f7f328537954c3220c8744d30cee4e897a": "8a646584426915e6c423c3d93ad9ae5d",
".git/objects/aa/80f9dd92e6c7f3669dd8405ae7c6769e74aea3": "62ce793850c67e2b9a47604115e00b2a",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b4/31e062bd8d6ec54a2d935879aa53d3bc8f9d4b": "9509e8932679ff2b872aca651d8953b3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/9e4da5c67b1dc2d9269114a1c98f575de8e466": "c357bd9a30c15d834788a0e37de5e158",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/97bdb1002bb20e287e3b671c82a97e797931b5": "a1cb863ac4d15236899cfb38933b1445",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/2b1f28c6e104180e884d3c38e1dc2998b7c9eb": "baa53670ffc3bbf1b8fb7e1286ca6fae",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/bedcab140eb64f40e2ec7576540d6f2035cd50": "05099223d6f84fe06ed013665dde0580",
".git/objects/c5/03ec28caaed184a00e65e4d515090f50bb9f35": "7bad54edbbfb47735b27cb27818a532d",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ca/f0e639f216fcdcc0c74827ac7f2edc5ddc84cc": "ad5e25ae6ef90491dc219333de423af0",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/7116fb5f1c196d86d1f686d4f187991a112c4d": "9c7799f646a215976b0ab34d29791542",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/a66708df196b691db9386d4928dd9361fac1ee": "d5fe19c0075b5d688aa15635e1cadaca",
".git/objects/dd/b6d88c2cc7236aded14d9d1f813eaa25244e74": "fc4d7e495396315acdbd74e91b11f82b",
".git/objects/e0/b19fd82d372b634215e61b18e3c1106aa77588": "acddd435a1abad021fd0cbbeaa19565a",
".git/objects/e2/3351d35568d6549b0e7d4a432daf9087fc93fe": "4b94804585e7bedb6536cdb0a15e3629",
".git/objects/e3/42870c586ffa12cdf5df772135126f99d96528": "f3358d711237c7175f743f8ad28bce69",
".git/objects/e6/3bf3df046a737c0ed783be4c5337ed0129ce2e": "f451ad9f30344fa829aa0041e42b29ad",
".git/objects/e8/a2eb9bc1fe1779d13114604df080ee5cad461e": "be7b1dbba20b69b617bf4bb198c3d21d",
".git/objects/e8/cee65922dd7905d2f3e19e867f5186fb8ce072": "e3506ba3a49891e8e1da7cc403995f9c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/561705714e38ed85216f1427651a02bc5fb6fc": "92a74dd259cdd83b5e2668a8bfae83be",
".git/objects/f4/e54e22a00cbba67f001a35942fab417ec6eb21": "c8e89c46eb0fb7f5ff5708a293926cce",
".git/objects/f4/ecc4ebdc3af71ee3501d86921a56c27ec5eb61": "87e54e9caf6358001ba66faaea23936b",
".git/objects/f5/550d1941af92034bb705934a8335135896ec0e": "6ea85d1cd84dd60199f05b74df456b23",
".git/objects/fe/69baffb1aac403e801b0326fba0e28ad9ff8ac": "b7df48bf4c0973b4cd8d481df31851d5",
".git/refs/heads/main": "98353586bb8ff3a286fc40deb4fef40a",
".git/refs/remotes/origin/main": "98353586bb8ff3a286fc40deb4fef40a",
"assets/AssetManifest.bin": "6851faf607dbe0beacd451c84984d490",
"assets/AssetManifest.bin.json": "80bf22de52feb0b6036b44a92c0343f0",
"assets/AssetManifest.json": "0aa0cb3af8b272db674ad0cadac36911",
"assets/assets/images/67908d02731aa811390f51dd_Surprising%2520Uses%2520of%2520Gold-%2520TB-p-500.jpg": "5382cabb9ddcf680f79138004c186318",
"assets/assets/images/Animation%2520-%25201736827058824.json": "3ecb7efb4a4417ae86b77f1c852affbd",
"assets/assets/images/Animation%2520-%25201736827135480.json": "75a2d2ff188381e35cd104cbe14cd4c9",
"assets/assets/images/Animation%2520-%25201736827163682.json": "d8a214d771b10cc3f8ac42ca4bb0d81f",
"assets/assets/images/apple-svgrepo-com.png": "b5f380621b3cbfbd66e6e2264670dc65",
"assets/assets/images/attachment-2-svgrepo-com.png": "57956617f26e045afaf2b4ac6eca0ecc",
"assets/assets/images/bank-card-svgrepo-com.png": "f71fd8d9c6dfcc5fc8056dc0e67d18da",
"assets/assets/images/bd_flag.png": "91d601cb3aa219e4ef505f7532c91ade",
"assets/assets/images/bkash.png": "91374b169308ba0911bafc0e5db1e2c8",
"assets/assets/images/call-svgrepo-com.png": "42e11eba92d91301281cae0a3681a0c5",
"assets/assets/images/delete-filled-svgrepo-com.png": "72c0f11c374cce6ea2f828b69666db4a",
"assets/assets/images/digital_gold.jpg": "099480fbe20d0d9ebd1553c2c702c70d",
"assets/assets/images/discount-shape-svgrepo-com.png": "d82c2d4df1f5a4913d7dd7f1529c2d29",
"assets/assets/images/energy-saving-light-bulbs-svgrepo-com.png": "ae0e08cf6f0d5f26a38aba5020925988",
"assets/assets/images/event-calender-date-note-svgrepo-com.png": "8b9546b3e710d4f2d44e2191b586da55",
"assets/assets/images/facebook-color-svgrepo-com.png": "45426ca50f1722823f894f85c93a4d18",
"assets/assets/images/gold1.png": "b4f522f50b6d384df859ae14504a315c",
"assets/assets/images/gold2.png": "e41b77a547e832a045cf51f20fba377a",
"assets/assets/images/instagram-1-svgrepo-com.png": "b80cf572bc04f9e188f646f1dff62a8a",
"assets/assets/images/jewellery/1.jpg": "dbb80bbda648311d15430582c18d00b8",
"assets/assets/images/jewellery/2.jpg": "b6e67f5211ac64363fdf8bdef6628a65",
"assets/assets/images/jewellery/3.jpg": "695eb6b8fda2f9b37555257885db4ece",
"assets/assets/images/jewellery/4.jpeg": "6143f4d23c8c2a99b709a5cf95457f3c",
"assets/assets/images/jewellery/5.jpeg": "1c68f589eaf64fc412e0a19581a485ac",
"assets/assets/images/kyc.png": "b70374ea5a93c3742d41c794e7e273b4",
"assets/assets/images/linkedin-linked-in-svgrepo-com.png": "e3f86fcd3148466d5b1c197c0ae6531b",
"assets/assets/images/live.png": "bff54cbbb544966030bddb2711a692fe",
"assets/assets/images/loan.png": "42ab15f119fb0176ef38a8c190599a1d",
"assets/assets/images/log-out-exit-svgrepo-com.png": "fe7b705dfc1fa5c377f54b86ef651b41",
"assets/assets/images/logo-removebg.png": "66be94a4806c92d4314a7dd9c55dd0a7",
"assets/assets/images/logo.png": "cdc56ef45b63098803d767c9e2239b67",
"assets/assets/images/medal-quality-svgrepo-com%2520(1).png": "e718010f63f9025d75fa2be090019d3b",
"assets/assets/images/medal-quality-svgrepo-com.png": "44a6e7406b000a6afd2cebcb22b22f10",
"assets/assets/images/money-transfer-svgrepo-com.png": "54b77beb9b5f2b68cf02567d9e0facce",
"assets/assets/images/nagad.png": "63188bd74aba63d32140648b5a8ba5f8",
"assets/assets/images/nid.png": "8f340f84c34e2c04e28934acf67a4a3c",
"assets/assets/images/p1.jpg": "01974500bc101277cb5e26bbbdcbe420",
"assets/assets/images/p2.jpg": "af9fe6b134b58595c099cc88b0fdf61b",
"assets/assets/images/p3.jpeg": "9ea75389bbb43af1fcf294d14e30a20a",
"assets/assets/images/passport.png": "ef51860acdd4e66eedee9447872821d3",
"assets/assets/images/payment-method-pay-svgrepo-com.png": "1acd7a36b9e0edfdd989926cc5ac9600",
"assets/assets/images/playstore-svgrepo-com.png": "c8f68dd79fde2cf02cf80e1eb92b6324",
"assets/assets/images/privacy-tips-svgrepo-com.png": "f6c279b9a792d00d4ed0cabb1841d937",
"assets/assets/images/profile-svgrepo-com.png": "16827c00bac419f2f023d5f5cb3e5e65",
"assets/assets/images/profile3.jpg": "8d15f5f7feccd71308ce61290a5a653c",
"assets/assets/images/rocket-svgrepo-com.png": "6011a0f240d7e92bfe5d4bcc92d4d4c5",
"assets/assets/images/safety-certificate-svgrepo-com%2520(2).png": "847ca959edc6d2de1fe0a0e7f29292c9",
"assets/assets/images/scan_qr.png": "d24686c620a98563052fff58c4d4c458",
"assets/assets/images/settings-1-svgrepo-com.png": "8ae9b01956e3de5a1367120a867c2389",
"assets/assets/images/settings.png": "47ebed4e2c7d396772ad2245ddbbbe6d",
"assets/assets/images/taka-square-2-svgrepo-com.png": "a1e22a946714be6b9f626fb91939ac0c",
"assets/assets/images/twitter-color-svgrepo-com.png": "6b19b94d97d6b3abb8ef0fd14ed61ecb",
"assets/assets/images/verified-check-svgrepo-com.png": "a9629132f0b368d1f40012fe18469ab0",
"assets/assets/images/write-svgrepo-com.png": "091f159a6b6106d94e8f0c279812f0dd",
"assets/assets/images/youtube-color-svgrepo-com.png": "d5f0252a424fd1bf98350fa620e7036c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b5ba1deb4da8906630ee391997340c32",
"assets/NOTICES": "a3939ed80ad6e9f63827018b17fcf389",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "bd825a6fa9323a4c9ca23bcc4f304d6c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0cf8d5b4bfb31d8b62b833f2177320bd",
"/": "0cf8d5b4bfb31d8b62b833f2177320bd",
"main.dart.js": "480513dc7dbfb2778bab6f9020927c06",
"manifest.json": "7a083ab1189556960d6383f322c8ee9d",
"version.json": "0162aa3da4e644dee5421a7eeae91947"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
