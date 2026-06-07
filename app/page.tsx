const assets = [
  { name: "現金", icon: "💵", amount: 260000 },
  { name: "股票", icon: "📈", amount: 500000 },
  { name: "ETF", icon: "📊", amount: 300000 },
  { name: "房地產", icon: "🏠", amount: 17480000 },
];

const assetTrend = [
  { label: "本月", amount: 17800000 },
  { label: "本季", amount: 18100000 },
  { label: "本年", amount: 18540000 },
];

export default function Home() {
  const totalAssets = assets.reduce((sum, asset) => sum + asset.amount, 0);
  const totalLiabilities = 16600000;
  const netWorth = totalAssets - totalLiabilities;
  const fireTarget = 15000000;
  const fireProgress = (netWorth / fireTarget) * 100;
  const fireRemaining = fireTarget - netWorth;
  const realEstate = assets.find((asset) => asset.name === "房地產")?.amount ?? 0;
  const propertyEquity = realEstate - totalLiabilities;

  return (
    <main className="min-h-screen bg-black px-5 py-6 text-white">
      <div className="mx-auto max-w-5xl font-sans">
        <header className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              💎 美麗資產筆記
            </h1>
            <p className="mt-1 text-sm text-zinc-500">
              個人資產與 FIRE 進度
            </p>
          </div>

          <p className="hidden rounded-full border border-zinc-800 px-4 py-2 text-xs text-zinc-500 md:block">
            Last updated · 2026
          </p>
        </header>

        <section className="rounded-[32px] border border-zinc-800 bg-zinc-950 p-6 md:p-8">
          <p className="text-sm text-zinc-500">今日淨資產</p>

          <h2 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
            ${netWorth.toLocaleString()}
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <MiniStat title="總資產" value={totalAssets} />
            <MiniStat title="總負債" value={totalLiabilities} />
            <MiniStat title="距離 FIRE" value={Math.max(fireRemaining, 0)} />
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-2">
          <section className="rounded-[28px] border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-zinc-500">FIRE 進度</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                  {fireProgress.toFixed(1)}%
                </h3>
              </div>

              <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
                目標 ${fireTarget.toLocaleString()}
              </div>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-white transition-all duration-700"
                style={{ width: `${Math.min(fireProgress, 100)}%` }}
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <SmallCard title="目前淨資產" value={netWorth} />
              <SmallCard title="剩餘金額" value={Math.max(fireRemaining, 0)} />
            </div>
          </section>

          <section className="rounded-[28px] border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm text-zinc-500">房地產淨值</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight">
              ${propertyEquity.toLocaleString()}
            </h3>

            <div className="mt-6 space-y-4">
              <Row label="房地產市值" value={realEstate} />
              <Row label="房貸與信貸" value={totalLiabilities} />
              <Row label="房產淨值" value={propertyEquity} />
            </div>
          </section>
        </section>

        <section className="mt-5 rounded-[28px] border border-zinc-800 bg-zinc-950 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold tracking-tight">
              資產趨勢
            </h3>
            <p className="text-sm text-zinc-500">簡易版</p>
          </div>

          <div className="mt-6 flex h-48 items-end gap-4">
            {assetTrend.map((item) => {
              const max = Math.max(...assetTrend.map((trend) => trend.amount));
              const height = (item.amount / max) * 100;

              return (
                <div key={item.label} className="flex flex-1 flex-col items-center gap-3">
                  <div className="flex h-36 w-full items-end rounded-2xl bg-zinc-900 p-2">
                    <div
                      className="w-full rounded-xl bg-zinc-300 transition-all duration-700"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-zinc-400">{item.label}</p>
                    <p className="mt-1 text-sm font-medium">
                      ${item.amount.toLocaleString()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-5 rounded-[28px] border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-xl font-semibold tracking-tight">資產配置</h3>

          <div className="mt-5 space-y-4">
            {assets.map((asset) => {
              const percent = (asset.amount / totalAssets) * 100;

              return (
                <div key={asset.name}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{asset.icon}</span>
                      <span className="text-base text-zinc-200">
                        {asset.name}
                      </span>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-medium">
                        ${asset.amount.toLocaleString()}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {percent.toFixed(1)}%
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-zinc-300"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

function MiniStat({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-[22px] bg-black/40 p-4">
      <p className="text-sm text-zinc-500">{title}</p>
      <p className="mt-2 text-xl font-semibold tracking-tight">
        ${value.toLocaleString()}
      </p>
    </div>
  );
}

function SmallCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-[20px] border border-zinc-800 bg-black/40 p-4">
      <p className="text-xs text-zinc-500">{title}</p>
      <p className="mt-2 text-lg font-semibold">${value.toLocaleString()}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-zinc-500">{label}</span>
      <span className="font-medium">${value.toLocaleString()}</span>
    </div>
  );
}