"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export function SignupForm() {
  const router = useRouter()
  const [nameField, setNameField] = useState("")
  const [emailField, setEmailField] = useState("")
  const [passwordField, setPasswordField] = useState("")

  const handleEnterButton = () => {
    router.replace('/home')
  }

  return (
    <>
      <Input
        placeholder="Digite seu nome"
        value={nameField}
        onChange={(texto) => setNameField(texto)}
      />

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
        label="Criar conta"
        onClick={handleEnterButton}
        size={1}
      />
    </>
  )
}