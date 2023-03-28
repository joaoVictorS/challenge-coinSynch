"use client";
import React, { useCallback, useState } from "react";


const Modal2: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setVisible(true);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div>
      Modal Abertoaaaaaaaaaaa
      <button onClick={handleCloseModal}> fechar modal</button>
    </div>
  );
};

export default Modal2;
