import Link from 'next/link'

const NavLink = ({ active = false, children, ...props }) => (
    <Link {...props} className={`nav-link ${active ? 'border' : 'border-0'}`}>
        {children}
    </Link>
)

export default NavLink
