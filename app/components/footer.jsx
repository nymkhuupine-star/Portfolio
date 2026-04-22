import { SITE } from "../site-config";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-6 text-sm text-foreground/60">
        <span>
          © {new Date().getFullYear()} {SITE.name}
        </span>
      </div>
    </footer>
  );
}
