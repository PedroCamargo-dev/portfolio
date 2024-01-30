"use client";

import Form from "@/components/Atoms/Form";
import { Input } from "@/components/Atoms/Input";
import Logo from "@/components/Atoms/Logo";
import { Spinner } from "@/components/Atoms/Spinner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMail, IoLockClosed } from "react-icons/io5";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/dashboard/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsLoading(false);
        router.push("/dashboard/home");
      } else {
        console.error("Login failed");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("An error occurred", error);
      setIsLoading(false);
    }
  };

  return (
    <main className="flex justify-center h-screen items-center">
      <div className="flex bg-white p-10 rounded-xl flex-col drop-shadow-2xl">
        <Logo width={96} height={96} className="rounded-full mx-auto" />
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="E-mail"
            name="email"
            type="email"
            className="mt-4"
            icon={IoMail}
          />
          <Input
            placeholder="Senha"
            name="password"
            type="password"
            className="mt-3"
            icon={IoLockClosed}
          />
          <div className="flex flex-col gap-4 mt-4">
            <button
              type="submit"
              className="p-3 rounded-3xl text-purple-500 bg-purple-500 bg-opacity-10 hover:bg-opacity-20 transition-all"
              disabled={isLoading}
            >
              {isLoading ? <Spinner color="purple" /> : "Entrar"}
            </button>
          </div>
        </Form>
      </div>
    </main>
  );
}
