'use client'

import * as Form from "@radix-ui/react-form";
import { Button, IconButton } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <section className="bg-dark-gray w-full calc-height relative top-[88px] py-[80px]">
      <div className="container px-24 flex flex-col justify-center items-center gap-10 h-full bg-less-dark-gray py-20 rounded-lg">
        <Form.Root className="mt-10 rounded-md flex flex-col gap-4 items-center justify-center">
          <h1 className="text-center text-white text-2xl uppercase font-bold">Faça o seu login</h1>

          <Form.Field name="email">
            <Form.Message match="valueMissing">
              Por-favor, preencha seu email!
            </Form.Message>

            <Form.Message match="typeMismatch">
              Por-favor, forneça um e-mail válido!
            </Form.Message>

            <Form.Control className="" asChild>
              <input className="bg-transparent outline-none p-2 w-[320px] text-white text-sm font-bold border-b-2 border-purple border-solid" type="email" required={true} placeholder="Digite seu email" />
            </Form.Control>
          </Form.Field>

          <Form.Field name="password">
            <Form.Message match="valueMissing">
              Por-favor, forneça uma senha!
            </Form.Message>

            <Form.Control className="" asChild>
              <input className="bg-transparent outline-none p-2 w-[320px] text-white text-sm font-bold border-b-2 border-purple border-solid" type="password" required={true} placeholder="Digite sua senha"/>
            </Form.Control>
          </Form.Field>

          <Button type="submit" className="py-2 px-4 uppercase text-white font-bold bg-purple rounded-md">Registrar</Button>
        </Form.Root>

        <span className="text-white font-bold text-sm">OU</span>

        <div className="flex gap-4">
          <IconButton onClick={() => signIn('google', { callbackUrl: '/' })}>
            <FaGoogle className="w-[30px] h-[30px]" color="white" />
          </IconButton>
        </div>
      </div>
    </section>
  );
}