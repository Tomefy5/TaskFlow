import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import Task from "./Task";
import { useDrop } from "react-dnd";
import { useTaskStore } from "@/store/taskStore";
import { useEffect } from "react";
import { changeTaskStatus, fetchTasksToDo } from "@/services/taskServices";
import { useUserStore } from "@/store/userStore";

export default function ContainerTasksDone() {
  const { taskDone, setTaskDone, addNewTaskDone, removeToDo, removeDoing } =
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
    const fetchTasks = async () => {
      try {
        if (user && user._id) {
          const taskDone = await fetchTasksToDo(user._id, true, false);
          setTaskDone(taskDone);
        }
      } catch (error) {
        console.error(`Error on fetching task: `, error.message);
      }
    };
    fetchTasks();
  }, [setTaskDone, user]);

  const dropHander = (item) => {
    if (item.source === "Done") {
      return;
    }

    const changeStatus = async () => {
      await changeTaskStatus(item._id, true);
    };
    changeStatus();
    addNewTaskDone(item);

    const remover = () => {
      if (item.source === "Doing") {
        removeDoing(item._id);
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
        <h2
          className={`${
            isOver ? "text-white" : ""
          } font-bold text-lg md:text-2xl`}
        >
          Done
        </h2>
        <Button variant="ghost" className="flex justify-center items-center">
          <Ellipsis />
        </Button>
      </div>
      {/*//!List todo */}
      <div className="flex flex-col gap-3 my-4 max-h-[70vh] overflow-auto p-2">
        {taskDone.map((task, index) => (
          <Task key={index} task={task} currentStatus={"Done"} />
        ))}
      </div>
    </div>
  );
}
