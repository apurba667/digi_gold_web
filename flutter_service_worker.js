'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ab51a55a42dd59942e50a2ba864bcb84",
".git/config": "9a0e206b88c9618cb305d3dc91674638",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d48983ed1931ebfdf21c5f2dcd63c46e",
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
".git/index": "4828c590a97c7d1e779451782fea32df",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c447e5e48d45b3981f1c95ba67ebbde",
".git/logs/refs/heads/main": "a5d07bda1be84ca753e75e84f5356376",
".git/logs/refs/remotes/origin/main": "8a511f295cd2c8252477240ae85066c4",
".git/objects/00/1fd2dded437981aa6b828257cd14e14271a992": "be69d86b053a514ab1bd266dc975e74c",
".git/objects/01/510eac1a97fc37d537696297c4b9ce92a27ee3": "9caa1945a704c9518a3911c3088842fa",
".git/objects/01/e57d795f0c2bc70dce6861c56bfab4b21f4dca": "0b3588875d55a09f6ee373ca88f3dbd9",
".git/objects/03/6c92b552de997e284cb8506f822dd47b87d67f": "8df3cac74d25831830f486c77cb04d2e",
".git/objects/03/748374438b20113ac470680c8c5c104eb570e7": "004b0e4417b195959dd2decaf5d5229a",
".git/objects/03/9bb7d5e3c7e891dbca2d23bdfcf3bc3c616295": "ad146eeb4a1ba8e1d51c66cefe0d8246",
".git/objects/04/f4ba26258e8a184b240bb101f9f3d6ed6c9d37": "6ff254e15daf736f01d9e2f403b1c535",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/05/d2a74e916076ffe9bd51563a1f9884d7dec66f": "68d8213c60718e0ddd72eb3e4be6c854",
".git/objects/06/59f59aaac5b9a15cc700eb4518c6642e695915": "0306571907d45c021455f038a12f1f61",
".git/objects/06/99bd374b38b7c8cfeb06ee6077822ba9d1c2a2": "3039bf41bb3ed64a4afe59db6f2fe642",
".git/objects/06/c3d08bcac22668a01caf65c1af30760c78b79e": "74267992160b6b31160f8bc393d87dd5",
".git/objects/06/c6408767fb35f3497094b2cfe2abdf37def6f5": "c0e89bca774d19882f8ff94212494595",
".git/objects/07/31f9e8ea5a514ab0518b44625ac7b59ea629d5": "8eafb60ddffa4b197df3458ea1b1e7ac",
".git/objects/08/0c723482943794227e4fb2f201f8dd2d2ae58a": "bd2e43b9236c01d2fcb0329cb70bdeaa",
".git/objects/08/eab934403e931289428816aa1825948f2d0797": "7e9238c3cf082db28a80fbe42c928734",
".git/objects/0a/63e7e87502cde7b11776091388d1544e410981": "e6793f9a33f5b48895ff92002102d5b1",
".git/objects/0b/5dbac0aa5c5f0a395317589f45a4b6093a7895": "cc15cf8a35502f6c2a9b6ecf1e5d7bec",
".git/objects/0c/33aad08e5384115b4b0f471b04843670dd75ef": "72d60a1677cc264325c0d56f905361d2",
".git/objects/0d/9761c333d0fa82d4d1a7bb39012217940602e5": "f985e656d430a63170e0f5ab1359cf0b",
".git/objects/0d/980487393c7ad3a4b760f4979be8fc0708a9d2": "52ad0cf81e413cf9ca575e1c81ff1ed3",
".git/objects/0d/c03e319b0edc478c1f37b238f99ef5486f51a4": "9c4101b237fbdeab96939372a307ae60",
".git/objects/0d/ca1a9a8ddcea47eb521013c3bd9281e5ade95f": "a17d4d8664b037b7b3162b14004a6982",
".git/objects/0e/325dfd5dc4106d8db55f3dffc28be993141b89": "6c6d7e66f8ed71f90af28e76aa59db23",
".git/objects/0e/81d9628c5bca6028259bbb41b68bf6ede3b36a": "6d744f1f2534edd06c64bdb6cc81bb2c",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/11/006fcb346d6ef72abda892d3bcb58698d2d3f1": "7f402c0a7d3152860b011b2d0687813d",
".git/objects/11/364a3af1b9163828a2e17924050efefa468266": "d6fc2b06eaafbbe9943081e9777471ab",
".git/objects/11/af8f14d472c30ce10d32460a870550b7c9ed9a": "524bc6d75b4da0aa09a8dcf5517e6ad3",
".git/objects/12/653ca3d2915fff23778f0b960cb41749816d4e": "c26c406ac1fb9e4c40eab4b5bf24afd2",
".git/objects/12/97b16ead0b43a02358e2255f6400db2688ddbe": "d42e476239b6fb380f4f341294c915c0",
".git/objects/13/16a2cf4caad1a085433c6cf64ed30d348d8110": "866724041433898416256298fd062e89",
".git/objects/13/1a31deff28e7a3ab61c3d3ac3e42a3ecbc3c50": "0f53f2043727f2de650715dfe157bc0c",
".git/objects/14/22476d653df22bb664711e7bb1f25967e85e55": "d5e1214fd9bda162100ac4dc2f8c4635",
".git/objects/15/b866a3722172a7aa3815c6ac248d88254fd04d": "647618d4d6740bb7d9875fd17821b6bb",
".git/objects/16/1f9c0274506f118d5a77d5aa1d5edc0e5d2dd9": "337751daa3f5f34157b478b6f9df225e",
".git/objects/16/5f6eea34d5d625d8fb748f2337fb369307db27": "db5cce24aff6fddcff91699d93ee51cf",
".git/objects/17/bd618469181406f2cb3899a0be78f7effbf76e": "959bc9c373982675e122827b23df90a2",
".git/objects/17/d53dd3f138cc65012a31e012a2ec605bdf05fb": "3c34c7faf6e175c6cd2c548bad042548",
".git/objects/18/527dd9516cd4090b44b8a862b413712fc7efd2": "45b0c31c37a63323d2c9358bc99c7575",
".git/objects/1a/26b9a5bce622780e5f99b6a6eccd5d8f84134e": "bba1cf19bc4cc7ceb45f5159974a97ab",
".git/objects/1b/d576f9b43b6ac86b1be5c7b6d426f76c2ebee7": "271a4569099a094912166853a1cdc8cc",
".git/objects/1d/51c2365ccb0c6b1ce4c651a8c069f319ebc08a": "95da14ad3e7f08458b788d4b9962f5ea",
".git/objects/1e/69de0f3edc67ac2c9e0743b709108eaaa768d1": "79deea514539b9308cde9f2321b8589e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/46b4e302a613e7d49c02f38b08700d024137c0": "16ed2c9beef21aad9990ffa1140fe907",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/24/1d062537b6c74e504f12fafe77d864932867bc": "c34a054ade7c8fb70e571babfd970b3a",
".git/objects/24/474443f8e57a3592fea829277756398b089ace": "6a855145b98e2d269ff86f244a7dbdf9",
".git/objects/24/ae6d8f73e82e4ac5e739ba56dd1380d9730ee0": "ba3b39334857ad97503b8bdc06fd2493",
".git/objects/24/d96f3d23c40c55abbe6598f2ca06201b391937": "275f7939f88eceb5c0eab14f0cd162b7",
".git/objects/25/7c9bca4c32b718b33cd1cafc6a3a63e5d5ab45": "f6cffdd3456e98e6a817af8dc181a5be",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/cd3433bc1029dc7f0708d669242921892716b6": "d7c06e8e3f5769e9d9df5fb1b8e31b94",
".git/objects/26/fe775af301998fbabdf8a4e6b60e58ab060db5": "f18714c83675b786cadd7f1b65ae5c53",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/73223367380471e3f7e370b14ba0426e89f68f": "6860e3c86750055df0f9f52c3cbf3dda",
".git/objects/28/a8f98e581d06255dc8cd038f2841be010aca45": "1f76c87bc45ffea1509c2fc05de1a3f1",
".git/objects/29/03af70d360ae51a29366c9b93cef2af14a6925": "cbb3e00ceb30e73044a416266e8a6d70",
".git/objects/2a/c364919a45a0f0649ea9e06879a9cdde7621e3": "72330bc821c05a4abcf513edb5937fad",
".git/objects/2c/e8bd86a368c34ba27f4a476f0196b1c5a5c89e": "6ec6f7234c84c7861a704afbc5b0f83f",
".git/objects/2d/09998548a177413d19161b7e7478683666240e": "635d8245b690cf9ebbe3f5dc46a85c35",
".git/objects/2d/7ff5d0e7ecdccdc8567c82b79992529c3ac26c": "630e17af1f1a61a606bdb2bccf11c63c",
".git/objects/2f/c5fd2a2e8700162393e7401581d2dd0680d714": "19b4c8488f43eac8700f17bc18941a95",
".git/objects/30/af1e912094c79fb5f1361c18afb1e5c2c8bf58": "675125f901cc243b15f54dd73acf64fa",
".git/objects/32/14094ee756a8c7f7e8a97123c5381a390c8043": "3639040a7502b9411589515e5bcafd0e",
".git/objects/33/66407fb291ec70167a63bac52c46594aab0fae": "44328f415111630b500454edeb9e5c93",
".git/objects/33/aa573a84508e1e3d981105ffc58e3ffd0aa34e": "d4c47ab155a823e0312006c58ea49323",
".git/objects/34/80b81cd715caac0faaee85e2725d9b5f3b2158": "3ffd5925befa34a788cbb12e6d3fd5cb",
".git/objects/36/53657c81e2ba7a0c7b5f801ff41d093ed35a4d": "a1543a0d0819413bdde71c911bca3867",
".git/objects/37/aee46100e7e63e4929c66a990c6007828ae649": "1083990e600211d8772e81162f41aada",
".git/objects/39/bc1451e57ec34d9cc40df4c86f2f92a67d317d": "49cf2551643d986e6450845d8bc8d131",
".git/objects/3a/ec352acadeaf37abc48fdc65a25d1e5e886ff7": "deea55c716ceb732d2a55a059da48871",
".git/objects/3a/f37acc73bc8032762c149fbdbb42d2172d2e2d": "84118b05edb00a2ac40f0b8bfc996d1a",
".git/objects/3b/226c946fc1cab2ef12f76d06856ed982303b90": "ccd336179459ce4dbdb2c1e248786bde",
".git/objects/3e/384ca505965dc07e5bc5905ee4cf3e56cc611f": "d1f2cac271c0cfa349e52e8fe233f522",
".git/objects/3f/20a5dfb02aff7d1635288fe79bdfd3f0329c1a": "0b9285addb35eabc75690857929e6cc0",
".git/objects/3f/7e88d05a00a67a2d35147e1f303867550ebf0e": "c6d31a8c5a2cc1d4a4cd6710a46d5379",
".git/objects/40/b9876239364787f9747af0d1332cd2bf53dfa2": "3542895ed3ce5de8fdf77c9690059895",
".git/objects/42/81a6ee565e248409ca6445f508c4e9779f2793": "9335704078200766dc0c2cc6ac63a6b7",
".git/objects/42/836f32d8794de84961ec5dc14849bba6abe516": "0f34d0fd69f941104dbcdfcc05936f16",
".git/objects/43/43a71d642a647314215276ec1e332f991b3ecc": "f63e2c941e19def7abd1fcb17a44ae53",
".git/objects/43/98ff11d7ebdc26e487d918c6b85a60724387a4": "cc23d72fb664b854bddb9d3b288fab59",
".git/objects/44/a2b3b877fcdd1e54948b302a6749c18c6b6967": "4b6f40f03b9e5642394f1ae19ca7e77f",
".git/objects/44/f99d1cd59b2c077a023a13427cab8486086b17": "082ae0fe4eac50cadd15391233bc0ffc",
".git/objects/45/1cca70aad95b1548bca3baccb1cf4023387528": "7adb5738b3f95505b76cf7c7e0abd923",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/296bc8a86bb104ff2eb6dbad7157f1d2a0fd14": "268686c200c5dab670f14271af54509d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/72e6a056f148569d9fb64d444bf97e3db70ea5": "62308b6ea59273eafd350e10b8f822bd",
".git/objects/46/82aeffa1f8698363e1f9c900a070e95ea4fcfa": "992565cddad263716dd27e17d7227f29",
".git/objects/46/c2522ddabee5cba3da8d275f20fbc37c88388a": "31e931a4bdd8afcc9b4240940692517c",
".git/objects/47/8f9b2aa83b2d3d3d74dd3c3579a93d6ff9d3b1": "2dc468f8f2f1585e9816dd477cf51b06",
".git/objects/47/9af8e4140a03f590492f5bfe44e2a2e6cd828c": "3a2ce52c30749bf909aa6cf8cbd0c33b",
".git/objects/48/ce227f14d79b1f8604ae83ef14ba36ce796803": "44a46a9247b9a7445c81f52be29a3a6f",
".git/objects/49/b1993273ac08c06e51067bb83eb51257aaccaa": "02be4f17435ee30da16d747f56b4dd10",
".git/objects/49/ee3d9ea1861f503d5f05188410d9b125918170": "bbdc29e5b6c0a9f94f4848bfa55244b5",
".git/objects/4a/a7bca3187b44c7738ddbb32d1b465cea4c67c5": "f2730cd73397c077f7f15f3f38c90c75",
".git/objects/4b/2867246eabb94b22f393fbfcc33c4260388c95": "c0c1757d1f7d6568c87e3d9d4f5c5d11",
".git/objects/4b/561f43e3df358ea9d322dc8dccceeffab618fb": "1696acd6aa68351d42252bf6aaad7aad",
".git/objects/4b/d3c010daa12b388e077bd98393b8428318986d": "35a2cb5dfe6d04417c097fa3b51bf20b",
".git/objects/4e/94fb6965c03a49322540b9119057e3449401ee": "fac83081008ec24cb7ea18bc53cab683",
".git/objects/4f/ab5d15adc95a4c4c76c98f1c7ab1121b5cb4f3": "4158d7650910a199f58d91aeb43496a9",
".git/objects/50/580e2fa33c6b0d47e59c7bacc22c194a44d5c9": "a38181f5bcc9affda30360d54d494b8b",
".git/objects/50/83bf017037d601723b935148e85767532db6cc": "26d869c6555bd4accc2f3be33f97a277",
".git/objects/51/5f5a5ac6e818683aa8c9fd3168c7ee8c34fdf7": "3a79ff642cc3764483c01124b8eee2f5",
".git/objects/51/ca58ebbe6831e565582f5231536ad760dc0574": "88d85704ed4292e5016baa740ddde0fb",
".git/objects/52/184f9051dd7190c4f68570afa4cccc41b8e1f7": "92e068f73c6d74aa7f79287548d2166d",
".git/objects/52/4154567f54d560a402680855313c490a21b7ad": "6d3620fbacf600248ae1bb9ee7d31aa4",
".git/objects/52/5b6a093c2599c5db25b0d2676d19e7cce8cde2": "7b2736a90a4e791f83933810e6d03b87",
".git/objects/52/8d9eefb8e168c18141105ea4421e128b649160": "1e7ee6d449aff01820e00c2dc9a63237",
".git/objects/52/9e868292bfb5da2ee8a9f331350cd677e4dd8e": "04ac6283fceeec184be0d28afd98a9a1",
".git/objects/53/7821b7be23d1ee15711cd4e7c6e0b0a01ddd58": "faa9c8512237802a9e4d78cb092d788f",
".git/objects/55/aaaf22ce1af537a70ed11c1d7d82fafee9d928": "c02b591523d947b688b7c7b813dcf404",
".git/objects/55/ffa4db9a910b66868073062f0f09ad6d170374": "87a00dc902629a3b8c4b50143ba05a91",
".git/objects/56/fcfe1fb510dd3cc16db17fcacdf4e598d5e2b1": "bef2cb5688200569e0bc0ec4ec46e90f",
".git/objects/57/7bbc756b929e811cc31aa227455bb2a16b9ab4": "948002c242e58e8aa1d6f6110278cdaa",
".git/objects/59/64570f1598681a94336804722cfa3a588aa9be": "57880cb0aed89dc257e5038a69bcd51d",
".git/objects/59/e2939f11141408b13e2179a61f8d4f2aaceb2d": "c6dde4e76041421f412cb88a89bdd331",
".git/objects/5a/42c86416eaf455c342ea2ec6ef41995ff9f90b": "af9bcbad82aad37a9b241b0e8a01c5f7",
".git/objects/5a/5e710bc03af20059a53c9bacee9ba0b219a37c": "ccd3e927e2ebfd9181c34fefef46424d",
".git/objects/5a/b0ec1d7c166640c9fa0f884c10fa3fe6f3b6cc": "5da5bf089c2fcebcc9816d18cce0fa94",
".git/objects/5c/2bd8c5e36e0cfe84cbaa9fe490630e829798e4": "bbd529cb3a97d46056956b7fe5eaa221",
".git/objects/5c/670153365faa57af32802cf21e8bb374a21205": "d35924b758f81f9db4f486442dd3f756",
".git/objects/5c/936df30dabdc5844f3f74f85f886bef6a0f1af": "f54e59c5f08b2e5298b0299ebcf78124",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5e/8ce147e4c7cb22792fb3f311353af040c2c31d": "9626ababfaca0154417e45022418e21f",
".git/objects/5f/5a6a954bdcccab3e0247d5ca61d6e2767ef124": "736927e460ec583e6372a924f10a3509",
".git/objects/5f/efc6ca3de78607e9ebf254628782bbd0b37c14": "631624c8d59bebb95330a9dc21c29e73",
".git/objects/60/38771da5bf6a0027305e9589f6f5e6dd0ea450": "043add25af799af8827addc635d21df6",
".git/objects/60/4c914ec1af46d301f3eac558f6f9a2bb47715c": "2016752c544723d9ad2c8715013c60c1",
".git/objects/60/7c4fc19842bbe80cec4b5524a4b51a9fad2849": "3617a14ac6b4f437a8f2ae487d8a716a",
".git/objects/62/122380a347d178dde33b3b060ac71011f7ad18": "1266e840f69ceb84d6506295be32ec04",
".git/objects/62/dd2f56a599e7581f253d015b3f0676f057e96d": "63e97a90f307cba7c3e07f125b369d2e",
".git/objects/62/de9836e0ea94ab53bb5cdf3fed81dd4cd3b410": "5b5880a0cdabc6d3672163cd33c2bd9b",
".git/objects/63/06d4a30edf04598058288698c2a16108e1d0fa": "d15f77173504c8738646c9f9d7b7bf35",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/6e542aaf08d38544c8685708640c2d6634d982": "27f9981148c00cb9d10cb422736f85e5",
".git/objects/64/6f7f7a247f082fb9232baaf297140506fb377a": "a0f0c3ab90ecc1c408c81c2e82b19803",
".git/objects/68/29bb53e10a2d3427e764ad47182ecef2b32aac": "886cb20e54932d2e1dc768b01b0827be",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/cffec0c2310ff6843875c965c9611da497095a": "fc7570366295ed07b507ba56b9698bc4",
".git/objects/6a/18247bd88c850365762df1f2e1c6d4ec8934d6": "385d79c4456d9ac2e8d92e2663f5dc37",
".git/objects/6b/d6eee46c4ebf25cae05cf53e38479dd4cbe677": "72a6aa34287444283aa9d8bf80969e5f",
".git/objects/6d/5c3c8dde3594aaca30324502d973d8462f5071": "587d6a158a3f0723ef1f70f87c1adf7e",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/12a77f1d05a1a927ae165cb5b344046b9904d7": "0f7f0c8c092a39a76a135c6ab1b8c42c",
".git/objects/6e/9f8609d1eb1860cffab31dfb56ddd596ceab64": "443c3f8f79e171d8766855c423086e2f",
".git/objects/6f/62d02b1b50250ba62421eab5c927903125d6b5": "655463da7de0b5e34e6307d3e53b60d0",
".git/objects/6f/e0dcdafec3e00ae89b5b76008c33361397d641": "cbf882d9531e02dd58b449e6007b9eec",
".git/objects/71/5d802ce42662158558728717dcb23ed9bd85eb": "932f9f7951502ea8d59d8011229139ae",
".git/objects/72/c1878300617e220e539a130ede159474c53299": "29b68e120fb510ff41f07483a000742e",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/92d9e549ce2d6a28ddc849b4a5aee961013bae": "610f0e711b54de9a560a3fe09c451db3",
".git/objects/73/c77b06fb8b6d77443dfadd4384591c3731762f": "9909f57b127858f70c626ce85fc33694",
".git/objects/73/ef4711354cc42af4d1e53029884694a6ef1b6b": "466041f2ab8d2dee65c0d218015a8353",
".git/objects/74/3b1968257e888e267ed03b5395d6d63e6bf5e2": "ffb35db30afe39846f394aacc942837c",
".git/objects/74/bc69b84716bb976a79455a45746ad564093d68": "fbd1662334bf80c51d0672f8585b2806",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/76/41f26fc63b0a66ac8655ea045e5707db3ef1c9": "e453ce89d3cad3154835717b966c6924",
".git/objects/76/974d3f6372e8c843f2a2c8d8fc8c20ecf4dc98": "587dbb8209df67768dde99b0e1a031f8",
".git/objects/78/91fd3a786fce585b4b3cb5158940a92170f43f": "6fad5b759854ba4f8d1d4d63a586477d",
".git/objects/78/9a91c43314f46bf60e657086c93441ad9ad8fa": "1ff1f172df071def25fa1bfe5d267190",
".git/objects/78/b6a14234c15f627863f7f868f980169350593a": "b5a88181f941f0830ceec12409e12366",
".git/objects/7a/a965e85285d0500467bb0dc83fb528f1aeceda": "4521ea46fa17b185d279b9706ecf74b4",
".git/objects/7b/f19e33f3e485d288509d6c83ede9610058bd06": "239d69a46e9416af84be0ec047c80b00",
".git/objects/7c/f1a8b1493befdfd0d0412bb3336551e04b7332": "a0c1b899e399cb5a1da65bd62b6b5277",
".git/objects/7f/cb8a4c2736bc5b307431c1aec7c6da8a5cd910": "b23e5e882bf23bd74e0ccec068098a1e",
".git/objects/80/b3fed201b39e44fc8bf08358c947fdfdcd5399": "f0917c20cb063f570377c71528624e7b",
".git/objects/80/befa6c9a59c84b1f68fc67662e1e5a73e67ed6": "3b60a319df2bf623ebc3aa870532e47a",
".git/objects/81/83049afe1195240c943358d836cacf2b3b9c0b": "ba452afec012d7a31124205cd2208f45",
".git/objects/82/ebdbc7dd1e4a0a17c6e1d908993633ed6a77eb": "6ad2f6c6df191a33578eb992b4a73723",
".git/objects/84/af252ffbf9474371641eb829fc98e9c057c6ab": "28d15be835d238b8908e46973c2d6065",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/f2b856ec97fe78d0964e7ecdf3471d45937b39": "94fb2c561b0da7f052adb1f89857c6bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2d9d730d4ae8d098e963ec9fa683cbe9b870ff": "b2950a60b851a05404336e3f0715dbe4",
".git/objects/89/327dd15bcababd1fa2fa3bc74d4c02ca94a52e": "3ff5eaf7fddcd2d98c28d2e2a96105cc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bfeb6607c4b9f9a98deed4d44a3662bb39bfe9": "54d392b7db3bea879edfcccffa133df6",
".git/objects/8a/e3f92aba0e9c5f9641b88c9cc1f03698931ea2": "14664d1332bb5cf076ceb87ce3ae54a2",
".git/objects/8b/7cbd2a148883362d7494c71b70b0526cab4881": "86bb6f9cfece17fe9a53c7fd82d9cb89",
".git/objects/8b/d460e59494b0133c418aff1aaf5d6e77b3cb4f": "b3973c9f37f1b7706b35abbf3edc4990",
".git/objects/8c/0ed3224ea4683868bc8caf6d67200a045e95f4": "36656957bb5e2094f991357f4711b832",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/ec42bc6abc2a5c264a41a5ff7d60be71b2913f": "06cd45a4d01a4d3394e89dd8a5f6f906",
".git/objects/8e/2000541656131ad958b28143853e51a2e51334": "6164612097c0f545399f310b910a6678",
".git/objects/8e/3e776d82b79f2297862fc5ca19979e98cb4bbd": "5b6b56b4da5b375929af15abcd949c7f",
".git/objects/8f/ea9392bc9f88ad2d8dd06956a14eb6fe80e90f": "8cfd2f1d259c413332ac206b6c4ddee0",
".git/objects/90/958080d8a1737180e7240f75a2348e41fbf113": "0ed3da27f366a269dad2b3fc5efaa65a",
".git/objects/90/975fc97c465a25e06d4854e33dca7f02bc8457": "d31a8ccf1e6689029dee293a39820b93",
".git/objects/90/fd9c252ab6a3ada15f41fd610cd6ef588649f3": "b2ff2290ce25db8ab3875f75db2e0e5f",
".git/objects/91/2f15d6303ce42e1006146c54374860558589bb": "6f682681659afbf0c6ec882ffc2443c2",
".git/objects/94/c7ed9e18f8996b6326b0d79163413a01c7f772": "cfe7b523d95815e2aba65f2d021c74b9",
".git/objects/95/f0de3d6956ece0c7a6cb1cb59126e4d72ad950": "0992c4ebaf3fdb26e2217f4c31bcf1cf",
".git/objects/96/9faac0fbb2ee9a947ff597ab0f047dd925a438": "6c968c574a7c7c833f9aa5fb6c0bbd5b",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/b3708957443aeb33d96b9ddbee08aef4f87795": "fe666cc17eb4af33b1640e179126e739",
".git/objects/97/d78707f9ad3ab57a923d53353e3c862d869890": "a5e6c93cbd287e3f2523888a6161d8d7",
".git/objects/98/ff019df659a524fca6995a3afc965b08083b0b": "afd5d0196675ddd1d9b072832c42f963",
".git/objects/99/3f4027091fe5c23d7def8d0a6783042020b441": "3af6ce64474e555fb000e87cb3292ca4",
".git/objects/99/e48733c779da822ea1678f93b33a5a29b4d6ef": "207a5f1e47a3f501ac469f59d466d4c2",
".git/objects/9a/08ea81c77a7153443083fa220a807ba753e208": "7d36e6e8a43dbb0032d28b60c0b13542",
".git/objects/9f/2b2dc6d8c7b39e55a253f8a5753983ddbef26e": "a4eceb0220f7b58879bbca4700eeec6b",
".git/objects/9f/7e974c9f4bbc388130ba230060531ef9bed387": "0a5c96cca15b6ae9ef5293e97ca6d588",
".git/objects/9f/a8c837bb68891d93d9f51513ece4ceb018b0a2": "f84e3facfcfca6ce83d200be8e12b905",
".git/objects/a1/51a6161750f24567776ad9e83ee64139ebe6b0": "2e465a15162fdc28a6be71239c9025cb",
".git/objects/a1/c6e26aac702c650ebe02ac67dfcdee03a48a64": "f2e4bc3010ba680c30e10f2d97ebb2b9",
".git/objects/a2/54d0f7db63ff8be50ca86b61ad416076ddc375": "71d34feb04d3ab2f336f830d5750895d",
".git/objects/a3/08a7fc20721d4f43e51f3500fc6a1badc28e74": "0ec39dc6d71c5d719279dd27ea7d3255",
".git/objects/a6/5ed9aa2bc1f2583530d26f7932ce0821bdb25d": "7db9dab37bd635ad4eda70455f45cf5c",
".git/objects/a7/3cb14642bfd3c1b39f0ac2436e5aabcbf1b8ec": "c0257a122186d9562d6e0b83b7b51d24",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/bdbe53cf03a726247fc439bb599bff66a5940f": "e88f3599ac28de7568cd2cc6e00b8e02",
".git/objects/a9/e6bfedc8164463113e8a3a20257249610591db": "fff09d03d5eba3f323af2e2b10fc843c",
".git/objects/aa/3383f7f328537954c3220c8744d30cee4e897a": "8a646584426915e6c423c3d93ad9ae5d",
".git/objects/aa/80f9dd92e6c7f3669dd8405ae7c6769e74aea3": "62ce793850c67e2b9a47604115e00b2a",
".git/objects/aa/a3962cc9da9ea79ecc01f83fdd4d03c20472cd": "762559934884f27e65d54c41c4d690a2",
".git/objects/aa/bfe11845728f2bd5bbb050db8c6a63d1030f1a": "157e896be1b613fa24652481f04b01b4",
".git/objects/aa/d3492ba8d2ba0b7199e2c03652947c10a3c620": "88581b43e3456540735c5e61ea6b8382",
".git/objects/ab/220b768575e5b33b15280a36acd31c083de20e": "28cef3ef85c955fa705ff681e0db3950",
".git/objects/ab/a5347af46b64f169acd8badba6905299567c80": "e9836de3fc61c50cff9f44b8572f7e5d",
".git/objects/ac/c5a224dac10df87dd821fc97cea06b10496244": "ec2684e4689b054bed94924b35407db7",
".git/objects/ad/287b081de9966d008f965dc4f92860db9cf727": "16555a78a8651be421edc5deec27fc6a",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/9615bcfb04be218050fa68279d87d24710b6f5": "cc5c3f6504bfd83b9d5f5e633f7ae399",
".git/objects/ae/34008edd16cddb51da45ea143df0f1ac405d31": "c7b9153393537970c73c122318f4e2eb",
".git/objects/ae/431b37030493f1ebf0114bd95741c278fa6ca9": "8719e5daab45a78ffc774e44eaf16767",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/8fae4f4e3c7960b276192e21ccb2c17b264deb": "2ba947004328011af89da27a790259cf",
".git/objects/b0/920c22ba6ae1a96befb193649aa4476a74d0e8": "81db6e6d32763a8368223e2cf746c4ba",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/1c62cf380fe7f5293de5bb4a9e45266c360b28": "019ea088ad266da5d347abd74b0e2fba",
".git/objects/b3/2207e68cd6d7f5cead4f67b5722f32d8c1ab82": "ec9052fcc96dafe14a6c9272b11d5ec3",
".git/objects/b3/51ff8bbbcb7e4b93ee854a856ddf21eb23bc8f": "bdabea0018ab3f8f3008f075aca6ed06",
".git/objects/b5/a85d7f73536e7cc702b83067095a188b3f987e": "9f0c9a2ba56d73b4062a3bde267733d8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8defb3e2102e599e178fc36f3b016462eeda2b": "fda5e825b22af13611bdb7ac84fc3dfb",
".git/objects/b8/a90795863259487071ffcb267a53d41f51ab8c": "fea516bcc358de7ceb71be4cd22c6056",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/97bdb1002bb20e287e3b671c82a97e797931b5": "a1cb863ac4d15236899cfb38933b1445",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/f169967be2787ef59f03d080a04ef2a6a7237b": "ecc995550f3722f8d9ff8541f978fb7e",
".git/objects/bc/1dc737613ea6f5c7461e743d2ffff5611692d4": "2273f1c58005ad7a1a31c56085706ca0",
".git/objects/bc/8af2ab3e218a58ecc8d9b91d50879ecaebecb5": "88dcc98d204867f2598d87679a311240",
".git/objects/bf/6597da3b6f640b10b9c4c21cc1ea242a3a7653": "daefea3795be60708e97238616e0b930",
".git/objects/c0/d99c2e23329b98aa8d0482f564965dc019f160": "0162100e167d1204ff7ccb98e8cb9e94",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/bedcab140eb64f40e2ec7576540d6f2035cd50": "05099223d6f84fe06ed013665dde0580",
".git/objects/c4/d738ae79f56575407b47d047519f7123686898": "370bade6f2037275593b720c5647e204",
".git/objects/c5/03ec28caaed184a00e65e4d515090f50bb9f35": "7bad54edbbfb47735b27cb27818a532d",
".git/objects/c5/3dfd4044038c32e786110b327e46475435d665": "706c57c9f787f800e7b0747db96d801c",
".git/objects/c5/460322697e18609ade8b3080c05cbd11a8a95d": "bc6658dcc2ac157bc8953dbb19c57f76",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/8c1906c779a67bfd7522c8a6a08b0bb3a81180": "c888c19dbba20f7e61fffaf135c45d87",
".git/objects/c7/0497c9b4a6730b56464d5425f0277c6a377c0a": "4d1bb4e964abd119323ea3a64317a16b",
".git/objects/c7/3d008ba7e6de52f94eee500446b4ed06e518f6": "f53c2ead55ebae10dca70edd6c3c2ed9",
".git/objects/c7/8f2294099079753653c198578e4981918b6e93": "566f9fbfb0b3ac26080bcff500fd09d2",
".git/objects/c8/1a5b5bd6f6834d6733276ec78262aa1fd6557a": "4042d808e358286b6e585b22e377278a",
".git/objects/ca/f0e639f216fcdcc0c74827ac7f2edc5ddc84cc": "ad5e25ae6ef90491dc219333de423af0",
".git/objects/cb/62c6901a278deafa8d638211efe89de2c27860": "b8595511adbecbf229ba2db13aa0a434",
".git/objects/cb/f5c1b9c72c69aadd5b56329adaa0427ca51b76": "3826d9be95b49e476f2edc0284b540c6",
".git/objects/cc/153f8af6c3ba1789520cbcbbc9f12fada036a8": "66d3ca2674d02af609cfaf01ebf0da10",
".git/objects/cc/4c487115c501a179f0d398f8b1505e09343183": "6f731d95404c1e6a222761e333a121c8",
".git/objects/cc/ddbe7d2fd562a2df2ad56e7c8978527025f335": "776203b3af20d58562a88583cc07b890",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/a34cd7bbed48835766fdab14d1603621439cf5": "dd94c13b209a0d7518d9f72e15cb906d",
".git/objects/cf/6052acc437b2411639d327942a2ccbcb1e2572": "efdf6b0275d314abb2ef3f647cd9b591",
".git/objects/d3/7bc5320104d1e80618c8a34a66d28c6ef93ed9": "6ab42b76440375e871e680caf8b24dc3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/7116fb5f1c196d86d1f686d4f187991a112c4d": "9c7799f646a215976b0ab34d29791542",
".git/objects/d6/19c81a3de3b65562c1738d5a9fd6ad558cdd7b": "8a8f51675a7604cc22e94a11bbdb2dfd",
".git/objects/d6/37be81f7fd785f3b30ee23def1a9eae78164c0": "7bbb9927ad6908e802b0e7049f16588a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f9906087557c24eeb912378969f3600e548e76": "2aecf0a5ed44021d97490a6bc4eb4e1e",
".git/objects/d7/ecd27223280467ec923cfcc7ae11c1f90dab4d": "693108111401327d7db934b55b38ec64",
".git/objects/d8/7130bcb402b4393144d498845642ce949de345": "6608e118cca079c7c985aaf4425d6b8a",
".git/objects/d9/62a27572516c40ff93ff8e0be8762166e7ecba": "4096d0a57126ca393f57e10ec8a04786",
".git/objects/d9/7a630b8dc573e936eb14bcd170ee02dee6e653": "6bc74fca824858b57756cf202d1324ce",
".git/objects/d9/f4a4ed83f73f52accee7404a5d02c71d51458d": "3ca628cf83d6259af172c5e941bee5c2",
".git/objects/da/b9f97b0a926c7f207ea3d84d36b51648c94ccd": "11eb3eb96ec01a7724bfed2d14cf72ba",
".git/objects/db/3d419c1b5b7752b7b947daf2792a6dd9bd923b": "1298a6cb0c34f77fdbfb008bb2b09507",
".git/objects/de/bc11b5804aefa791fb12c5db60fdbff5b76173": "3e8c7f02546992b9229f9e8c0a072251",
".git/objects/df/41287e82c5a901effa3a0ed83359b24c40c77d": "2c302110b81bebccfa7b95d5eb656e08",
".git/objects/df/5dccf45342d4c23b12f2f9e0d05de50701a929": "c7cf054ec16fa419ab3bdb1e6b67fa72",
".git/objects/e0/b19fd82d372b634215e61b18e3c1106aa77588": "acddd435a1abad021fd0cbbeaa19565a",
".git/objects/e1/587a2ba552353e7af69490f9f5094d9c0d7da4": "27374f7c555220cfadf44360f5c06da2",
".git/objects/e1/c05fabb0f4cf95149d6fa3dc2d3a99d9b4af69": "44166622c3e4bb59448968fd0da16511",
".git/objects/e2/3351d35568d6549b0e7d4a432daf9087fc93fe": "4b94804585e7bedb6536cdb0a15e3629",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e3/dd0dff8d2635f0ad8c6e5f87aacefbe159aba2": "b8e27d1fec7d1f71787edde3fd414690",
".git/objects/e4/6aef8b1c59ce29043f90e41ee66ee71417f2ee": "144ec84139c992e25b53c802eee36c8f",
".git/objects/e6/29aca82edf25ff3e971fb633ff40a45464af3e": "22d45ef4453ec43684f6b5487298f7a0",
".git/objects/e6/3bf3df046a737c0ed783be4c5337ed0129ce2e": "f451ad9f30344fa829aa0041e42b29ad",
".git/objects/e7/082456d5144867c8d82bacf05c9d871d6e6fdd": "0f88feae45af5ba30add1c829e9e7775",
".git/objects/ea/b094ecbf33c2776dc7d225e9cbe3849f65d5ce": "d02e055338ba4c466809264690e92a5e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b2d1377ab4f3a0e2329beedc3dc6de52267d3b": "bf85c94ea6245b5897050a1032e9c08b",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/c241a4d23d991537f2a614f2058d32a34f2bbb": "66367dfbd37633daa933550c2d9ff981",
".git/objects/ef/6927a9831a4717a9d48037eb8b06dd37378aef": "02b233894d64cdcc62d72dc7305bac92",
".git/objects/ef/9ce250afd5b14de9e62625a619bf99d2806215": "03b1beea931d02feaa4054aa6c781c75",
".git/objects/f1/3c9417d74436f5d91819fa26a3e20d6dce34ce": "28d4ce1ab64748eefc57d8b4307f6a09",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/e54e22a00cbba67f001a35942fab417ec6eb21": "c8e89c46eb0fb7f5ff5708a293926cce",
".git/objects/f5/550d1941af92034bb705934a8335135896ec0e": "6ea85d1cd84dd60199f05b74df456b23",
".git/objects/f7/84b148f8045d9f5305ac8625a343450b550fcf": "d15fe00f641574da781dae20131cca25",
".git/objects/fa/4c370f929823ac6a7538b7cbf8f3ddb90ca692": "7ff9185168c079dd9b0acbcc39cd0237",
".git/objects/fb/010bf8680adaa9bc3c01b8a4951afb2d11befd": "4bb5883764892ccd7c9a2e2c06189d43",
".git/objects/fc/d36a681f134e63745cef65dbf1b41d462cc1fa": "5a1de135cb4d7d9c598f1fb2d294fbb4",
".git/objects/fc/efbd0c4e41d0b091196a0c1292e994943364b0": "fae909cb3bc820387097e5eca462de1f",
".git/objects/fe/38e175f4160b7ce7877a071e83401e6fc4ed27": "6eeb9a2504cb99667307bc558afdf270",
".git/objects/fe/3c027a573488f7731128361a747d03cf11f39a": "5a6b20160071afa085cd35fa7c2e2332",
".git/objects/fe/69baffb1aac403e801b0326fba0e28ad9ff8ac": "b7df48bf4c0973b4cd8d481df31851d5",
".git/objects/ff/c5c9b3a63654aba6c492ecc91ae2df15e1d3ab": "050ffaba3bca946bb60e22e66ecf815e",
".git/ORIG_HEAD": "13dfaa7b4ab660d22159314d0ae60992",
".git/refs/heads/main": "1dc7ddb912e2c0e2ca0dd3c267f333f1",
".git/refs/remotes/origin/main": "1dc7ddb912e2c0e2ca0dd3c267f333f1",
"assets/AssetManifest.bin": "309590145332e463d229a73aa2e65928",
"assets/AssetManifest.bin.json": "c991cfae55fdb816355c2183ae005e1f",
"assets/AssetManifest.json": "7b3830ceff0fdee4da15a67c7c72fe94",
"assets/assets/images/67908d02731aa811390f51dd_Surprising%2520Uses%2520of%2520Gold-%2520TB-p-500.jpg": "5382cabb9ddcf680f79138004c186318",
"assets/assets/images/Animation%2520-%25201736827058824.json": "3ecb7efb4a4417ae86b77f1c852affbd",
"assets/assets/images/Animation%2520-%25201736827135480.json": "75a2d2ff188381e35cd104cbe14cd4c9",
"assets/assets/images/Animation%2520-%25201736827163682.json": "d8a214d771b10cc3f8ac42ca4bb0d81f",
"assets/assets/images/apple-svgrepo-com.png": "b5f380621b3cbfbd66e6e2264670dc65",
"assets/assets/images/bank-card-svgrepo-com.png": "f71fd8d9c6dfcc5fc8056dc0e67d18da",
"assets/assets/images/bd_flag.png": "91d601cb3aa219e4ef505f7532c91ade",
"assets/assets/images/bkash.png": "91374b169308ba0911bafc0e5db1e2c8",
"assets/assets/images/digital_gold.jpg": "099480fbe20d0d9ebd1553c2c702c70d",
"assets/assets/images/energy-saving-light-bulbs-svgrepo-com.png": "ae0e08cf6f0d5f26a38aba5020925988",
"assets/assets/images/event-calender-date-note-svgrepo-com.png": "8b9546b3e710d4f2d44e2191b586da55",
"assets/assets/images/facebook-color-svgrepo-com.png": "45426ca50f1722823f894f85c93a4d18",
"assets/assets/images/gold1.png": "b4f522f50b6d384df859ae14504a315c",
"assets/assets/images/gold2.png": "e41b77a547e832a045cf51f20fba377a",
"assets/assets/images/instagram-1-svgrepo-com.png": "b80cf572bc04f9e188f646f1dff62a8a",
"assets/assets/images/linkedin-linked-in-svgrepo-com.png": "e3f86fcd3148466d5b1c197c0ae6531b",
"assets/assets/images/live.png": "bff54cbbb544966030bddb2711a692fe",
"assets/assets/images/logo.png": "cdc56ef45b63098803d767c9e2239b67",
"assets/assets/images/medal-quality-svgrepo-com%2520(1).png": "e718010f63f9025d75fa2be090019d3b",
"assets/assets/images/medal-quality-svgrepo-com.png": "44a6e7406b000a6afd2cebcb22b22f10",
"assets/assets/images/money-transfer-svgrepo-com.png": "54b77beb9b5f2b68cf02567d9e0facce",
"assets/assets/images/nagad.png": "63188bd74aba63d32140648b5a8ba5f8",
"assets/assets/images/p1.jpg": "01974500bc101277cb5e26bbbdcbe420",
"assets/assets/images/p2.jpg": "af9fe6b134b58595c099cc88b0fdf61b",
"assets/assets/images/p3.jpeg": "9ea75389bbb43af1fcf294d14e30a20a",
"assets/assets/images/playstore-svgrepo-com.png": "c8f68dd79fde2cf02cf80e1eb92b6324",
"assets/assets/images/profile3.jpg": "8d15f5f7feccd71308ce61290a5a653c",
"assets/assets/images/rocket-svgrepo-com.png": "6011a0f240d7e92bfe5d4bcc92d4d4c5",
"assets/assets/images/safety-certificate-svgrepo-com%2520(2).png": "847ca959edc6d2de1fe0a0e7f29292c9",
"assets/assets/images/settings-1-svgrepo-com.png": "8ae9b01956e3de5a1367120a867c2389",
"assets/assets/images/taka-square-2-svgrepo-com.png": "a1e22a946714be6b9f626fb91939ac0c",
"assets/assets/images/twitter-color-svgrepo-com.png": "6b19b94d97d6b3abb8ef0fd14ed61ecb",
"assets/assets/images/verified-check-svgrepo-com.png": "a9629132f0b368d1f40012fe18469ab0",
"assets/assets/images/write-svgrepo-com.png": "959e67e972d769885119b58fddd78850",
"assets/assets/images/youtube-color-svgrepo-com.png": "d5f0252a424fd1bf98350fa620e7036c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8a5c265525a8c54a94ea1ef62d132354",
"assets/NOTICES": "81ab807a8883cfa793ed3a1531e6f37e",
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
"flutter_bootstrap.js": "dc7e0241d6546ea27ec2c435af960a96",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0cf8d5b4bfb31d8b62b833f2177320bd",
"/": "0cf8d5b4bfb31d8b62b833f2177320bd",
"main.dart.js": "3d36ba84e5989d127f609ea8b84b207f",
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
