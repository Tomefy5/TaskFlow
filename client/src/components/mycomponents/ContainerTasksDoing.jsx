import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import Task from "./Task";
import { useDrop } from "react-dnd";
import { useTaskStore } from "@/store/taskStore";
import { useEffect } from "react";
import { changeTaskStatus, fetchTasksToDo } from "@/services/taskServices";
import { useUserStore } from "@/store/userStore";

export default function ContainerTasksDoing() {
  const { taskDoing, setTaskDoing, addNewTaskDoing, removeDone, removeToDo } =
    useTaskStore();

    const { user } = useUserStore();

  const [{ isOver }, dropref] = useDrop({
    accept: "TASK",
    drop: (item) => dropHander(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  useEffect(() => {
    try {
      const fetchingTask = async () => {
        const tasks = await fetchTasksToDo(user._id, false, true);
        setTaskDoing(tasks);
      };

      fetchingTask();
    } catch (error) {
      console.error("Error on fetching tasks: ", error.message);
    }
  }, [setTaskDoing, user]);

  const dropHander = (item) => {
    if (item.source === "Doing") {
      return;
    }

    const changeStatus = async () => {
      await changeTaskStatus(item._id, false);
    };
    changeStatus();
    addNewTaskDoing(item);

    const remover = () => {
      if (item.source === "Done") {
        removeDone(item._id);
      } else if (item.source === "ToDo") {
        removeToDo(item._id);
      }
    };
    remover();
  };

  return (
    <div
      ref={dropref}
      className={`transition-all duration-150 p-4 border w-full h-auto min-h-[350px] rounded ${
        isOver ? "bg-black bg-opacity-90" : ""
      }`}
    >
      <div className="items-center flex justify-between">
        <h2 className={`${isOver ? "text-white": ""} font-bold text-lg md:text-2xl`}>Doing</h2>
        <Button variant="ghost" className="flex justify-center items-center">
          <Ellipsis />
        </Button>
      </div>
      {/*//!List todo */}
      <div className="flex flex-col gap-3 my-4 max-h-[70vh] overflow-auto p-2">
        {taskDoing.map((task, index) => (
          <Task key={index} task={task} currentStatus={"Doing"} />
        ))}
      </div>
    </div>
  );
}
