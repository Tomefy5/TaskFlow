import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import Task from "./Task";
import { useDrop } from "react-dnd";
import { useTaskStore } from "@/store/taskStore";
import { useEffect } from "react";
import { changeTaskStatus, fetchTasksToDo } from "@/services/taskServices";

export default function ContainerTasksToDo() {
  const { setTaskToDo, taskToDo, addNewTaskToDo, removeDoing, removeDone } =
    useTaskStore();

  const [{ isOver }, dropref] = useDrop({
    accept: "TASK",
    drop: (item) => dropHander(item),
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

  const dropHander = (item) => {
    if (item.source === "ToDo") {
      return;
    }

    const changeStatus = async () => {
      await changeTaskStatus(item._id, false);
    };
    changeStatus();
    addNewTaskToDo(item);

    const remover = () => {
      if (item.source === "Doing") {
        removeDoing(item._id);
      } else if (item.source === "Done") {
        removeDone(item._id);
      }
    };
    remover();
  };

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
          <Task key={index} task={task} currentStatus={"ToDo"} />
        ))}
      </div>
    </div>
  );
}
