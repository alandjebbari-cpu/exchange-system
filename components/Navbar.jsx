import Link from 'next/link'
export function Navbar(){return <nav className='bg-blue-600 text-white p-4 flex justify-between'><div>Exchange</div><div className='space-x-3'><Link href='/'>Home</Link><Link href='/rates'>Rates</Link><Link href='/customers'>Customers</Link><Link href='/ledger'>Ledger</Link></div></nav>}
