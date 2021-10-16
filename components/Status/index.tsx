import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { moneyState } from "../../recoilAtom/language";
import { StatusMoney, StatusWrapper } from "./StyledProduct";

const Status = () => {
  const [money, setMoney] = useRecoilState(moneyState);

  return (
    <>
      <StatusWrapper>
        <StatusMoney>${money}</StatusMoney>
      </StatusWrapper>
    </>
  );
};

export default Status;
