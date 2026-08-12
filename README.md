# Murase Status Checker (2026 Stable) 🏥

> **村瀨亮介のリアルタイム健康診断 / Real-time Health Status Dashboard**
> Apple Watchのヘルスケアデータを活用した、サーバーレスの安否確認・体調可視化システム。

[![Deploy GitHub Pages](https://github.com/muraseryosuke/murase-status-checker/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/muraseryosuke/murase-status-checker/actions/workflows/pages/pages-build-deployment)
![Status](https://img.shields.io/badge/Status-Alive-success?style=flat-square)
![Year](https://img.shields.io/badge/2026-Stable-orange?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

+ **[▶︎ 公開サイト (Live Site)](https://status.muraseryosuke.info)**

---

## 📖 概要

このプロジェクトは、私（村瀨亮介）自身の「今」の生体情報と環境コンテキストをリアルタイムでWeb上に可視化するダッシュボードです。

Apple Watchが収集するヘルスケアデータ（心拍、活動量、歩行バランスなど）と、iPhoneの環境情報（位置、騒音レベル）を組み合わせ、**「生存しているか」「体調は安定しているか」「今どんな環境にいるか」** をひと目で把握できるように設計されています。

さらに、フロントエンド技術（JavaScript / CSSアニメーション / WebGLなど）を駆使し、BPM連動の音楽再生や、特定の操作を行うことで発動する**カオスなシークレット演出**など、開発者としての遊び心（Easter Eggs）を隠し味として詰め込んでいます。

## ✨ 主な機能

### 1. ❤️ バイタル & コンディション
* **リアルタイム心拍数**: 最新の心拍数と安静時心拍数(RHR)を表示。背後には心電図（ECG）アニメーションがリアルタイムのBPMに合わせて稼働します。
* **体調自動判定**: 心拍変動（HRV）の数値を個人のベースラインと比較し、「絶好調・安定・疲労気味」の3段階でコンディションを自動評価します。

### 2. 🏃 アクティビティ & モビリティ
* **活動量**: 歩数、アクティブエネルギー、スタンド回数、上った階数を集計。
* **歩行の質**: 「歩行速度」に加え、「歩行非対称性（身体バランスの崩れ）」を可視化。非対称性の数値に合わせてリアルタイムに傾く「デジタル水平器」を搭載しています。
* **サイバー・スピードメーター**: 歩行速度カードの外枠に、CPUメーター風の非線形メーターを描画。描画の先端は常に微細なノイズでプルプルと震え続け、生命感を感じさせるサイバーな演出を組み込んでいます。

### 3. 🎵 環境音響 & 音楽同期 (Spotify Integration)
* **環境音レベル**: 騒音レベル(dB)を表示し、静かな場所にいるか騒がしい場所にいるかを伝えます。
* **BPM同期オーディオ**: 現在の心拍数（BPM）を読み取り、事前にマッピングされたSpotifyのプレイリストから、**テンポが合致する楽曲を自動で選曲してIFrame APIで再生**します。

### 4. 🛡️ 安否確認 (Liveness Check)
* **自動モード切替**: 最終データ更新から一定時間（デフォルト: 13時間）以上経過すると、画面が自動的に「安否不明モード（Dark Mode）」に切り替わり、警告テープ（Blockade Tape）が展開されます。
* **GitHub Actions監視**: 72時間以上更新がない場合は緊急通知（プッシュ通知）を発報します。

### 5. 👋 インタラクション (Tune)
* **双方向通信**: サイト訪問者が「Tune」ボタンを押すと、管理者のスマートフォンにプッシュ通知(ntfy.sh)が届きます。「見ているよ」という合図を送れる緩やかなコミュニケーション機能です。

---

## 🎮 隠し要素 (Easter Eggs)

本サイトには、閲覧者を楽しませる（あるいは困惑させる）ための**シークレット機能**が複数実装されています。

特定の場所を一定回数タップしたり、キーボードで「誰もが知っているあのコマンド」を入力したりすると、サイトの様子が一変するかもしれません。どんな機能が隠されているのか、ぜひご自身の目で探してみてください。

---

## 🏗 システム構成 (アーキテクチャ)

サーバー代をかけず、堅牢かつメンテナンスフリーな構成を採用しています。

1. **📲 iOS Shortcuts (Edge Device)**
    * 定期オートメーションにより、ヘルスケア(HealthKit)からデータを取得・集計。
    * データの欠損処理やフォーマットを行い、JSONを生成して送信します。
2. **🔒 GitHub Gist (Database)**
    * 非公開(Secret)のGistをJSONデータベースとして利用。
    * ショートカットからの`PATCH`リクエストを受け付け、常に最新のステータスを保持します。
3. **🌐 GitHub Pages (Frontend)**
    * HTML/CSS/JSのみで構成されたSPA。
    * リッチな演出や重いアセットは `jsDelivr CDN` などを経由して動的に読み込ませることで、初期表示の爆速化と軽量化を両立しています。
4. **🤖 GitHub Actions (Watchdog)**
    * 定期的にGistの状態をチェックし、長期間更新がない場合に管理者へ警告を送ります。

## 📂 ディレクトリ構成

```text
.
├── .github/
│   └── workflows/
│       └── watchdog.yml    # 生存監視・自動通知ワークフロー
├── index.html              # ダッシュボード本体 (Logic & UI)
├── spotify_bpm_mapping.js  # BPMとSpotifyトラックIDの同期用マッピング定義ファイル
├── OneSignalSDKWorker.js   # 通知機能用 Service Worker (Main)
├── OneSignalSDK.sw.js      # 通知機能用 Service Worker (Fallback)
├── CNAME                   # カスタムドメイン設定
├── .nojekyll               # Jekyll処理無効化設定
├── LICENSE                 # ライセンスファイル
├── ogp.webp                # OGP画像・プロフィールアイコン
└── README.md               # 本ドキュメント
```

## 🚀 セットアップ (再現手順)

このシステムをご自身の環境で再現・フォークして利用する場合の手順です。

### 前提条件
* Apple Watch (Series 4以降推奨)
* iPhone (iOS 15以降)
* GitHubアカウント

### 手順

#### 1. GitHub Gistの準備
1. [GitHub Gist](https://gist.github.com/) で新規Gistを作成します。
2. ファイル名を任意の名前（例: `status.json`）とし、中身を `{}` にして "Create secret gist" で保存します。
3. 作成後のURL末尾にある英数字列（**Gist ID**）を控えます。
4. GitHub設定から、Gistの書き込み権限（`gist` scope）を持つ **Personal Access Token** を発行します。

#### 2. iOSショートカットの導入
以下のリンクから、データ送信用のショートカットをiPhoneに追加してください。
このショートカットは、ヘルスケアデータの集計（合計・平均・最新値の取得）を行い、Gistへ送信するようプログラムされています。

👉 **[Download iOS Shortcut (v2026.1)](https://www.icloud.com/shortcuts/9e2c75537acc4bac94d19c8a9398a211)**

ショートカットの設定画面で、手順1で取得した情報を入力します：
* `Gist ID`: 手順1で取得したID
* `GitHub Token`: 手順1で取得したトークン
* `File Name`: 手順1で決めたファイル名（例: `status.json`）

#### 3. Webサイトの設定 (`index.html`)
このリポジトリをフォークし、`index.html` 内の `AppConfig` および判定ロジックをご自身の環境に合わせて書き換えてください。

**必須設定:**
```javascript
const AppConfig = {
    gistId: 'ここにあなたのGist_IDを入力',
    gistFileName: 'あなたが設定したファイル名.json', // e.g. 'status.json'
    thresholdHours: 13, // 安否不明と判定する閾値(時間)
    // ...
};
```

## 📜 ライセンス

Copyright © 2026 Ryosuke Murase.
This project is licensed under the MIT License.
