
import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import Task from "./Task";
import { useDrop } from "react-dnd";

export default function ContainerTasksToDo() {

    const [{isOver}, dropref] = useDrop({
        accept: "TASK",
        drop: (item) => ondrop(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })

  return (
    <div ref={dropref} className={`p-4 border w-full h-auto min-h-[350px] rounded ${isOver ? 'bg-purple-500' : ''}`}>
        <div className="items-center flex justify-between">
          <h2 className="font-bold text-lg md:text-2xl">To Do</h2>
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
  )
}
