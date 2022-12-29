import { memo } from "react";
import { GiSandsOfTime } from "react-icons/gi";
import { formatTime } from "../../utils/formatTime";

import styles from "./Timer.module.css";

interface TimerI {
  time: number;
}

const Timer = ({ time }: TimerI) => {
  return (
    <div className={styles.timerContainer}>
      <span>{formatTime(time)}</span>
      <span className={styles.timerIcon}>
        <GiSandsOfTime size="20px" />
      </span>
    </div>
  );
};

export default memo(Timer);
