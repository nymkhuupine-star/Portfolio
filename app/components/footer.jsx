"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-foreground/5 bg-background py-8 px-4 relative z-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-y-4 sm:flex-row text-xs sm:text-sm font-medium text-foreground/40">
        
        {/* Зүүн тал: Зохиогчийн эрх */}
        <div className="flex items-center gap-x-1">
          <span>© {currentYear}</span>
          <a 
            href="https://nyamkhuu.dev" 
            className="text-foreground/60 transition-colors hover:text-foreground underline underline-offset-4 decoration-foreground/10 hover:decoration-foreground"
          >
           
          </a>
          <span>Бүх эрх хуулиар хамгаалагдсан.</span>
        </div>

        {/* Баруун тал: Сошиал холбоосууд */}
        <div className="flex items-center gap-x-5 text-foreground/50">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <span className="text-foreground/10 select-none">•</span>
          <a 
            href="https://www.instagram.com/bydeveloper__/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-colors hover:text-foreground"
          >
            Instagram
          </a>
          <span className="text-foreground/10 select-none">•</span>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-colors hover:text-foreground"
          >
            X (Twitter)
          </a>
        </div>

      </div>
    </footer>
  )
}
