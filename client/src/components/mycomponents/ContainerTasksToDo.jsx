import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import Task from "./Task";
import { useDrop } from "react-dnd";
import { useTaskStore } from "@/store/taskStore";
import { useEffect } from "react";
import { changeTaskStatus, fetchTasksToDo } from "@/services/taskServices";
import { toast } from "react-toastify";
import { useUserStore } from "@/store/userStore";

export default function ContainerTasksToDo() {
  const { user } = useUserStore();

  const { setTaskToDo, taskToDo, addNewTaskToDo, removeDoing, removeDone } =
    useTaskStore();

  const [{ isOver }, dropref] = useDrop({
    accept: "TASK",
    drop: (item) => dropHandler(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (user && user._id) {
          const tasksToDo = await fetchTasksToDo(user._id, false, false);
          console.log("User: ", user);
          setTaskToDo(tasksToDo);
        }
      } catch (error) {
        console.error("Error on fetching tasks:", error);
      }
    };
    fetchTasks();
  }, [setTaskToDo, user]);

  const dropHandler = async (item) => {
    if (item.source === "ToDo") return;

    try {
      await changeTaskStatus(item._id, false);
    } catch (error) {
      toast.error(error.message);
    }

    addNewTaskToDo(item);

    if (item.source === "Doing") {
      removeDoing(item._id);
    } else if (item.source === "Done") {
      removeDone(item._id);
    }
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
          To Do
        </h2>
        <Button variant="ghost" className="flex justify-center items-center">
          <Ellipsis />
        </Button>
      </div>
      {/*//!List todo */}
      <div className="flex flex-col gap-3 my-4 max-h-[70vh] overflow-auto p-2">
        {taskToDo.map((task) => (
          <Task key={task._id} task={task} currentStatus={"ToDo"} />
        ))}
      </div>
    </div>
  );
}
