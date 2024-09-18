import '../../index.css'
import { ClientOnly } from './client'
 
export function generateStaticParams() {
  return [{ slug: ['launches'] }]
}
 
export default function Page() {
  return <ClientOnly />
}