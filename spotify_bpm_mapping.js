// BPMをキー、SpotifyのTrack IDを値にするシンプルな構造
const bpmTracks = {
  // 安静時〜通常時（細かく設定できている部分は1刻みでOK）
  60: "7xWKGIFGLxBJAyGSus7BOJ", // 藤井風 - It Ain't Over
  63: "1AVhV3FVQw7WykJ0gLc5kP", // Official髭男dism - B-Side Blues
  64: "0vsE2zwuBPjs87l1H1CVy9", // KIRINJI - 切り花
  65: "5ZkHkXPHrIM8K5twCe78i9", // Official髭男dism - Subtitle
  66: "2k1vN7Jk3OlZ9N8iKAbvMl", // 砂原良徳 - liminal
  67: "3VYGe2iv4Ja4KcgsKGhTZg", // 星野源 - くせのうた
  68: "7rSLSZWOvx67HWeUOBqze8", // 星野源 - 知らない
  69: "2p8ji4NXTvYvAIRnK2d1kH", // フジファブリック - 茜色の夕日
  70: "5edIhOs0VDrLQ2OJpm073N", // 星野源 - ある車掌
  71: "3AjWkkSzfXscmHM36bLvcB", // Serph - spica
  73: "6ddKElUUHo1Hz7oQIeuYee", // CHEMISTRY - YOUR NAME NEVER GONE
  74: "4WIgHH6A1NfPjIDTAoyvx9", // 砂原良徳 - SPIRAL NEVER BEFORE

  // やや高め（歩行時など・抜けがあってもOK）
  75: "0W7YTggTm2uArhg6NkSM4O", // KIRINJI - 千年紀末に降る雪は
  76: "0pZKKLXXpnZw6C9FOJZT5G", // 星野源 - 季節
  77: "2GMokQSuvlqqKwwW2VcbsH", // さよならポニーテール - 夏の魔法
  78: "3QQcmb87X6e10gdEXDx1ep", // 久石譲 - アシタカせっ記
  80: "2ZWZSHeia0Hjc7jWyk2Yar", // KIRINJI - Drifter
  81: "4NEeoX3J0fDr07btXPbcJj", // KIRINJI - 甘やかな身体
  82: "33Wlhcdz98rvYxIM7Kb1Lu", // さよならポニーテール - 思い出がカナしくなる前に
  83: "6FLwmdmW77N1Pxb1aWsZmO", // Enya - Only Time
  84: "1Vmkwb04H9XcrDYnILqQkl", // KIRINJI - ダンボールの宮殿
  85: "4Cn9b8yMxuumbGn3xGzc4R", // Cornelius - Drifts
  86: "5wWLNNwMAehpj83FU4Lz0m", // Official髭男dism - I LOVE...
  87: "1IAz8bEBFsOoosLueY1BPk", // フジファブリック - 陽炎
  88: "1YcrPcT05eI3ojtTpJO8cE", // 米津玄師 - Pale Blue
  89: "5axQcjuKcmhb8HLROC33Ic", // Nujabes - The Final View
  90: "3wwZjzgtS8cusMd9W3wS5t", // tofubeats - ふめつのこころ
  91: "6Dmxt4rbi97c7sjoWRrJoj", // 藤井風 - 帰ろう
  92: "4WZmHR7ZQKFAZS13A1GQuq", // KIRINJI - 恋の祭典
  93: "6FOHbQlxKvuINhu8lj7Y3X", // CHEMISTRY - Long Long Way
  94: "7vrOA8bQcuH4LSXSTBoPfr", // ユニコーン - スカイハイ
  95: "4kNxrOArNWlJ07Ab5DEFLv", // KIRINJI - ニュータウン
  96: "7vUOkb5Mw6S1VxOuC8mmUx", // KIRINJI - 雨を見くびるな
  97: "66hblHI9wl1Nim70ZYLb6D", // Official髭男dism - TATTOO
  98: "4dZmEDSl0FydEizlksVXKa", // KIRINJI - 君の胸に抱かれたい
  99: "5j3nCRdIUOMUhzT16OySHK", // 星野源 - 布団
  100: "6EaJ8O1qh3ycQxLkKUWLR8", // Perfume - マカロニ
  101: "0IByNT868RxZwmcj1rQgno", // 藤井風 - Prema
  102: "19ZdaOPHXZRN96iplaqtq7", // CHEMISTRY - So in Vain
  103: "6BFutHoFlckBLAkphyS1Fz", // サカナクション - years
  104: "3cc1ThSEvvpnEHIDuKSJOQ", // DE DE MOUSE - mur mur on my foot
  105: "2uFiFCwhttnQv32n3nUFsp", // DE DE MOUSE - festa de centauri
  106: "2awri5rPS65gXBN982s4Gt", // CHEMISTRY - PIECES OF A DREAM
  107: "5OzgSsv5LcsNxrEWNqyk0P", // CHEMISTRY - My Gift to You
  108: "14VESw2gqZanvfhCoAWizB", // □□□ - ヒップホップの初期衝動
  109: "4niqa7E9MKusXkFMUaqoGq", // RHYMESTER - The Choice Is Yours

  // 高心拍（運動時）
  110: "3Aj0zsny1zlTLevRxfEEKc", // 藤井風 - Hachiko
  111: "52UchVYXQRUsIgGptAA9Wa", // 椎名林檎 - おだいじに
  112: "3iB91ISmSGHImu3SN5V5SI", // サカナクション - ネイティブダンサー
  113: "2Veb4OI5wheLPHuJEs5JqH", // □□□ - 00:00:00
  114: "6FN5CD2GeJllQpn3IhkPol", // METAFIVE - Musical Chairs
  115: "45uzEq3hAOy8uayrvDLY2C", // 藤井風 - Love Like This
  116: "2Pl3yzkcEhuJVnCr168QRr", // DE DE MOUSE - Hello My Friend
  117: "3L7ISJTvKx56uhsF28aJ4p", // 藤井風 - きらり
  118: "4bM39Z3rhnPdYrgpG9VuCb", // Official髭男dism - 日常
  119: "7wnIzkN2sJx9NvA2BeWNkw", // METAFIVE - 環境と心理
  120: "0hUBKCiXqaDM1RkMKO1kpW", // 東京事変 - 能動的三分間
  121: "7EdmqWWP6TcLDMIaGQUYcL", // RHYMESTER - Deejay Deejay
  122: "3Cnz255gSbMsQEnr9BvD29", // tofubeats - RIVER
  123: "6XM8jnSqbjaDF9q5h9LN0p", // DE DE MOUSE - baby's star jam
  124: "5dH4asCl80Mvbsoz6zJVyZ", // フジファブリック - 若者のすべて
  125: "6VywhctCSuTZLG6dqtwdHZ", // Base Ball Bear, RHYMESTER - The Cut
  126: "4X6jKZPHkKLbrcEZu13VXK", // KIRINJI - 時間がない
  127: "1JCFR7eCPOjT4yPrkHrCxm", // DE DE MOUSE - east end girl(keeps singing)
  128: "5nWlvJzdhT2qiN82DR9zVP", // CAPSULE - WORLD OF FANTASY
  129: "2Ryp3TatqoqZqZdaexoQ49", // CAPSULE - Sugerless GiRL
  130: "0RQNobEInSRsTwpjrgcGcH", // DE DE MOUSE - my favorite swing
  131: "73In1YO2CihWOOsT1widqT", // Mike & Rich - Upright Kangaroo
  132: "3pUCQHDsQnbZjyN4sRIuQl", // CAPSULE - Hello
  133: "4w5sEO6WghNci3JMsgzkJK", // 電気グルーヴ - Fake It!
  134: "0f3Ce9xjHymExIpEyHUC8D", // 藤井風 - 優しさ
  135: "3Qw3mGrStjl4JC5BUMfu6m", // CAPSULE - more more more
  136: "3JCu8RlBuAPYCJHyPFB3QC", // サカナクション - ミュージック
  137: "0lWLvBmmKyS421MIJqy5u3", // tofubeats - RUN
  138: "3KoRusjVOMNalhsSGLn5p6", // DE DE MOUSE - Do You Feel Me
  139: "6E972B8mg76Pexq14YQ8Aq", // 砂原良徳 - BALANCE
  140: "5VTmAV2CWq0RuYulmNuVeI", // サカナクション - アイデンティティ
  142: "5Snmyurx2SgwT1BvUswGwg", // Official髭男dism - ホワイトノイズ
  143: "1EsNUlWprxAMInqFY7Y2Xv", // RHYMESTER - ゆめのしま
  144: "6maQNKBx5JU2DWSKBgJBU2", // Perfume - エレクトロ・ワールド
  145: "4sd5YjI03rQCkqMDKJ1JxB", // Perfume - NIGHT FLIGHT
  146: "1CCQ9EyjXTuZPMa8TLQ9Ib", // フジファブリック - クロニクル
  147: "0U9p7kMcU6DzOe1tLeT0xj", // さよならポニーテール - 秘密の時間
  148: "4CkDqV2LJaBQrxjo03YyTq", // METAFIVE - Chemical
  149: "0vDqNzQqEhl7boeRS3Joli", // M!LK - 好きすぎて滅！
  150: "2wdHnWbgLUS1GGyTjU2rJt", // Perfume - If you wanna
  151: "2uX0vNGL15tmFiwXljVvSI", // RIP SLYME - 熱帯夜
  152: "3aMfSGcXhB6Omt3NLVrqlo", // Base Ball Bear - short hair
  153: "0TZLpKwnbHQKbz6QqvdgdX", // Bandai Namco - RAGE RACER
  154: "7tIRL8nInt4GaLqwKewdTq", // 星野源 - ワークソング
  155: "0AppFJk1BDKDhOaYEgCpKW", // MEGA NRG MAN - GET ME POWER
  156: "4ICPyPdG8Dk6QMdnIennSJ", // Base Ball Bear - BREEEEZE GIRL
  157: "6ODZT1FGTE2q4two05giS1", // サカナクション - 新宝島
  158: "3uOcB2EJiiaur8BM6WkYbx", // Base Ball Bear - 愛してる
  159: "2iQY6uYD9UA2MXhLYODYVs", // BPM15Q - BPM15Q!
  160: "5jYQci7fS2BntSie9LoYwh", // Squarepusher - Stor Eiglass
  161: "4uCKn6FPZSCTCgM6kuj0XW", // Bandai Namco - SILVER STREAM
  162: "7fQYzYZBTWTybPSRFSdaHA", // YELLOW MAGIC ORCHESTRA - MULTIPLIES (THE MAGNIFICENT SEVEN)
  163: "0vsMJ9kZyVD3poXSisGZW7", // ユニコーン - WAO!
  164: "34SJ7qqVo7ccnhjpJynnAg", // CAPSULE - 東京喫茶
  165: "1Cdr2Eo0IqNcHEFeigpDcA", // METAFIVE - Gravetrippin'
  167: "3g77vEeCmTCUOt9Mobz6Od", // フジファブリック - Surfer King
  168: "5Mr3LASuPgcv05F0nVjbMt", // Squarepusher - Nervelevers
  169: "71wDBaqiuoKmCJX70SBMCk", // CAPSULE - CONTROL
  170: "52gj6bdUoPYu90VS3jBCZU", // Perfume - 未来のミュージアム
  171: "4PvRJcemaQHr9Sbo9wdCIg", // DE DE MOUSE - day all stars
  172: "7ae5VPwHosJeO5tZjJDpvt", // DE DE MOUSE - new town romancer
  174: "0x2IkEx6uaT6mTe3kUutDT", // DE DE MOUSE, 重音テト - Colorっぽ
  175: "3NxvisUhys0XjAIjSmiMAs", // DE DE MOUSE - satan disco 999
  176: "6ospm0piuzthdAunYS2YxL", // KIRINJI - 牡牛座ラプソディ
  177: "1kfoA7cWu2JD4EO0GzNn4t", // 郷ひろみ - GOLDFINGER'99
  178: "3l8RXsbWW77c5aY0VGEiwp", // フジファブリック - TAIFU
  179: "1sjRNTEKVCDy9nFN8KTSIa", // フジファブリック - 虹
  180: "6lk9HTCI3eCXERqBNIxWbm", // RIP SLYME - I・N・G
  183: "0ds9lct1rZPJ0dbsXBR6d1", // DE DE MOUSE - planet to planet
  185: "6e6s8Yq80zk5bVlqBby724", // CAPSULE - RGB
  187: "4tIVOQdwt7kxCISuXNF2S4", // 椎名林檎 - 迷彩
  188: "7h1qIQD9bQ5lavHoRf2Kf0", // 星野源 - 生命体
  189: "1waNDHnJwmYAfRfH96lvA1", // DE DE MOUSE - last boy dance
  190: "2ZEA14B61B2AoVrMQzPiwd", // Perfume - ナチュラルに恋して
  192: "1iQ2JAQrhk1rnClrcv6jhW", // 砂原良徳 - LOVEBEAT
  194: "2ox5d6LnfcxzHHI2zvFON2", // フジファブリック - モノノケハカランダ
  197: "7vhlCliwQ0Et1CcUsp4fpR", // DE DE MOUSE - play tag
  198: "0puZUrjhNhWl98RdE7YfNM", // 藤井風 - キリがないから
  200: "3quy9zQGrnCDNWh4ilIckB", // KIRINJI - ムラサキ☆サンセット
  202: "3D2xvTAmar3owBYBdJOYrv", // RIP SLYME - BLUE BE-BOP
  204: "2gamr8Kb8nWLLkojBlJ1Xz", // 砂原良徳 - Bluelight
  205: "3O4vZKO7NuMJTxaaI7pBVm", // RIP SLYME - SPEED KING
  208: "77OHQbdbuBFGUXeGfvjgCp", // YELLOW MAGIC ORCHESTRA - 1000 KNIVES
  210: "1M7mAUTaNmLiive7uioXK4", // RIP SLYME - Hot chocolate
  217: "5vDXcAAqMz9Gd0QkcwZFLW", // □□□ - Good Morning!

  // 🌟 GOD MODE用 (BPM 4000の時などに流す特別な曲)
  4000: "0tcjh3JEKmpEFunkf0ucdb", // Pia-no-jaC - 熊蜂の飛行
};
