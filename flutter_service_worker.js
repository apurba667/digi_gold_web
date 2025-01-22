'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "702264e6fff7fa253639d55f3d6428cb",
".git/config": "9a0e206b88c9618cb305d3dc91674638",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2c9df07be5f0e53bca2b7657b583602c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "45f69268644fe414ea37781339fd52dd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aa5db8891fd761f7b605d6cd80915437",
".git/logs/refs/heads/main": "f42ef5633d94712762f116833aa48953",
".git/logs/refs/remotes/origin/main": "2973708a02bb270f4ae93e13a46952e9",
".git/objects/03/6c92b552de997e284cb8506f822dd47b87d67f": "8df3cac74d25831830f486c77cb04d2e",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/c3d08bcac22668a01caf65c1af30760c78b79e": "74267992160b6b31160f8bc393d87dd5",
".git/objects/06/c6408767fb35f3497094b2cfe2abdf37def6f5": "c0e89bca774d19882f8ff94212494595",
".git/objects/0d/980487393c7ad3a4b760f4979be8fc0708a9d2": "52ad0cf81e413cf9ca575e1c81ff1ed3",
".git/objects/0d/ca1a9a8ddcea47eb521013c3bd9281e5ade95f": "a17d4d8664b037b7b3162b14004a6982",
".git/objects/0e/325dfd5dc4106d8db55f3dffc28be993141b89": "6c6d7e66f8ed71f90af28e76aa59db23",
".git/objects/11/364a3af1b9163828a2e17924050efefa468266": "d6fc2b06eaafbbe9943081e9777471ab",
".git/objects/12/97b16ead0b43a02358e2255f6400db2688ddbe": "d42e476239b6fb380f4f341294c915c0",
".git/objects/16/1f9c0274506f118d5a77d5aa1d5edc0e5d2dd9": "337751daa3f5f34157b478b6f9df225e",
".git/objects/16/5f6eea34d5d625d8fb748f2337fb369307db27": "db5cce24aff6fddcff91699d93ee51cf",
".git/objects/17/d53dd3f138cc65012a31e012a2ec605bdf05fb": "3c34c7faf6e175c6cd2c548bad042548",
".git/objects/1b/d576f9b43b6ac86b1be5c7b6d426f76c2ebee7": "271a4569099a094912166853a1cdc8cc",
".git/objects/1d/51c2365ccb0c6b1ce4c651a8c069f319ebc08a": "95da14ad3e7f08458b788d4b9962f5ea",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/1d062537b6c74e504f12fafe77d864932867bc": "c34a054ade7c8fb70e571babfd970b3a",
".git/objects/24/d96f3d23c40c55abbe6598f2ca06201b391937": "275f7939f88eceb5c0eab14f0cd162b7",
".git/objects/25/7c9bca4c32b718b33cd1cafc6a3a63e5d5ab45": "f6cffdd3456e98e6a817af8dc181a5be",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/a8f98e581d06255dc8cd038f2841be010aca45": "1f76c87bc45ffea1509c2fc05de1a3f1",
".git/objects/2f/c5fd2a2e8700162393e7401581d2dd0680d714": "19b4c8488f43eac8700f17bc18941a95",
".git/objects/33/aa573a84508e1e3d981105ffc58e3ffd0aa34e": "d4c47ab155a823e0312006c58ea49323",
".git/objects/34/80b81cd715caac0faaee85e2725d9b5f3b2158": "3ffd5925befa34a788cbb12e6d3fd5cb",
".git/objects/3b/226c946fc1cab2ef12f76d06856ed982303b90": "ccd336179459ce4dbdb2c1e248786bde",
".git/objects/3f/7e88d05a00a67a2d35147e1f303867550ebf0e": "c6d31a8c5a2cc1d4a4cd6710a46d5379",
".git/objects/43/98ff11d7ebdc26e487d918c6b85a60724387a4": "cc23d72fb664b854bddb9d3b288fab59",
".git/objects/44/a2b3b877fcdd1e54948b302a6749c18c6b6967": "4b6f40f03b9e5642394f1ae19ca7e77f",
".git/objects/44/f99d1cd59b2c077a023a13427cab8486086b17": "082ae0fe4eac50cadd15391233bc0ffc",
".git/objects/45/1cca70aad95b1548bca3baccb1cf4023387528": "7adb5738b3f95505b76cf7c7e0abd923",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/82aeffa1f8698363e1f9c900a070e95ea4fcfa": "992565cddad263716dd27e17d7227f29",
".git/objects/46/c2522ddabee5cba3da8d275f20fbc37c88388a": "31e931a4bdd8afcc9b4240940692517c",
".git/objects/4b/561f43e3df358ea9d322dc8dccceeffab618fb": "1696acd6aa68351d42252bf6aaad7aad",
".git/objects/50/580e2fa33c6b0d47e59c7bacc22c194a44d5c9": "a38181f5bcc9affda30360d54d494b8b",
".git/objects/51/ca58ebbe6831e565582f5231536ad760dc0574": "88d85704ed4292e5016baa740ddde0fb",
".git/objects/52/4154567f54d560a402680855313c490a21b7ad": "6d3620fbacf600248ae1bb9ee7d31aa4",
".git/objects/53/7821b7be23d1ee15711cd4e7c6e0b0a01ddd58": "faa9c8512237802a9e4d78cb092d788f",
".git/objects/55/ffa4db9a910b66868073062f0f09ad6d170374": "87a00dc902629a3b8c4b50143ba05a91",
".git/objects/5a/b0ec1d7c166640c9fa0f884c10fa3fe6f3b6cc": "5da5bf089c2fcebcc9816d18cce0fa94",
".git/objects/5c/2bd8c5e36e0cfe84cbaa9fe490630e829798e4": "bbd529cb3a97d46056956b7fe5eaa221",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5f/5a6a954bdcccab3e0247d5ca61d6e2767ef124": "736927e460ec583e6372a924f10a3509",
".git/objects/60/38771da5bf6a0027305e9589f6f5e6dd0ea450": "043add25af799af8827addc635d21df6",
".git/objects/60/4c914ec1af46d301f3eac558f6f9a2bb47715c": "2016752c544723d9ad2c8715013c60c1",
".git/objects/62/122380a347d178dde33b3b060ac71011f7ad18": "1266e840f69ceb84d6506295be32ec04",
".git/objects/63/06d4a30edf04598058288698c2a16108e1d0fa": "d15f77173504c8738646c9f9d7b7bf35",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/6e542aaf08d38544c8685708640c2d6634d982": "27f9981148c00cb9d10cb422736f85e5",
".git/objects/68/29bb53e10a2d3427e764ad47182ecef2b32aac": "886cb20e54932d2e1dc768b01b0827be",
".git/objects/69/cffec0c2310ff6843875c965c9611da497095a": "fc7570366295ed07b507ba56b9698bc4",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/71/5d802ce42662158558728717dcb23ed9bd85eb": "932f9f7951502ea8d59d8011229139ae",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/bc69b84716bb976a79455a45746ad564093d68": "fbd1662334bf80c51d0672f8585b2806",
".git/objects/78/91fd3a786fce585b4b3cb5158940a92170f43f": "6fad5b759854ba4f8d1d4d63a586477d",
".git/objects/7b/f19e33f3e485d288509d6c83ede9610058bd06": "239d69a46e9416af84be0ec047c80b00",
".git/objects/7c/f1a8b1493befdfd0d0412bb3336551e04b7332": "a0c1b899e399cb5a1da65bd62b6b5277",
".git/objects/80/befa6c9a59c84b1f68fc67662e1e5a73e67ed6": "3b60a319df2bf623ebc3aa870532e47a",
".git/objects/82/ebdbc7dd1e4a0a17c6e1d908993633ed6a77eb": "6ad2f6c6df191a33578eb992b4a73723",
".git/objects/84/af252ffbf9474371641eb829fc98e9c057c6ab": "28d15be835d238b8908e46973c2d6065",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/f2b856ec97fe78d0964e7ecdf3471d45937b39": "94fb2c561b0da7f052adb1f89857c6bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e3f92aba0e9c5f9641b88c9cc1f03698931ea2": "14664d1332bb5cf076ceb87ce3ae54a2",
".git/objects/8b/7cbd2a148883362d7494c71b70b0526cab4881": "86bb6f9cfece17fe9a53c7fd82d9cb89",
".git/objects/8c/0ed3224ea4683868bc8caf6d67200a045e95f4": "36656957bb5e2094f991357f4711b832",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/ec42bc6abc2a5c264a41a5ff7d60be71b2913f": "06cd45a4d01a4d3394e89dd8a5f6f906",
".git/objects/8e/2000541656131ad958b28143853e51a2e51334": "6164612097c0f545399f310b910a6678",
".git/objects/8f/ea9392bc9f88ad2d8dd06956a14eb6fe80e90f": "8cfd2f1d259c413332ac206b6c4ddee0",
".git/objects/90/975fc97c465a25e06d4854e33dca7f02bc8457": "d31a8ccf1e6689029dee293a39820b93",
".git/objects/94/c7ed9e18f8996b6326b0d79163413a01c7f772": "cfe7b523d95815e2aba65f2d021c74b9",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/ff019df659a524fca6995a3afc965b08083b0b": "afd5d0196675ddd1d9b072832c42f963",
".git/objects/a1/c6e26aac702c650ebe02ac67dfcdee03a48a64": "f2e4bc3010ba680c30e10f2d97ebb2b9",
".git/objects/a6/5ed9aa2bc1f2583530d26f7932ce0821bdb25d": "7db9dab37bd635ad4eda70455f45cf5c",
".git/objects/aa/bfe11845728f2bd5bbb050db8c6a63d1030f1a": "157e896be1b613fa24652481f04b01b4",
".git/objects/aa/d3492ba8d2ba0b7199e2c03652947c10a3c620": "88581b43e3456540735c5e61ea6b8382",
".git/objects/ad/287b081de9966d008f965dc4f92860db9cf727": "16555a78a8651be421edc5deec27fc6a",
".git/objects/ad/9615bcfb04be218050fa68279d87d24710b6f5": "cc5c3f6504bfd83b9d5f5e633f7ae399",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/920c22ba6ae1a96befb193649aa4476a74d0e8": "81db6e6d32763a8368223e2cf746c4ba",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/1c62cf380fe7f5293de5bb4a9e45266c360b28": "019ea088ad266da5d347abd74b0e2fba",
".git/objects/b3/51ff8bbbcb7e4b93ee854a856ddf21eb23bc8f": "bdabea0018ab3f8f3008f075aca6ed06",
".git/objects/b5/a85d7f73536e7cc702b83067095a188b3f987e": "9f0c9a2ba56d73b4062a3bde267733d8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/97bdb1002bb20e287e3b671c82a97e797931b5": "a1cb863ac4d15236899cfb38933b1445",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/f169967be2787ef59f03d080a04ef2a6a7237b": "ecc995550f3722f8d9ff8541f978fb7e",
".git/objects/bc/8af2ab3e218a58ecc8d9b91d50879ecaebecb5": "88dcc98d204867f2598d87679a311240",
".git/objects/c0/d99c2e23329b98aa8d0482f564965dc019f160": "0162100e167d1204ff7ccb98e8cb9e94",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/d738ae79f56575407b47d047519f7123686898": "370bade6f2037275593b720c5647e204",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/0497c9b4a6730b56464d5425f0277c6a377c0a": "4d1bb4e964abd119323ea3a64317a16b",
".git/objects/c7/8f2294099079753653c198578e4981918b6e93": "566f9fbfb0b3ac26080bcff500fd09d2",
".git/objects/ca/f0e639f216fcdcc0c74827ac7f2edc5ddc84cc": "ad5e25ae6ef90491dc219333de423af0",
".git/objects/cc/153f8af6c3ba1789520cbcbbc9f12fada036a8": "66d3ca2674d02af609cfaf01ebf0da10",
".git/objects/cc/ddbe7d2fd562a2df2ad56e7c8978527025f335": "776203b3af20d58562a88583cc07b890",
".git/objects/cf/6052acc437b2411639d327942a2ccbcb1e2572": "efdf6b0275d314abb2ef3f647cd9b591",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/7116fb5f1c196d86d1f686d4f187991a112c4d": "9c7799f646a215976b0ab34d29791542",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f9906087557c24eeb912378969f3600e548e76": "2aecf0a5ed44021d97490a6bc4eb4e1e",
".git/objects/de/bc11b5804aefa791fb12c5db60fdbff5b76173": "3e8c7f02546992b9229f9e8c0a072251",
".git/objects/e1/587a2ba552353e7af69490f9f5094d9c0d7da4": "27374f7c555220cfadf44360f5c06da2",
".git/objects/e7/082456d5144867c8d82bacf05c9d871d6e6fdd": "0f88feae45af5ba30add1c829e9e7775",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b2d1377ab4f3a0e2329beedc3dc6de52267d3b": "bf85c94ea6245b5897050a1032e9c08b",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/c241a4d23d991537f2a614f2058d32a34f2bbb": "66367dfbd37633daa933550c2d9ff981",
".git/objects/ef/6927a9831a4717a9d48037eb8b06dd37378aef": "02b233894d64cdcc62d72dc7305bac92",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/e54e22a00cbba67f001a35942fab417ec6eb21": "c8e89c46eb0fb7f5ff5708a293926cce",
".git/objects/f5/550d1941af92034bb705934a8335135896ec0e": "6ea85d1cd84dd60199f05b74df456b23",
".git/objects/fa/4c370f929823ac6a7538b7cbf8f3ddb90ca692": "7ff9185168c079dd9b0acbcc39cd0237",
".git/objects/fb/010bf8680adaa9bc3c01b8a4951afb2d11befd": "4bb5883764892ccd7c9a2e2c06189d43",
".git/ORIG_HEAD": "aaff5150562561260af68c35f36a0749",
".git/refs/heads/main": "a7d7505747ccf76cc7e5dd2e8ceaff66",
".git/refs/remotes/origin/main": "a7d7505747ccf76cc7e5dd2e8ceaff66",
"assets/AssetManifest.bin": "5c9ecd34e60baab45da9bba8759b447f",
"assets/AssetManifest.bin.json": "693a2a62dee68add66e44a2b60d360f0",
"assets/AssetManifest.json": "592e88515e72030fb943240b209aac90",
"assets/assets/images/Animation%2520-%25201736827058824.json": "3ecb7efb4a4417ae86b77f1c852affbd",
"assets/assets/images/Animation%2520-%25201736827135480.json": "75a2d2ff188381e35cd104cbe14cd4c9",
"assets/assets/images/Animation%2520-%25201736827163682.json": "d8a214d771b10cc3f8ac42ca4bb0d81f",
"assets/assets/images/bank-card-svgrepo-com.png": "f71fd8d9c6dfcc5fc8056dc0e67d18da",
"assets/assets/images/bkash.png": "91374b169308ba0911bafc0e5db1e2c8",
"assets/assets/images/logo.png": "cdc56ef45b63098803d767c9e2239b67",
"assets/assets/images/nagad.png": "63188bd74aba63d32140648b5a8ba5f8",
"assets/assets/images/p1.jpg": "01974500bc101277cb5e26bbbdcbe420",
"assets/assets/images/p2.jpg": "af9fe6b134b58595c099cc88b0fdf61b",
"assets/assets/images/p3.jpeg": "9ea75389bbb43af1fcf294d14e30a20a",
"assets/assets/images/profile3.jpg": "8d15f5f7feccd71308ce61290a5a653c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "31c5bdecf88bd06400f6f26c81945a55",
"assets/NOTICES": "a4f885e85cc18c48ca07d77230181cd0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"flutter_bootstrap.js": "199cb204d85888eb14acf3dbc6670f0b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0cf8d5b4bfb31d8b62b833f2177320bd",
"/": "0cf8d5b4bfb31d8b62b833f2177320bd",
"main.dart.js": "31f246c76fa6785e17128a9b396a00ba",
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
