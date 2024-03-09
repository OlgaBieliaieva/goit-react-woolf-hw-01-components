import css from './Statistics.module.css';

const StatItem = ({ type, percentage = 0 }) => {
  return (
    <>
      <span className={css.accentContent}>{type}</span>
      <span>{percentage}%</span>
    </>
  );
};

export default StatItem;
