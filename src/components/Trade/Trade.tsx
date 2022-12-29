import { memo } from "react";
import { useSelectorHOC } from "../../store/hooks";
import TradeTable from "../TradeTable";

import styles from "./Trade.module.css";

const Trade = () => {
  const { trade } = useSelectorHOC((state) => state.trade);

  return (
    <>
      <h2 className={styles.text}>
        Ход торгов <span className={styles.title}>{trade.title}</span>
      </h2>
      <p className={styles.content}>
        Уважаемые участники, во время вашего хода вы можете изменить параметры
        торгов, указанных в таблице:
      </p>

      <TradeTable />
    </>
  );
};

export default memo(Trade);
