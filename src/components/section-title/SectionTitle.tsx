import './SectionTitle.scss'

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  theme: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, theme = 'dark' }) => {
  return (
    <div className="section-title-wrapper">
      <h3 className={`section-title section-title--${theme}`}>
        - {title} -
      </h3>
      {subtitle && (
        <p className={`section-subtitle section-subtitle--${theme}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
