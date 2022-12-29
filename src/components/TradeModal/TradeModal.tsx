import Button from "../Button";
import Loader from "../Loader";
import styles from "./TradeModal.module.css";

import { BsChatLeftText } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import { FaHammer } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatchHOC, useSelectorHOC } from "../../store/hooks";
import { memo, useEffect } from "react";
import { getTradeThunk } from "../../store/slices/tradeSlice";
import Layout from "../Layout";
import Trade from "../Trade";

interface TradeModalPropsI {
  setCloseModal: () => void;
}

const TradeModal = ({ setCloseModal }: TradeModalPropsI) => {
  const dispatch = useDispatchHOC();

  useEffect(() => {
    dispatch(getTradeThunk());
  }, [dispatch]);

  const { isError, isLoading, trade } = useSelectorHOC((state) => state.trade);

  if (isLoading) return <Loader />;
  else if (isError) {
    return (
      <Layout>
        <h2>Ошибка при загрузке данных</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      {trade && <Trade />}
      <div className={styles.buttonsContainer}>
        <Button theme="green">
          <span>Чат</span>
          <BsChatLeftText />
        </Button>
        <Button onClick={() => dispatch(getTradeThunk())}>
          <span>Обновить</span>
          <RxUpdate />
        </Button>
        <Button theme="red">
          <span>Завершить торги</span>
          <FaHammer />
        </Button>
        <Button theme="lightRed">
          <span>Отчет</span>
          <HiOutlineNewspaper />
        </Button>
        <Button onClick={setCloseModal} theme="gray">
          <span>Закрыть</span>
          <AiOutlineCloseCircle />
        </Button>
      </div>
    </Layout>
  );
};

export default memo(TradeModal);
