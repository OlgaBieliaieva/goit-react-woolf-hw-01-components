import StatItem from './StatItem';
import getRandomHexColor from '../../utils/getColor';
import css from './Statistics.module.css';

const Statistics = ({ title, data }) => {
  return (
    <section className={css.statisticsContainer}>
      {title && <h2 className={css.statisticsTitle}>{title.toUpperCase()}</h2>}

      <ul className={css.statisticsList}>
        {data.map(item => (
          <li
            className={css.statisticsListItem}
            style={{ backgroundColor: getRandomHexColor() }}
            key={item.id}
          >
            <StatItem type={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
