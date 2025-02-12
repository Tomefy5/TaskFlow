import { Button } from "../ui/button";
import Task from "./Task";
import { Ellipsis } from "lucide-react";

export default function ContainerTasks() {
  return (
    <div className="p-2 w-[75%] mt-10 grid grid-cols-1 min-w-[320px] xl:grid-cols-3 gap-4 mx-auto">
      {/* List of to do */}
      <div className="p-4 border w-full h-auto min-h-[350px] rounded">
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

      {/* Task doing */}
      <div className="p-4 border w-full h-auto min-h-[350px] rounded">
        <div className="items-center flex justify-between">
          <h2 className="font-bold text-lg md:text-2xl">Doing</h2>
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

      {/* Tasks Done */}
      <div className="p-4 border w-full h-auto min-h-[350px] rounded">
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
    </div>
  );
}
