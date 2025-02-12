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

const formSchema = z.object({
  title: z.string().min(2, "At least 2 characters"),
  description: z.string(),
  deadline: z.date().refine((date) => date > new Date(), {
    message: "Date must be later than today",
  }),
  priority: z.enum(["high", "medium", "low"], {
    message: "Priority must be: high, medium or low",
  }),
});

export default function NewTaskForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      deadline: null, // Correction ici
      priority: "low",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {" "}
        {/* Ajout du onSubmit */}
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
          render={({field}) => (
            <FormItem className="my-4 flex flex-col">
              <FormLabel>Priority</FormLabel>
              <PriorityCombobox {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  );
}
