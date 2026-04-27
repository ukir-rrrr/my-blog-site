export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-black">404</h1>
      <p className="text-muted-foreground">ページが見つかりませんでした。</p>
      <a href="/" className="rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:border-primary/40 hover:text-primary">
        ホームへ戻る
      </a>
    </div>
  )
}
