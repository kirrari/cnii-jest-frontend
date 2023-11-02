"use client";

import { cn } from "@/lib/utils";

const headings = [
  { title: "Жест", href: "#gesture" },
  { title: "Слова", href: "#words" },
  { title: "Наименование понятий", href: "#naming-of-concepts" },
  { title: "Положительный контекст", href: "#positive-context" },
  { title: "Отрицательный контекст", href: "#negative-context" },
  { title: "Описание", href: "#description" },
  { title: "Этимология", href: "#etymology" },
  { title: "Библиография", href: "#bibliography" },
];

type RightSidebarProps = {
  isScrolled?: boolean;
};

const RightSidebar = ({ isScrolled }: RightSidebarProps) => {
  return (
    <aside className="sticky right-0 top-0 h-[calc(100vh-131px)] w-48 overflow-y-auto p-2 pt-12">
      <div className="flex h-96 flex-col gap-2 transition">
        {headings.map((heading) => (
          <a
            key={heading.href}
            className="leading-5 text-muted-foreground transition hover:text-neutral-200"
            href={heading.href}
          >
            {heading.title}
          </a>
        ))}
        <a
          className={cn(
            "mt-2 border-t pt-3 text-muted-foreground transition hover:text-neutral-200",
            isScrolled ? "opacity-100" : "opacity-0",
          )}
          href="#header"
        >
          Вернуться в начало
        </a>
      </div>
    </aside>
  );
};

export default RightSidebar;
