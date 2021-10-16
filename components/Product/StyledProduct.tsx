import styled, { css } from "styled-components";
import {
  CenterCenterStyle,
  GlobalProductArea,
  GlobalProductItemButton,
  GlobalProductItemImg,
  GlobalProductItemName,
  GlobalProductItemPrice,
  GlobalProductItemWrapper,
  GlobalProductLink,
  GlobalProductWrapper,
  verticalCenterStyle,
} from "../GlobalStyle";

export const ProductWrapper = styled.div`
  ${GlobalProductWrapper}
`;

export const ProductArea = styled.div`
  margin-top: 100px;
  ${GlobalProductArea}
`;

export const ProductLink = styled.a`
  ${GlobalProductLink}
`;
export const ProductItemWrapper = styled.div`
  ${GlobalProductItemWrapper}
`;
export const ProductItemImg = styled.img`
  ${GlobalProductItemImg}
`;

export const ProductItemDetail = styled.div`
  ${verticalCenterStyle}
`;
export const ProductItemName = styled.div`
  ${GlobalProductItemName}
`;
export const ProductItemPrice = styled.div`
  ${GlobalProductItemPrice}
`;
export const ProductItemButton = styled.div<any>`
  ${GlobalProductItemButton};
  background-image: linear-gradient(
    to right,
    #ff8177 0%,
    #ff867a 0%,
    #ff8c7f 21%,
    #f99185 52%,
    #cf556c 78%,
    #b12a5b 100%
  );
  color: black;
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
