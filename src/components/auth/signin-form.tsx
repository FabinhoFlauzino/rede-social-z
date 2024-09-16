"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "../ui/input"

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

      <button onClick={handleEnterButton}>Entrar</button>
    </>
  )
}