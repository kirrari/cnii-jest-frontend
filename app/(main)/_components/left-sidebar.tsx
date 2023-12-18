import usePosts from "@/actions/useJests";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const data = [
  "title",
  "title",
  "title",
  "title",
  "title",
  "title",
  "title",
  "title",
  "title",
  "title",
  "title",
  "title",
  "title",
  "title",
];

const LeftSidebar = () => {
  const { data: posts = [] } = usePosts();
  const [jestsPage, setJestsPage] = useState(1);
  const jestsPerPage = 4;
  const start = (jestsPage - 1) * jestsPerPage;
  const end =
    start + jestsPerPage > posts.length ? posts.length : start + jestsPerPage;
  const entries = posts.slice(start, end);

  const swipeLeft = () => {
    setJestsPage((prev) => (prev - 1 < 1 ? 1 : prev - 1));
  };

  const swipeRight = () => {
    setJestsPage((prev) =>
      prev + 1 > Math.ceil(posts.length / 4) ? prev : prev + 1,
    );
  };

  return (
    <aside className="sticky left-0 top-0 h-[calc(100vh-131px)] w-[450px] overflow-y-auto pt-8">
      <div className="flex">
        <div className="mr-2 flex w-[50%] flex-col gap-2 border-r px-2">
          <Input placeholder="Введите название жеста..." />
          <ScrollArea className="h-72 text-muted-foreground">
            <div className="flex flex-col">
              {posts.map((post: { id: number; name: string }) => (
                <Link
                  href={`/${post.id}`}
                  className="max-w-[190px] cursor-pointer truncate px-1 hover:text-neutral-200"
                  key={post.id}
                >
                  {post.name}
                </Link>
              ))}
            </div>
          </ScrollArea>
          <div className="mb-2 border-b pt-1" />
          <Button variant="secondary">Темы</Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div
                role="button"
                className="ml-auto flex h-full items-center justify-center rounded-md border p-2 text-[14px] transition hover:bg-neutral-300 dark:hover:bg-secondary"
              >
                <ChevronDown className="mr-2 h-5 w-5" />
                Лексикон
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[272px]"
              align="center"
              alignOffset={8}
              forceMount
            >
              <DropdownMenuItem>Наука</DropdownMenuItem>
              <DropdownMenuItem>Спорт</DropdownMenuItem>
              <DropdownMenuItem>Литература</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">Сброс фильтров</Button>
        </div>
        <div className="flex h-[690px] w-[50%] flex-col gap-2">
          {entries.map((post: { id: number; name: string }) => (
            <Link key={post.id} href={String(post.id)}>
              <div className="flex flex-col gap-1">
                <p className="truncate text-muted-foreground">{post.name}</p>
                <img src="/jest.jpg" alt="Жест" />
              </div>
            </Link>
          ))}
          <div className="mt-auto flex h-12 items-center justify-between gap-2 pt-1">
            <Button
              variant="secondary"
              className="px-2 py-0"
              onClick={swipeLeft}
            >
              <ChevronLeft className="h-8 w-8 p-2" />
            </Button>
            <div>
              {start + 1}-{end} из {posts.length}
            </div>
            <Button
              variant="secondary"
              className="px-2 py-0"
              onClick={swipeRight}
            >
              <ChevronRight className="h-8 w-8 p-2" />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
