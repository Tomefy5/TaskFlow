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
import { useTaskStore } from "@/store/taskStore";
import { deleteTask } from "@/services/taskServices";

export default function Task({ name, task }) {

  const deleteTaskFromStore = useTaskStore(state => state.deleteTaskFromStore);

  const [{ isDragging }, dragRef] = useDrag({
    type: "TASK",
    item: name,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleTaskDelete = async (task) => {
    await deleteTask(task._id);
    deleteTaskFromStore(task);
  }

  return (
    <Card className={`w-full ${isDragging ? "opacity-40" : ""}`} ref={dragRef}>
      {/* Title and descri */}
      <CardHeader className="flex flex-col gap-2">
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
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
              <Button onClick={() => handleTaskDelete(task)} variant="ghost">
                <Trash />
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex justify-center items-center gap-2 mr-4">
          <Clock size={18} />
          <span className="text-sm">
            {task.deadline
              ? new Date(task.deadline).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "None"}
          </span>
        </div>
        <Badge className={"w-[60px] flex justify-center items-center"}>
          {task.priority}
        </Badge>
      </CardFooter>
    </Card>
  );
}
