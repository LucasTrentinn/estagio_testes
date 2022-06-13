import Link from "next/link"
import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Escolha uma categoria</h1>
      <Link href={'/frutas'}>
        <button> Frutas </button>
      </Link>
    </div>
  )
}