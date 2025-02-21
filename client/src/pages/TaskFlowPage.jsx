import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ContainerTasks from "@/components/mycomponents/ContainerTasks";
import TaskFlowActions from "@/components/mycomponents/TaskFlowActions";
import BasicLayout from "@/layouts/BasicLayout";

export default function TaskFlowPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = Cookies.get("token");
    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <BasicLayout>
      <TaskFlowActions />
      <ContainerTasks />
    </BasicLayout>
  );
}
