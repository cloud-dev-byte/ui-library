import { cards } from "@/registry/components/cards";
import { CopyToClipboard } from "@/utils/copy-to-clipboard";
import { getComponentSource } from "@/utils/get-component-source";

export default async function CardsPage() {
  const cardsWithSource = await Promise.all(
    cards.map(async (card) => ({
      ...card,
      code: await getComponentSource("cards", card.source),
    })),
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      {/* Header */}
      <div className="mb-12">
        <p className="text-sm font-medium text-violet-400">Components</p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Cards
        </h1>

        <p className="mt-3 max-w-2xl text-zinc-500">
          Beautiful card designs for profiles, products, pricing, dashboards,
          articles, and more.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 border-l border-t border-white/8 sm:grid-cols-2 lg:grid-cols-3">
        {cardsWithSource.map((card) => {
          const Card = card.component;

          return (
            <div
              key={card.name}
              className="flex min-h-72 flex-col border-b border-r border-white/8"
            >
              {/* Preview */}
              <div className="flex flex-1 items-center justify-center overflow-hidden bg-white/2 p-6">
                <Card />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/8 px-4 py-3">
                <h2 className="text-sm font-medium text-white">{card.name}</h2>

                <CopyToClipboard code={card.code} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
