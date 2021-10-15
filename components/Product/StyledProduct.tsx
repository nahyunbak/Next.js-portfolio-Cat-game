import styled, { css } from "styled-components";
import { CenterCenterStyle, verticalCenterStyle } from "../GlobalStyle";
import Image from "next/image";

const HeaderTitleStyle1 = css`
  background: black;
  color: white;
`;
export const ProductWrapper = styled.div`
  width: 100vw;

  ${CenterCenterStyle};
`;

export const ProductArea = styled.div`
  display: grid;
  width: 1250px;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: minmax(250px, 300px);
  padding-bottom: 50px;
  grid-gap: 10px;
`;

export const ProductLink = styled.a`
  text-decoration: none; /* no underline */
`;
export const ProductItemWrapper = styled.div`
  ${verticalCenterStyle}

  padding: 10px;
`;
export const ProductItemImg = styled.img`
  width: 100px;
  padding: 15px;
  border-radius: 20px;
  background-color: white;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ProductItemDetail = styled.div`
  ${verticalCenterStyle}
`;
export const ProductItemName = styled.div`
  color: black;
  font-size: 1rem;
  font-weight: 700;
  width: 100px;
  height: 30px;
  ${CenterCenterStyle}
`;
export const ProductItemPrice = styled.div`
  color: black;
  font-size: 1.4rem;
  font-weight: 700;
`;
export const ProductItemButton = styled.div`
  width: 90px;
  height: 35px;
  ${CenterCenterStyle};
  background-image: linear-gradient(
    to right,
    #ff8177 0%,
    #ff867a 0%,
    #ff8c7f 21%,
    #f99185 52%,
    #cf556c 78%,
    #b12a5b 100%
  );
  color: white;
  font-weight: 900;
  border-radius: 10px;
  cursor: pointer;
`;

/**
 * 
<>
      <ProductWrapper>
        <ProductArea>
          <ProductItemWrapper>
            <ProductItemImg/>
            <ProductItemDetail><ProductItemName></ProductItemName>
            <ProductItemPrice></ProductItemPrice></ProductItemDetail>
            <ProductItemButton></ProductItemButton>

          </ProductItemWrapper>
        </ProductArea>

      </ProductWrapper>
    </>
  );
 */
