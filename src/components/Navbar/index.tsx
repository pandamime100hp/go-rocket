import Link from 'next/link'
 
const Navbar: React.FC = () => {
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
 
export default Navbar