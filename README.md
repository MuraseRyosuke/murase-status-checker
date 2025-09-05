# 村瀨亮介のリアルタイム健康診断 (Personal Status Checker)

[![Deploy GitHub Pages](https://github.com/muraseryosuke/murase-status-checker/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/muraseryosuke/murase-status-checker/actions/workflows/pages/pages--build-deployment)

Apple WatchとiPhoneで取得した自身のバイタルデータを、Web上にリアルタイムで表示するパーソナル・ステータスチェッカーです。

**[▶︎ 公開サイトはこちら](https://muraseryosuke.github.io/murase-status-checker/)**

---

## 概要

このプロジェクトは、私自身の「今」の状態を可視化することを目的としています。Apple Watchが自動的に記録するヘルスケアデータやiPhoneの情報を活用し、安否確認から日々の体調までを一覧できるダッシュボードを構築しました。

## 主な機能

* **安否確認**: 最終更新時刻に基づき、安否状況をページのテーマカラー（ライト/ダーク）と共に表示します。
* **ヘルスケアデータ**: 心拍数、歩数、消費カロリーなどの基本的な健康指標を表示します。
* **体調分析**: 心拍変動（HRV）を基準に、その日の体調を「良好」「普通」「要注意」の3段階で評価します。
* **睡眠記録**: 最新の睡眠セッションから、起床時刻を自動で表示します。
* **おおよその現在地**: iPhoneの位置情報から、現在いる市区町村名を表示します。
* **デバイス情報**: iPhoneのバッテリー残量と充電状況を表示します。
* **心電図風アニメーション**: 背景に心拍数と連動するアニメーションを表示し、ページのライブ感を演出します。
* **レスポンシブデザイン**: PC、タブレット、スマートフォンなど、あらゆるデバイスの画面サイズに最適化されています。

## 仕組み (アーキテクチャ)

このシステムは、3つの主要な要素が連携して動作しています。

1.  **📲 iPhone ショートカット (データ収集・送信)**
    iPhoneの「ショートカット」アプリが、設定されたトリガー（充電開始時、定時など）に基づき自動で起動します。HealthKitや位置情報サービスからデータを収集し、一つのJSONファイルに整形後、GitHub Gist APIを通じてデータを送信します。

2.  **📄 GitHub Gist (簡易データベース)**
    非公開（Secret）のGistを、最新のステータス情報を保管する簡易的なデータベースとして利用しています。ショートカットからのリクエストを受けるたびに、Gist上のJSONファイルが最新の情報で上書きされます。

3.  **🌐 GitHub Pages (フロントエンド)**
    公開Webサイト本体です。ユーザーがページにアクセスすると、`index.html`内のJavaScriptがGist APIを叩いて最新のJSONデータを取得します。取得したデータを解析し、ページの各要素に動的に反映させることで、リアルタイムな表示を実現しています。

## セットアップ方法

このプロジェクトを自身で再現する場合、以下の手順が必要です。

#### 必要なもの
* Apple Watch (ヘルスケアデータ自動記録のため)
* iPhone (ショートカット実行のため)
* GitHubアカウント

#### 手順
1.  **GitHub Gistとアクセストークンの準備**
    * `murase_status.json`のような名前で、非公開（Secret）のGistを1つ作成します。
    * [GitHubの設定ページ](https://github.com/settings/tokens)から、Gistへの`Read/Write`権限を持ったPersonal Access Tokenを生成し、安全な場所に保管します。

2.  **iPhoneショートカットの作成**
    * 「ショートカット」アプリで、本リポジトリのスクリーンショットを参考に、各種データを取得・整形するワークフローを構築します。
    * 最後に「URLの内容を取得」アクションを使い、Gist API (`https://api.github.com/gists/【あなたのGist ID】`) に対して`PATCH`メソッドでJSONデータを送信します。この際、`Authorization`ヘッダに先ほど生成したアクセストークンを指定します。
    * このショートカットを「オートメーション」で定期的に実行するように設定します。

3.  **GitHub Pagesの設定**
    * このリポジトリをフォークするか、`index.html`を参考に自身のWebサイトを構築します。
    * `index.html`内のJavaScriptで定義されている`gistId`の値を、自身が作成したGistのIDに書き換えます。
    * リポジトリ設定でGitHub Pagesを有効化し、サイトを公開します。


## ライセンス

This project is licensed under the MIT License.
