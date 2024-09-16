"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export function SigninForm() {
  const router = useRouter()
  const [emailField, setEmailField] = useState("")
  const [passwordField, setPasswordField] = useState("")

  const handleEnterButton = () => {
    router.replace('/home')
  }

  return (
    <>
      <Input
        placeholder="Digite seu email"
        value={emailField}
        onChange={(texto) => setEmailField(texto)}
      />

      <Input
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(texto) => setPasswordField(texto)}
        password
      />

      <Button 
        label="Entrar"
        onClick={handleEnterButton}
        size={1}
      />
    </>
  )
}