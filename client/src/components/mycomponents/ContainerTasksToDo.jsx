import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import Task from "./Task";
import { useDrop } from "react-dnd";
import { useTaskStore } from "@/store/taskStore";
import { useEffect } from "react";
import { fetchTasksToDo } from "@/services/taskServices";

export default function ContainerTasksToDo() {
  const setTaskToDo = useTaskStore((state) => state.setTaskToDo);
  const taskToDo = useTaskStore((state) => state.taskToDo);

  const [{ isOver }, dropref] = useDrop({
    accept: "TASK",
    drop: (item) => ondrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksToDo = await fetchTasksToDo(false, false); // isFinished and isDoing
        setTaskToDo(tasksToDo);
      } catch (error) {
        console.error("Error on fetching tasks:", error);
      }
    };
    fetchTasks();
  }, [setTaskToDo]);

  return (
    <div
      ref={dropref}
      className={`p-4 border w-full h-auto min-h-[350px] rounded ${
        isOver ? "bg-purple-500" : ""
      }`}
    >
      <div className="items-center flex justify-between">
        <h2 className="font-bold text-lg md:text-2xl">To Do</h2>
        <Button variant="ghost" className="flex justify-center items-center">
          <Ellipsis />
        </Button>
      </div>
      {/*//!List todo */}
      <div className="flex flex-col gap-3 my-4 max-h-[70vh] overflow-auto p-2">
        {taskToDo.map((task, index) => (
          <Task key={index} task={task}/>
        ))}
      </div>
    </div>
  );
}
