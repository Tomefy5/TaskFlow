import ContainerTasksDoing from "./ContainerTasksDoing";
import ContainerTasksDone from "./ContainerTasksDone";
import ContainerTasksToDo from "./ContainerTasksToDo";

export default function ContainerTasks() {

  return (
    <div className="p-2 w-[75%] mt-10 grid grid-cols-1 min-w-[320px] xl:grid-cols-3 gap-4 mx-auto">
      {/* List of to do */}
      <ContainerTasksToDo/>

      {/* Task doing */}
      <ContainerTasksDoing/>

      {/* Tasks Done */}
      <ContainerTasksDone/>
    </div>
  );
}
