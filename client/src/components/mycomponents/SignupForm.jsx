"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signupSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z.string().min(4, "Password must contains at least 4 characters") 
})

export default function SignupForm() {
  const formFields = [
    { field: "Name", placeholder: "your name...", name: "name", type: "text" },
    { field: "Email", placeholder: "your email...", name: "email" , type: "text" },
    { field: "Password", placeholder: "password...", name: "password", type: "password"  },
  ];

  const form = useForm({
    resolver: zodResolver(signupSchema),    
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Connexion", values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[90%] md:w-[50%] mx-auto max-w-[490px] min-w-[310px] p-8 rounded-md mt-28 border flex flex-col justify-center gap-2" >
        
      <h1 className="font-extrabold text-xl md:text-2xl text-center mb-4">Sign Up</h1>
        
        {formFields.map((fieldForm, index) => (
          <FormField
            control={form.control}
            name={fieldForm.name}
            key={index}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fieldForm.field}</FormLabel>
                <FormControl>
                  <Input type={fieldForm.type} placeholder={fieldForm.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button className="mt-6" type="submit">Sign up</Button>
      </form>
    </Form>
  );
}
