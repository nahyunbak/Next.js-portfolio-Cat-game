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
import { useRecoilState } from "recoil";
import { productState, purchasedProductState } from "../../recoilAtom/language";

const Product = ({ list }) => {
  //리코일에 저장된 list값은 죄다 삭제
  const [products, setProducts] = useRecoilState(productState);
  const [purchasedProducts, setPurchasedProducts] = useRecoilState(
    purchasedProductState
  );
  useEffect(() => setProducts(list), [setProducts, list]);

  const purchaseProduct = (e, item: Object) => {
    console.log(item.id, e.target.getAttribute("name"));
    setProducts((oldState: any) =>
      oldState.filter(
        (item) => item.id !== parseInt(e.target.getAttribute("name"))
      )
    );
    setPurchasedProducts((oldState: any) => [...oldState, item]);
  };

  console.log(products, purchasedProducts);
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
