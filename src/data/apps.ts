export type AppStatus = 'live' | 'coming-soon'

export type App = {
  slug: string
  title: string
  description: string
  tags: string[]
  status: AppStatus
  href?: string
  iconSrc: string
  previewSrc: string
}

export const apps: App[] = [
  {
    slug: 'counter-plus',
    title: 'カウンター＋ 棚卸し',
    description:
      '複数項目をまとめて数え、タップのたびに端末内へ自動保存するカウンター。棚卸しや在庫確認、CSV出力にも使えます。',
    tags: ['iOS'],
    status: 'live',
    href: 'https://apps.apple.com/jp/app/%E3%82%AB%E3%82%A6%E3%83%B3%E3%82%BF%E3%83%BC-%E6%A3%9A%E5%8D%B8%E3%81%97/id6824777326',
    iconSrc: '/apps/counter-plus/icon.webp',
    previewSrc: '/apps/counter-plus/screenshot-01-home.webp',
  },
]
