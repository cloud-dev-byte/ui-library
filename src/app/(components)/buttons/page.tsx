import { CopyToClipboard } from "@/utils/copy-to-clipboard";
import { getComponentSource } from "@/utils/get-component-source";
import { buttons } from "@/registry/components/buttons";

export default async function ButtonsPage() {
  const buttonsWithSource = await Promise.all(
    buttons.map(async (button) => ({
      ...button,
      code: await getComponentSource("buttons", button.source),
    })),
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      {/* Header */}
      <div className="mb-12">
        <p className="text-sm font-medium text-violet-400">Components</p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Buttons
        </h1>

        <p className="mt-3 max-w-2xl text-zinc-500">
          Modern button designs that you can use directly in your projects.
        </p>
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-1 border-l border-t border-white/8 sm:grid-cols-2 lg:grid-cols-3">
        {buttonsWithSource.map((button) => {
          const Button = button.component;

          return (
            <div
              key={button.name}
              className="flex min-h-36 flex-col border-b border-r border-white/8"
            >
              {/* Preview */}
              <div className="flex flex-1 items-center justify-center bg-white/2 p-6">
                <Button />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/8 px-4 py-3">
                <h2 className="text-sm font-medium text-white">
                  {button.name}
                </h2>

                <CopyToClipboard code={button.code} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
