"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Languages, Settings, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const basicLinks = [
  { title: "Жестово-русский словарь", pathname: "/" },
  { title: "Русско-жестовый словарь", pathname: "/" },
  { title: "Морфология", pathname: "/" },
];

const otherLinks = [
  { title: "Сурдоцентр", pathname: "/" },
  { title: "О словаре", pathname: "/" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header id="header" className="w-full border-b bg-[#09090b] bg-opacity-75">
      <nav className="mx-auto flex max-w-[1200px] justify-between gap-2 px-8 py-3">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-4">
            <Image
              width="60"
              height="60"
              alt="Логотип"
              src="/header-logo.png"
            />
            <div>
              <p className="text-[14px]">
                Электронная справочно-аналитическая система
              </p>
              <p className="text-[14px]">
                Мультиязычный толковый лексикографический словарь жестового
                языка
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Input type="text" placeholder="Найти жест по №..." />
          <Button variant="outline">
            <User />
          </Button>
          <Button variant="outline">
            <Settings />
          </Button>
          <Button variant="outline">
            <Languages />
          </Button>
        </div>
      </nav>
      <div className="border-b" />
      <nav className="sticky-72 mx-auto flex max-w-[1200px] justify-center px-8 py-3">
        <div className="flex w-full justify-between">
          <div className="flex gap-3">
            {basicLinks.map((link) => (
              <Link
                key={link.title}
                href={pathname}
                className={cn(
                  "text-[14px] text-muted-foreground transition",
                  link.title === "Жестово-русский словарь"
                    ? "text-sky-400 hover:text-neutral-100"
                    : "hover:text-sky-400",
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            {otherLinks.map((link) => (
              <Link
                key={link.title}
                href={pathname}
                className={cn(
                  "text-[14px] text-muted-foreground transition",
                  link.title === "Жестово-русский словарь"
                    ? "text-sky-400 hover:text-neutral-100"
                    : "hover:text-sky-400",
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
