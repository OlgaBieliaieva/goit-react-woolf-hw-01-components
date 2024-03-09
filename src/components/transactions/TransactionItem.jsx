import css from './Transactions.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.tableTypeCell}>{type}</td>
      <td className={css.tableAmountCell}>{amount}</td>
      <td className={css.tableCurrencyCell}>{currency}</td>
    </>
  );
};

export default TransactionItem;