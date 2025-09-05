import './NavLink.scss';

interface NavLinkProps {
  label: string
  isActive: boolean
  onClick: () => void
  navigateTo: string
}

const NavLink: React.FC<NavLinkProps> = ({ label, isActive, onClick, navigateTo }) => {
  const handleSmoothScroll = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()

    const targetId = navigateTo.startsWith("#") ? navigateTo.slice(1) : null
    const targetElement = targetId ? document.getElementById(targetId) : null

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }

    onClick()
  }

  return (
    <div
      className={`navlink ${isActive ? 'navlink--active' : ''}`}
      onClick={handleSmoothScroll}
    >
      <span className="navlink__label">{label}</span>
      {isActive && <div className="navlink__line"></div>}
    </div>
  )
}

export default NavLink
