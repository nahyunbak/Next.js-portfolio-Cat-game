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

export const CollectionWrapper = styled.div`
  ${GlobalProductWrapper}
`;

export const CollectionArea = styled.div`
  ${GlobalProductArea}
`;

export const CollectionLink = styled.a`
  ${GlobalProductLink}
`;
export const CollectionItemWrapper = styled.div`
  ${GlobalProductItemWrapper}
`;
export const CollectionItemImg = styled.img`
  ${GlobalProductItemImg}
`;

export const CollectionItemDetail = styled.div`
  ${verticalCenterStyle}
`;
export const CollectionItemName = styled.div`
  ${GlobalProductItemName}
`;
export const CollectionItemPrice = styled.div`
  ${GlobalProductItemPrice}
`;
export const CollectionItemButton = styled.div`
  cursor: pointer;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  ${GlobalProductItemButton}
`;
