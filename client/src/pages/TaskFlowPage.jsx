import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContainerTasks from "@/components/mycomponents/ContainerTasks";
import TaskFlowActions from "@/components/mycomponents/TaskFlowActions";
import BasicLayout from "@/layouts/BasicLayout";
import { getAuth } from "@/services/authServices";

export default function TaskFlowPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const getAuthHandler = async () => {
      const auth = await getAuth();
      try {
        if (!auth) {
          navigate("/login");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getAuthHandler();
  }, [navigate]);

  return (
    <BasicLayout>
      <TaskFlowActions />
      <ContainerTasks />
    </BasicLayout>
  );
}
