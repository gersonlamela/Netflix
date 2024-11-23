"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import PasswordChecklist from "react-password-checklist";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

const SignUpSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    lastName: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    phone: z
      .string()
      .min(1, "Phone is required")
      .min(10, "Phone must have at least 10 digits"),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    }
  );

export default function SignUpForm() {
  const params = useParams<{ email: string }>();
  const paramsEmail = params?.email ? decodeURIComponent(params.email) : "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: paramsEmail,
      phone: "",
      password: password,
      confirmPassword: confirmPassword,
    },
  });

  function onSubmit(data: z.infer<typeof SignUpSchema>) {
    console.log("Form Data:", data);
  }

  return (
    <div className="w-full h-auto px-[68px] py-[48px] bg-primary-black bg-opacity-60 flex flex-col items-start gap-7">
      <h1 className="text-primary-white text-[32px] font-medium">Sign Up</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center justify-center flex-col w-full gap-[16px]"
        >
          <div className="grid w-full lg:grid-cols-2 gap-[16px]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="h-[56px] bg-black text-primary-white border border-gray-200 rounded"
                      placeholder="First name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="h-[56px] bg-black text-primary-white border border-gray-200 rounded"
                      placeholder="Last name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="h-[56px] bg-black text-primary-white border border-gray-200 rounded"
                      placeholder="Email address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <PhoneInput
                      country={"us"}
                      enableSearch={true}
                      value={field.value}
                      onChange={field.onChange}
                      inputStyle={{
                        height: "56px",
                        backgroundColor: "black",
                        width: "100%",
                        color: "white",
                        border: "1px solid #E5E7EB", // Cor do border-gray-200
                        borderRadius: "8px", // Corresponde ao rounded do Tailwind
                        paddingLeft: "55px", // Ajuste para alinhar com o dropdown do código do país
                      }}
                      buttonStyle={{
                        backgroundColor: "black",
                        borderLeft: "2px solid #E5E7EB", // Cor do border-gray-200
                        borderTop: "1px solid #E5E7EB", // Cor do border-gray-200
                        marginRight: "10px",
                        borderBottom: "1px solid #E5E7EB", // Cor do border-gray-200
                        color: "black",
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl className="relative">
                    <div className="w-full relative">
                      <Input
                        {...field}
                        value={password}
                        onChange={(e) => {
                          const newPassword = e.target.value;
                          setPassword(newPassword);
                          field.onChange(newPassword);
                        }}
                        type={showPassword ? "text" : "password"}
                        className="h-[56px] bg-black text-primary-white border border-gray-200 rounded pr-[40px]" // Padding extra para o ícone
                        placeholder="Password"
                      />
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      >
                        {showPassword ? (
                          <EyeClosed className="h-5 w-5 text-primary-white" />
                        ) : (
                          <Eye className="h-5 w-5 text-primary-white" />
                        )}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl className="relative">
                    <div className="w-full relative">
                      <Input
                        {...field}
                        value={confirmPassword}
                        onChange={(e) => {
                          const newPassword = e.target.value;
                          setConfirmPassword(newPassword);
                          field.onChange(newPassword);
                        }}
                        type={showConfirmPassword ? "text" : "password"}
                        className="h-[56px] bg-black text-primary-white border border-gray-200 rounded pr-[40px]" // Padding extra para o ícone
                        placeholder="Password"
                      />
                      <div
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      >
                        {showConfirmPassword ? (
                          <EyeClosed className="h-5 w-5 text-primary-white" />
                        ) : (
                          <Eye className="h-5 w-5 text-primary-white" />
                        )}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={8}
              value={password}
              valueAgain={confirmPassword}
              onChange={(isValid) => {
                setIsValid(isValid);
              }}
            />
          </div>
          <div className="w-full ">
            <Button
              disabled={!isValid}
              type="submit"
              className="w-full rounded hover:bg-red-700 bg-primary-red text-primary-white h-[40px]"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
