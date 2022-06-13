import Link from "next/link";
import { FC } from "react";

const Menu: FC = () => {
  return (
      <nav className="flex justify-between m-7">
        <Link href='/'>
          <h1> Fake Store </h1>
        </Link>
        <div className="space-x-5">
          <Link href='/products'>
            <a> Products </a>
          </Link>
          <Link href='/about'>
            <a> About </a>
          </Link>
        </div>
      </nav>
  )
}

export default Menu