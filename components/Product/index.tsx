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
import { productState } from "../../recoilAtom/language";

const Product = ({ list }) => {
  console.log(list[1]);

  return (
    <>
      <ProductWrapper>
        <ProductArea>
          {list &&
            list.map((item) => (
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
                  <ProductItemButton>구매</ProductItemButton>
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
