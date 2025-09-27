import './Button.scss'

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;  
  theme?: string
  type?: 'submit' | 'button'
}

const Button: React.FC<ButtonProps> = ({ title, icon, theme = 'dark', type = 'button' }) => {
  return (
    <button type={type} className={`button button--${theme}`}>
      {title}
      {icon && <span>{icon}</span>} 
    </button>
  );
};

export default Button;