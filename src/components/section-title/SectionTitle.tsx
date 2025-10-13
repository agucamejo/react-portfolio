import './SectionTitle.scss'

interface SectionTitleProps {
  title: string;
  theme: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, theme = 'dark' }) => {
  return (
    <h3 className={`section-title section-title--${theme}`}>
      - {title} -
    </h3>
  );
};
