import './Button.scss'

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;  
}

const Button: React.FC<ButtonProps> = ({ title, icon }) => {
  return (
    <button type="button" className="button">
      {title}
      {icon && <span>{icon}</span>} 
    </button>
  );
};

export default Button;