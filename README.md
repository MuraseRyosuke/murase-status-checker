# 村瀨亮介のリアルタイム健康診断 (Personal Status Checker)

[![Deploy GitHub Pages](https://github.com/muraseryosuke/murase-status-checker/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/muraseryosuke/murase-status-checker/actions/workflows/pages/pages-build-deployment)

Apple WatchとiPhoneで取得した自身のバイタルデータと環境情報を、Web上にリアルタイムで表示するパーソナル・ステータスチェッカーです。

+ **[▶︎ 公開サイトはこちら](https://status.muraseryosuke.info)**

---

## 概要

このプロジェクトは、私自身の「今」の状態（生存、活動、環境）を可視化することを目的としています。Apple Watchが自動的に記録するヘルスケアデータや、iPhoneの位置情報・環境音レベルなどを活用し、安否確認から「今どこで何をしているか」のコンテキストまでを一覧できるダッシュボードです。

## 主な機能

* **安否確認 (Liveness Check)**: 最終更新時刻に基づき、安否状況を判定。「生存（応答あり）」ならライトモード、「応答なし」ならダークモードへ自動で切り替わります。
* **ヘルスケアデータ**: 心拍数、歩数、消費カロリーなどの基本的な健康指標を表示します。
* **環境コンテキスト**: Apple Watchのマイクから取得した「環境音レベル(dB)」を表示し、現在いる場所が「静寂」か「騒音」かを可視化します。
* **体調分析**: 心拍変動（HRV）を基準に、その日の自律神経の状態を「良好」「普通」「要注意」の3段階で評価します。
* **Tune機能 (インタラクション)**: サイト訪問者が「Tune」ボタンを押すことで、本人に「見ているよ（生存確認）」の合図（通知）を送れる双方向機能です。
* **緊急時UI**: スマートフォン表示において、ステータスが「応答なし」の場合、Tuneボタンが画面上部（心拍数の下）に自動移動し、アクションを促すUX設計になっています。
* **おおよその現在地**: iPhoneの位置情報から、現在いる市区町村名を表示します。
* **デバイス情報**: iPhoneのバッテリー残量と充電状況を表示します。
* **心電図風アニメーション**: 背景に心拍数と連動するアニメーションを表示し、ページのライブ感を演出します。

## 仕組み (アーキテクチャ)

このシステムは、以下の3つの要素が連携して動作しています。

1.  **📲 iPhone ショートカット (データ収集・整形)**
    iPhoneの「ショートカット」アプリが自動で起動し、HealthKit（心拍、歩数、HRV、環境音など）や位置情報を収集します。これらをJSON形式に整形し、GitHub Gist APIを通じて送信します。
    * *工夫点*: データ欠損によるエラーを防ぐため、全ての数値を文字列として扱う堅牢なJSON設計を採用しています。

2.  **📄 GitHub Gist (バックエンド/DB)**
    非公開（Secret）のGistを、最新のステータス情報を保管する簡易的なデータベースとして利用しています。ショートカットからの`PATCH`リクエストにより、JSONファイルが常に最新の状態に更新されます。

3.  **🌐 GitHub Pages (フロントエンド)**
    公開Webサイト本体です。`index.html`内のJavaScriptがGist APIを叩いて最新のJSONを取得・解析し、DOMを書き換えることでリアルタイム表示を実現しています。

## ディレクトリ構成

```text
.
├── index.html      # メインのダッシュボード (HTML/CSS/JS)
├── ogp.webp        # OGP画像・プロフィールアイコン
└── README.md       # 本ドキュメント
```

## セットアップ方法 (再現手順)

このプロジェクトを自身でフォークして利用する場合の手順です。

#### 必要なもの
* Apple Watch (Series 4以降推奨 / SEでも可)
* iPhone (iOS 15以降)
* GitHubアカウント

#### 手順
1.  **GitHub Gistとトークンの準備**
    * `murase_status.json`というファイル名で、非公開（Secret）のGistを作成し、中身を`{}`にして保存します。
    * Gist ID（URLの末尾の文字列）を控えます。
    * GitHub設定から、Gistの編集権限（`gist` scope）を持つPersonal Access Tokenを作成します。

2.  **iPhoneショートカットの作成**
    * ショートカットアプリで、ヘルスケアデータを取得し、以下のJSON構造を作成するフローを組みます。
    ```json
    {
      "files": {
        "murase_status.json": {
           "content": "{\"last_updated\": \"...\", \"health\": { ... } }"
        }
      }
    }
    ```
    * **重要**: Gist APIの仕様上、データ本体は「文字列化されたJSON（Stringified JSON）」として`content`キーに入れる必要があります。ショートカットの「辞書」アクション等を活用して構築してください。
    * 最後に「URLの内容を取得」アクションで、Gist APIに対し`PATCH`メソッドで送信します。

3.  **Webサイトの設定**
    * `index.html`内の`CONFIG`オブジェクトにある`gistId`を、あなたのGist IDに書き換えます。
    * Tune機能を使用する場合は、[ntfy.sh](https://ntfy.sh)などのプッシュ通知サービスのトピックを設定してください。

## ライセンス

This project is licensed under the MIT License.
