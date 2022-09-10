import Link from "next/link"
import {items} from '../db/db.js'

export default function Home() {
  return (
    <div className='container'>
      {
        items.map((item, index) => (
          <div className='card' key={index}>
            <Link href={`./${item.name.toLocaleLowerCase()}`}>
              <a className='card'>{item.name}</a>
            </Link>
          </div>
        )) 
      }
    </div>
  )
}
