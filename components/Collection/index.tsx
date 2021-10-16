import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  moneyState,
  productState,
  purchasedProductState,
} from "../../recoilAtom/language";
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
  }, [setProducts, setPurchasedProducts]);

  const refundProduct = (e, item: any) => {
    setPurchasedProducts((oldState: any) =>
      oldState.filter(
        (item) => item.id !== parseInt(e.target.getAttribute("name"))
      )
    );
    setProducts((oldState: any) => [...oldState, item]);
    setMoney(
      (oldState: any) => Math.round((oldState + Number(item.price)) * 100) / 100
    );

    localStorage.setItem("purchased", JSON.stringify(purchasedProducts));
    localStorage.setItem("left", JSON.stringify(products));
    localStorage.setItem("money", JSON.stringify(money));
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
