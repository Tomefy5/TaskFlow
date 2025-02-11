import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

export default function LoginForm() {
  const signupSchema = z.object({
    name: z.string().min(2, "Name must contain at least 2 characters"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z.string().min(6, "Password must contain at least 6 characters"),
  });

  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const formFields = [
    {
      field: "Email",
      placeholder: "your email...",
      name: "email",
      type: "text",
    },
    {
      field: "Password",
      placeholder: "password...",
      name: "password",
      type: "password",
    },
  ];

  const onSubmit = (data) => {
    console.log("Valeurs", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[75%] md:w-[50%] mx-auto max-w-[490px] min-w-[310px] p-8 rounded-md mt-28 border flex flex-col justify-center gap-2"
      >
        <h1 className="font-extrabold text-xl md:text-2xl text-center mb-4">
          Sign Up
        </h1>

        {formFields.map((formField, index) => (
          <FormField
            key={index}
            control={form.control}
            name={formField.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formField.field}</FormLabel>
                <FormControl>
                  <Input
                    type={formField.type}
                    placeholder={formField.placeholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button className="mt-6" type="submit">
          Sign up
        </Button>
      </form>
    </Form>
  );
}
