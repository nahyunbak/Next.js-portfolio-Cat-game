import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  catConditionState,
  moneyState,
  productState,
  purchasedProductState,
} from "../../recoilAtom/language";
import { AddCatCondition, useEffectCatModule } from "../ComponentModules";
import {
  CollectionArea,
  CollectionItemButton,
  CollectionItemDetail,
  CollectionItemImg,
  CollectionItemName,
  CollectionItemPrice,
  CollectionItemWrapper,
  CollectionLink,
  CollectionWrapper,
} from "./StyledCollection";

const Collection = () => {
  const [products, setProducts] = useRecoilState(productState);
  const [purchasedProducts, setPurchasedProducts] = useRecoilState(
    purchasedProductState
  );
  const [money, setMoney] = useRecoilState(moneyState);

  //고양이 출현조건과 기준 상태값
  const [catCondition, setCatCondition] = useRecoilState(catConditionState);

  useEffect(() => {
    const savedLeftdValue = localStorage.getItem("left");
    const savedPurchasedValue = localStorage.getItem("purchased");
    const savedMoney = localStorage.getItem("money");

    if (savedLeftdValue) {
      setProducts(JSON.parse(savedLeftdValue));
    }
    if (savedPurchasedValue) {
      setPurchasedProducts(JSON.parse(savedPurchasedValue));
    }
    if (savedMoney) {
      setMoney(JSON.parse(savedMoney));
    }
    useEffectCatModule;
  }, [setProducts, setPurchasedProducts, setMoney, setCatCondition]);

  const refundProduct = (e, item: any) => {
    localStorage.setItem(
      "purchased",
      JSON.stringify(
        purchasedProducts.filter(
          (x) => x.id !== parseInt(e.target.getAttribute("name"))
        )
      )
    );
    localStorage.setItem("left", JSON.stringify([...products, item]));
    localStorage.setItem(
      "money",
      JSON.stringify(Math.round((money + Number(item.price)) * 100) / 100)
    );

    setPurchasedProducts((oldState: any) =>
      oldState.filter(
        (item) => item.id !== parseInt(e.target.getAttribute("name"))
      )
    );
    setProducts((oldState: any) => [...oldState, item]);
    setMoney(
      (oldState: any) => Math.round((oldState + Number(item.price)) * 100) / 100
    );
    AddCatCondition("scroogeCat", catCondition, setCatCondition);
  };

  return (
    <>
      <CollectionWrapper>
        <CollectionArea>
          {purchasedProducts &&
            purchasedProducts.map((item) => (
              <>
                <CollectionItemWrapper>
                  <CollectionLink href={item.product_link} target="_blank">
                    <CollectionItemImg src={item.image_link} />
                  </CollectionLink>
                  <CollectionItemDetail>
                    <CollectionItemName>
                      {item.product_type.toUpperCase()}
                    </CollectionItemName>
                    <CollectionItemPrice>${item.price}</CollectionItemPrice>
                  </CollectionItemDetail>
                  <CollectionItemButton
                    key={item.id}
                    name={item.id}
                    onClick={(e) => refundProduct(e, item)}
                  >
                    반품
                  </CollectionItemButton>
                </CollectionItemWrapper>
              </>
            ))}
        </CollectionArea>
      </CollectionWrapper>
    </>
  );
};

export default Collection;
