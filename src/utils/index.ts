import { useState } from "react"

export const useDivisible = () => {
  const [result, setResult] = useState(0)
  const [input, setInput] = useState('')
  const [message, setErrorMessage] = useState('')

  const handleSumDivisibles = (value: number) => {
    setInput('')

    if (isNaN(value)) {
      setErrorMessage('Por favor, insira um número válido');
      setResult(0);
      return;
    }

    if (value <= 0) {
      setErrorMessage('Precisa ser um número positivo');
      setResult(0);
      return;
    }

    let sum = 0
    let divisiblesFound = false

    for (let i = 1; i < value; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i
        divisiblesFound = true
      }
    }

    if (!divisiblesFound) {
      setErrorMessage('Nenhum número divisível por 3 ou 5 encontrado')
      setResult(0)
    } else {
      setErrorMessage('')
    }

    setResult(sum)
  }

  return {
    input,
    result,
    message,
    setInput,
    handleSumDivisibles,
  }
}