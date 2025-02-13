import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Menu, Clock, Pencil, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useDrag } from "react-dnd";

export default function Task({name}) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "TASK",
    item: name,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Card className={`w-full ${isDragging ? 'opacity-40' : ''}`} ref={dragRef}>
      {/* Title and descri */}
      <CardHeader className="flex flex-col gap-2">
        <CardTitle>Title</CardTitle>
        <CardDescription>
          Deploy your new project in one-click. Deploy your new project in
          one-click Deploy your new project in one-click
        </CardDescription>
      </CardHeader>

      {/* Infos and actions */}
      <CardFooter className="flex gap-0 md:gap-2">
        {/* Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="px-3">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex">
            <DropdownMenuItem>
              <Button variant="ghost">
                <Pencil />
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="ghost">
                <Trash />
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex justify-center items-center gap-2 mr-4">
          <Clock size={18} />
          <span className="text-sm">July 15</span>
        </div>
        <Badge className={"w-[60px] flex justify-center items-center"}>
          High
        </Badge>
      </CardFooter>
    </Card>
  );
}
