import {
  ProductArea,
  ProductItemButton,
  ProductItemDetail,
  ProductItemImg,
  ProductItemName,
  ProductItemPrice,
  ProductItemWrapper,
  ProductLink,
  ProductWrapper,
} from "./StyledProduct";
import Axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  catConditionStandard,
  catConditionState,
  catModalState,
  collectedCatState,
  moneyState,
  productState,
  purchasedProductState,
} from "../../recoilAtom/language";
import { AddCatCondition, useEffectCatModule } from "../ComponentModules";

const Product = ({ list }) => {
  //로컬스토리지 저장용 상태값
  const [products, setProducts] = useRecoilState(productState);
  const [purchasedProducts, setPurchasedProducts] = useRecoilState(
    purchasedProductState
  );
  const [money, setMoney] = useRecoilState(moneyState);

  //고양이 출현조건과 기준 상태값
  const [catCondition, setCatCondition] = useRecoilState(catConditionState);
  const [catModalInfo, setCatModalInfo] = useRecoilState(catModalState);
  const [collectedCat, setCollectedCat] = useRecoilState(collectedCatState);

  useEffect(() => {
    const savedLeftdValue = localStorage.getItem("left");
    const savedPurchasedValue = localStorage.getItem("purchased");
    const savedMoney = localStorage.getItem("money");

    if (savedLeftdValue) {
      setProducts(JSON.parse(savedLeftdValue));
    } else {
      setProducts(list);
    }
    if (savedPurchasedValue) {
      setPurchasedProducts(JSON.parse(savedPurchasedValue));
    }
    if (savedMoney) {
      setMoney(JSON.parse(savedMoney));
    }
    useEffectCatModule(setCatCondition, setCollectedCat);
  }, [setProducts, setPurchasedProducts, setMoney, setCatCondition]);

  const purchaseProduct = (e, item: any) => {
    // localstorage 저장시 state 바꾸고, recoil state도 바꾸기
    localStorage.setItem(
      "purchased",
      JSON.stringify([...purchasedProducts, item])
    );
    localStorage.setItem(
      "left",
      JSON.stringify(
        products.filter((x) => x.id !== parseInt(e.target.getAttribute("name")))
      )
    );
    localStorage.setItem(
      "money",
      JSON.stringify(Math.round((money - Number(item.price)) * 100) / 100)
    );

    setProducts((oldState: any) =>
      oldState.filter(
        (item) => item.id !== parseInt(e.target.getAttribute("name"))
      )
    );
    setPurchasedProducts((oldState: any) => [...oldState, item]);
    setMoney(
      (oldState: number) =>
        Math.round((oldState - Number(item.price)) * 100) / 100
    );

    AddCatCondition(
      "shopperCat",
      catCondition,
      setCatCondition,
      catConditionStandard,
      setCatModalInfo,
      collectedCat,
      setCollectedCat
    );
  };
  return (
    <>
      <ProductWrapper>
        <ProductArea>
          {products &&
            products.map((item) => (
              <>
                <ProductItemWrapper>
                  <ProductLink href={item.product_link} target="_blank">
                    <ProductItemImg src={item.image_link} />
                  </ProductLink>
                  <ProductItemDetail>
                    <ProductItemName>
                      {item.product_type.toUpperCase()}
                    </ProductItemName>
                    <ProductItemPrice>${item.price}</ProductItemPrice>
                  </ProductItemDetail>
                  <ProductItemButton
                    key={item.id}
                    name={item.id}
                    onClick={(e) => purchaseProduct(e, item)}
                  >
                    구매
                  </ProductItemButton>
                </ProductItemWrapper>
              </>
            ))}
        </ProductArea>
      </ProductWrapper>
    </>
  );
};
export default Product;

/**
 * 
 * 
 * const [list, setList] = useState<any>([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then((res: AxiosResponse<unknown, any>) => {
      console.log(res.data);
      setList(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);

 * import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [list, setList] = useState([]);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | 코딩앙마</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 40 }}>
        신상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
}

// axios

 * 
 */
