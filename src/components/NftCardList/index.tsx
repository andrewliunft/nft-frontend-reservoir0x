import { useState } from "react";
import { NftCardListStyle } from "./style";
import NftCard from "../NftCard";
import { Token, useTokens } from "@reservoir0x/reservoir-kit-ui";
import NftDetailsModal from "../NftDetailsModal";
export interface props {
  tokensList: string[];
}

export interface TokenPreview {
  token: Token;
  topBid: { decimal: number; usd: number };
}
const NftCardList = ({ tokensList }: props) => {
  const { data: tokensData } = useTokens({
    tokens: [...tokensList],
  });

  const [currentSelected, setCurrentSelected] = useState<TokenPreview | null>(
    null
  );

  return (
    <NftCardListStyle>
      {tokensData?.map((token: Token) => (
        <NftCard
          key={token?.token?.contract}
          tokenData={token}
          onSelect={(selectedToken: TokenPreview) =>
            setCurrentSelected(selectedToken)
          }
        />
      ))}
      {currentSelected && (
        <NftDetailsModal
          tokenData={currentSelected?.token}
          topBid={currentSelected?.topBid}
          onClose={() => setCurrentSelected(null)}
        />
      )}
    </NftCardListStyle>
  );
};

export default NftCardList;
