import InfoUser from "./InfoUser";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import NewTaskForm from "./NewTaskForm";

export default function TaskFlowActions() {
  return (
    <div className="p-2 w-[75%] mt-4 min-w-[320px] gap-4 mx-auto flex justify-between">
      <InfoUser />

      {/* Actions */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Plus />
            <span>New</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Task</DialogTitle>
            <DialogDescription>
             Add the informations of your task
            </DialogDescription>
          </DialogHeader>
          {/* Form for creating new tasks */}
          <NewTaskForm/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
