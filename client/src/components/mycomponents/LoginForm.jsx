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
import { login } from "@/services/userServices";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/userStore";

export default function LoginForm() {
  const navigate = useNavigate();

  const { setUser } = useUserStore();

  const signupSchema = z.object({
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z.string().min(4, "Password must contain at least 4 characters"),
  });

  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
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

  const onSubmit = async (data) => {
    const user = await login(data);
    setUser(user);
    navigate("/tasks");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[75%] md:w-[50%] mx-auto max-w-[490px] min-w-[310px] p-8 rounded-md mt-28 border flex flex-col justify-center gap-2"
      >
        <h1 className="font-extrabold text-xl md:text-2xl text-center mb-4">
          Sign In
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
          Login
        </Button>
      </form>
    </Form>
  );
}
