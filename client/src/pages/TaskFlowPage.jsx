import ContainerTasks from "@/components/mycomponents/ContainerTasks";
import TaskFlowActions from "@/components/mycomponents/TaskFlowActions";
import BasicLayout from "@/layouts/BasicLayout";

export default function TaskFlowPage() {
  return (
    <BasicLayout>
      <TaskFlowActions/>
      <ContainerTasks/>
    </BasicLayout>
  )
}
