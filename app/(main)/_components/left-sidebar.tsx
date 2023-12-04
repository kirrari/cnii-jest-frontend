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

const LeftSidebar = () => {
  return (
    <aside className="sticky left-0 top-0 h-[calc(100vh-131px)] w-[450px] overflow-y-auto p-2 pt-12">
      <div className="flex">
        <div className="mr-2 flex w-[50%] flex-col gap-2 border-r pr-2">
          <Input placeholder="Введите название жеста..." />
          <ScrollArea className="h-72 text-muted-foreground">
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
            <p className="cursor-pointer px-1 hover:text-neutral-200">
              название жеста
            </p>
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
        <div className="flex w-[50%] flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">Название жеста</p>
            <img src="/jest.jpg" alt="Жест" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="truncate text-muted-foreground">
              Очень длинное название жеста
            </p>
            <img src="/jest.jpg" alt="Жест" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">Название жеста</p>
            <img src="/jest.jpg" alt="Жест" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">Название жеста</p>
            <img src="/jest.jpg" alt="Жест" />
          </div>
          <div className="flex h-12 items-center justify-between pt-1">
            <ChevronLeft className="h-8 w-8 cursor-pointer rounded-md p-2 transition hover:bg-secondary" />
            <div>1-4 из 206</div>
            <ChevronRight className="h-8 w-8 cursor-pointer rounded-md p-2 transition hover:bg-secondary" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
