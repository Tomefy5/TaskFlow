import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import DatePicker from "./DatePicker";
import { PriorityCombobox } from "./PriorityComboBox";

import { useTaskStore } from "@/store/taskStore";
import { createTask } from "@/services/taskServices";

const formSchema = z.object({
  title: z.string().min(2, "At least 2 characters"),
  description: z.string(),
  deadline: z.date().refine(
    (date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    },
    {
      message: "Date must be today or later",
    }
  ),
  priority: z.enum(["high", "medium", "low"], {
    message: "Priority must be: high, medium or low",
  }),
});

export default function NewTaskForm() {
  const addNewTaskToDo = useTaskStore((state) => state.addNewTaskToDo);
  const addNewTaskDoing = useTaskStore((state) => state.addNewTaskDoing);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      deadline: undefined,
      priority: "low",
    },
  });

  const onSubmit = (data) => {
    const taskDeadline = new Date(data.deadline);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (taskDeadline >= today && taskDeadline < tomorrow) {
      addNewTaskDoing(data);
    } else {
      addNewTaskToDo(data);
    }
    createTask(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {" "}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem className="my-4 flex flex-col">
              <FormLabel>Deadline</FormLabel>
              <DatePicker field={field} />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Select Priority */}
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem className="my-4 flex flex-col">
              <FormLabel>Priority</FormLabel>
              <PriorityCombobox {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create</Button>
      </form>
    </Form>
  );
}
