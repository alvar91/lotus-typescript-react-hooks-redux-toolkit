import React, { memo, useState } from "react";

import Button from "../components/Button";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import TradeModal from "../components/TradeModal";

const TradePage = () => {
  const [isOpened, setOpenModal] = useState<boolean>(true);

  return (
    <Layout>
      <Button onClick={() => setOpenModal(true)}>Ход торгов</Button>
      {isOpened && (
        <Modal withCloseCross={true} setCloseModal={() => setOpenModal(false)}>
          <TradeModal setCloseModal={() => setOpenModal(false)} />
        </Modal>
      )}
    </Layout>
  );
};

export default memo(TradePage);
