import { siteConfig } from "./site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-800">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-6 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>

        <p>Open source UI for developers.</p>
      </div>
    </footer>
  );
}
