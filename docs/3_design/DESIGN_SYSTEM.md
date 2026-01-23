# Design System

## Brand Identity

### Brand Personality

| 属性 | 説明 |
|------|------|
| トーン | [例: Professional yet approachable] |
| 印象 | [例: Modern, Clean, Trustworthy] |
| 禁止事項 | [例: Overly playful, Cluttered] |

---

## Colors

### Primary Palette

| 名前 | HEX | 用途 |
|------|-----|------|
| Primary | `#[HEX]` | メインアクション、ブランドカラー |
| Primary Hover | `#[HEX]` | ホバー状態 |
| Primary Light | `#[HEX]` | 背景、アクセント |

### Secondary Palette

| 名前 | HEX | 用途 |
|------|-----|------|
| Secondary | `#[HEX]` | サブアクション |
| Accent | `#[HEX]` | 強調表示 |

### Semantic Colors

| 名前 | HEX | 用途 |
|------|-----|------|
| Success | `#22C55E` | 成功メッセージ |
| Warning | `#F59E0B` | 警告メッセージ |
| Error | `#EF4444` | エラーメッセージ |
| Info | `#3B82F6` | 情報メッセージ |

### Neutral Colors

| 名前 | HEX | 用途 |
|------|-----|------|
| Background | `#FFFFFF` | ページ背景 |
| Surface | `#F9FAFB` | カード背景 |
| Border | `#E5E7EB` | 境界線 |
| Text Primary | `#111827` | 主要テキスト |
| Text Secondary | `#6B7280` | 補助テキスト |
| Text Muted | `#9CA3AF` | 薄いテキスト |

---

## Typography

### Font Family

```css
--font-sans: "Inter", system-ui, sans-serif;
--font-mono: "JetBrains Mono", monospace;
```

### Type Scale

| 名前 | Size | Line Height | Weight | 用途 |
|------|------|-------------|--------|------|
| Display | 48px | 1.1 | 700 | ヒーローセクション |
| H1 | 36px | 1.2 | 700 | ページタイトル |
| H2 | 30px | 1.3 | 600 | セクション見出し |
| H3 | 24px | 1.4 | 600 | サブセクション |
| H4 | 20px | 1.4 | 600 | カードタイトル |
| Body | 16px | 1.6 | 400 | 本文 |
| Small | 14px | 1.5 | 400 | 補助テキスト |
| Caption | 12px | 1.4 | 400 | キャプション |

---

## Spacing

### Base Unit

```
4px (0.25rem)
```

### Scale

| Token | Value | 用途 |
|-------|-------|------|
| `space-1` | 4px | 最小間隔 |
| `space-2` | 8px | 要素内パディング |
| `space-3` | 12px | 小さな間隔 |
| `space-4` | 16px | 標準間隔 |
| `space-6` | 24px | セクション間 |
| `space-8` | 32px | 大きな間隔 |
| `space-12` | 48px | セクション区切り |
| `space-16` | 64px | ページセクション |

---

## Components

### Buttons

| バリアント | 用途 | 例 |
|-----------|------|-----|
| Primary | 主要アクション | 保存、送信 |
| Secondary | 副次アクション | キャンセル |
| Ghost | 低強調アクション | 詳細を見る |
| Destructive | 削除・危険な操作 | 削除 |

**状態:**
- Default
- Hover
- Active
- Disabled
- Loading

### Form Elements

- Input: 単一行テキスト入力
- Textarea: 複数行テキスト入力
- Select: ドロップダウン選択
- Checkbox: 複数選択
- Radio: 単一選択
- Switch: ON/OFFトグル

### Cards

- Default: 標準カード
- Interactive: クリック可能なカード
- Highlighted: 強調カード

### Feedback

- Toast: 一時的な通知
- Alert: インライン通知
- Modal: 確認ダイアログ
- Skeleton: ローディング状態

---

## Layout

### Breakpoints

| 名前 | Width | 用途 |
|------|-------|------|
| sm | 640px | モバイル（横） |
| md | 768px | タブレット |
| lg | 1024px | 小型デスクトップ |
| xl | 1280px | デスクトップ |
| 2xl | 1536px | 大型デスクトップ |

### Container

```
Max Width: 1280px
Padding: 16px (mobile) / 24px (desktop)
```

### Grid

```
Columns: 12
Gutter: 24px
```

---

## Icons

### Icon Library

[使用するアイコンライブラリ: Lucide Icons]

### Usage Guidelines

- サイズ: 16px (small), 20px (default), 24px (large)
- 色: currentColor を継承
- ストローク幅: 2px

---

## Motion

### Duration

| 名前 | Value | 用途 |
|------|-------|------|
| Fast | 150ms | ホバー、トグル |
| Normal | 250ms | 開閉、遷移 |
| Slow | 400ms | ページ遷移 |

### Easing

```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

---

## Accessibility

### Requirements

- [ ] WCAG 2.1 AA準拠
- [ ] カラーコントラスト比 4.5:1 以上
- [ ] キーボードナビゲーション対応
- [ ] スクリーンリーダー対応
- [ ] フォーカス状態の可視化

---

*最終更新: YYYY-MM-DD*
