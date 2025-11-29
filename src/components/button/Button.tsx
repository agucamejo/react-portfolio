import './Button.scss'

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;  
  theme?: string
  type?: 'submit' | 'button'
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ title, icon, theme = 'dark', type = 'button', onClick }) => {
  return (
    <button type={type} className={`button button--${theme}`} onClick={onClick}>
      {title}
      {icon && <span>{icon}</span>} 
    </button>
  );
};

export default Button;