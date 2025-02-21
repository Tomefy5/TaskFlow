import ContainerTasks from "@/components/mycomponents/ContainerTasks";
import TaskFlowActions from "@/components/mycomponents/TaskFlowActions";
import BasicLayout from "@/layouts/BasicLayout";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function TaskFlowPage() {
  const navigate = useNavigate();
  const authToken = Cookies.get("token");
  if (!authToken) {
    navigate("/login");
  }

  return (
    <BasicLayout>
      <TaskFlowActions />
      <ContainerTasks />
    </BasicLayout>
  );
}
