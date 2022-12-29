import classNames from "classnames";
import { memo, useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { timerDelay } from "../../constants/timerDelay";
import { useSelectorHOC } from "../../store/hooks";
import { formatCost } from "../../utils/formatCost";
import Timer from "../Timer";

import styles from "./TradeTable.module.css";

const TradeTable = () => {
  const { trade } = useSelectorHOC((state) => state.trade);
  const { participants, startTrade } = trade;

  const [time, setTime] = useState<number>(timerDelay);
  const [currentIndex, setCurrentUserIndex] = useState<number | null>(null);

  useEffect(() => {
    const calculateTime = () => {
      const timeDifferenceSeconds = Math.floor(
        (Date.now() - Number(startTrade)) / 1000
      );

      const pastTime = timeDifferenceSeconds % timerDelay;
      const remainTime = timerDelay - pastTime;
      setTime(remainTime);

      const currentUserIndex =
        Math.floor(timeDifferenceSeconds / timerDelay) % participants.length;
      setCurrentUserIndex(currentUserIndex);
    };

    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [startTrade, participants]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tableRow}>
            <th className={classNames(styles.tableHead, styles.tableHeadTop)}>
              Ход
            </th>
            {participants.map((item, index) => (
              <td key={item.id}>
                {currentIndex === index && <Timer time={time} />}
              </td>
            ))}
          </tr>
          <tr className={styles.tableRow}>
            <th className={classNames(styles.tableHead, styles.tableHeadTop)}>
              Параметры и требования
            </th>
            {participants.map(({ id, name, isOnline }, index) => (
              <td key={id} className={styles.tableColumn}>
                <p className={styles.text}>{`УЧАСТНИК №${index + 1}`}</p>
                <p className={styles.text}>
                  {isOnline && <BsPersonCircle color="var(--primary-green)" />}
                  {name}
                </p>
              </td>
            ))}
          </tr>
          <tr className={styles.tableRow}>
            <th className={styles.tableHead}>
              Наличие комплекса мероприятий, повышающих стандарты изготовления
            </th>
            {participants.map(({ id, qualityStandards }) => (
              <td key={id}>
                <p className={styles.text}>{qualityStandards || "-"}</p>
              </td>
            ))}
          </tr>
          <tr className={styles.tableRow}>
            <th className={styles.tableHead}>Сроки изготовления лота, дней</th>
            {participants.map(({ id, productionTime }) => (
              <td key={id}>
                <p className={styles.text}>{productionTime}</p>
              </td>
            ))}
          </tr>
          <tr className={styles.tableRow}>
            <th className={styles.tableHead}>Гарантийные обязательства, мес</th>
            {participants.map(({ id, warranty }) => (
              <td key={id}>
                <p className={styles.text}>{warranty}</p>
              </td>
            ))}
          </tr>
          <tr className={styles.tableRow}>
            <th className={styles.tableHead}>Условия оплаты, мес</th>
            {participants.map(({ id, termsPayment }) => (
              <td key={id}>
                <p className={styles.text}>{termsPayment}</p>
              </td>
            ))}
          </tr>
          <tr className={styles.tableRow}>
            <th className={styles.tableHead}>
              Стоимость изготовления лота, руб. (без НДС)
            </th>
            {participants.map(({ id, cost, discount, startCost, currency }) => (
              <td key={id}>
                <p className={styles.cost}>{formatCost(cost, currency)}</p>
                <p className={classNames(styles.cost, styles.costDiscount)}>
                  -{formatCost(discount, currency)}
                </p>
                <p className={classNames(styles.cost, styles.costStart)}>
                  {formatCost(startCost, currency)}
                </p>
              </td>
            ))}
          </tr>
          <tr className={styles.tableRow}>
            <th className={styles.tableHead}>Действия</th>
            {participants.map((item) => (
              <td key={item.id}>
                <p className={styles.text}>{item.actions}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default memo(TradeTable);
