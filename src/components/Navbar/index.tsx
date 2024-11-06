
// Next
import Link from 'next/link'
 
// CSS
import './navbar.min.css'

export default function Navbar(): React.ReactElement {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/launches">Launches</Link>
      </li>
    </ul>
  )
}
