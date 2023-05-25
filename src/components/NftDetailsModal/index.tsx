import { useState } from "react";
import { NftDetailsStyle } from "./style";
import { BuyModal, Token } from "@reservoir0x/reservoir-kit-ui";
export interface props {
  tokenData: Token;
  topBid: { decimal: number; usd: number };
  onClose: () => void;
}

const NftDetailsModal = ({ tokenData, topBid, onClose }: props) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  if (!tokenData) return null;
  return (
    <NftDetailsStyle>
      <div className="modal-content">
        <img
          src="/assets/images/icon_close.svg"
          alt="close"
          className="close-button"
          onClick={() => {
            onClose && onClose();
          }}
        />
        <div className="details-wrapper">
          <img
            src={tokenData?.token?.image}
            alt=""
            className={`nft-image ${descriptionExpanded ? "clamped" : ""}`}
          ></img>
          <div className="nft-details">
            <h1>{tokenData?.token?.name}</h1>
            <p
              onClick={() => setDescriptionExpanded(!descriptionExpanded)}
              className={`nft-description ${
                descriptionExpanded ? "" : "clamped"
              }`}
            >
              {tokenData?.token?.description}
            </p>
            <p>
              Top bid:{" "}
              {topBid?.decimal && topBid?.usd
                ? `${topBid?.decimal} ETH , $${topBid?.usd} USD`
                : "N/A"}
            </p>
            <div className="nft-price-wrapper">
              <p className="nft-amount">
                Price:{" "}
                {tokenData?.market?.floorAsk?.price?.amount?.usd &&
                tokenData?.market?.floorAsk?.price?.amount?.decimal
                  ? `${tokenData?.market?.floorAsk?.price?.amount?.decimal} ETH, $${tokenData?.market?.floorAsk?.price?.amount?.usd} USD `
                  : "Item No Longer Available"}
              </p>
              <BuyModal
                trigger={<button>Buy</button>}
                collectionId={tokenData.token?.collection?.id}
                tokenId={tokenData.token?.tokenId}
                onPurchaseComplete={(data) => console.log("Purchase Complete")}
                onPurchaseError={(error, data) =>
                  console.log("Transaction Error", error, data)
                }
                onClose={(data, stepData, currentStep) =>
                  console.log("Modal Closed")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </NftDetailsStyle>
  );
};

export default NftDetailsModal;
