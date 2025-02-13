import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import Task from "./Task";
import { useDrop } from "react-dnd";

export default function ContainerTasksDone() {
  const [{ isOver }, dropref] = useDrop({
    accept: "TASK",
    drop: (item) => ondrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={dropref}
      className={`p-4 border w-full h-auto min-h-[350px] rounded ${
        isOver ? "bg-red-300" : ""
      }`}
    >
      <div className="items-center flex justify-between">
        <h2 className="font-bold text-lg md:text-2xl">Done</h2>
        <Button variant="ghost" className="flex justify-center items-center">
          <Ellipsis />
        </Button>
      </div>
      {/*//!List todo */}
      <div className="flex flex-col gap-3 my-4">
        <Task />
        <Task />
      </div>
    </div>
  );
}
