import Link from 'next/link'

export default function Frutas() {
  return (
    <div>
      <h1>Qual sua fruta favorita?</h1>
      <ul>
        <li>
          <Link href='/frutas/maca'>
            <a>Maçã</a>
          </Link>
        </li>
        <li>
          <Link href='/frutas/pera'>
            <a>Pêra</a>
          </Link>
        </li>
        <li>
          <Link href='/frutas/uva'>
            <a>Uva</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
