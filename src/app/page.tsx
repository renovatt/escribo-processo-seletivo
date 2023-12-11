'use client'
import Link from "next/link"
import Image from "next/image"
import { FormEvent } from "react"
import { useDivisible } from "@/utils"

export default function Home() {
  const {
    input,
    result,
    message,
    setInput,
    handleSumDivisibles,
  } = useDivisible()

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    handleSumDivisibles(Number(input))
  }

  return (
    <section className="w-full h-screen p-2 space-y-6 flex items-center justify-center flex-col bg-900">
      <Image
        src='/escribo.png'
        alt="logo-escribo"
        width={200}
        height={200}
        priority
      />

      <form onSubmit={onSubmit} className="flex w-80 p-2 gap-4 flex-col bg-600 rounded-md">
        <input type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="rounded-md text-zinc-600 outline-none p-2"
          placeholder="Digite um número"
          required
        />
        <input
          type="submit"
          className="bg-800 font-bold text-white outline-none rounded-md text-base p-2 cursor-pointer hover:bg-700 transition-all ease-in" />
      </form>

      <section className="flex items-center justify-center">
        <span className="h-10 text-500 font-bold">{result !== 0 && result}</span>
        <span className="h-10 text-500">{message}</span>
      </section>

      <footer className="text-xs text-white absolute bottom-2">
        Desenvolvido por <Link className="text-500 hover:text-white" href='https://www.linkedin.com/in/renovatt/' target="_blank">renovatt</Link>
      </footer>
    </section>
  )
}
