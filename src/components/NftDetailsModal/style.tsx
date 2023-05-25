import styled from "@emotion/styled";

export const NftDetailsStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-content {
    max-height: 70vh;
    overflow-y: auto;
    background: #26292b;
    color: #ffffff;
    padding: 2rem;
    border-radius: 1rem;
    position: relative;
    width: 100%;
    min-width: 500px;
    max-width: 700px;
    transition: max-width 0.2s linear;
    @media screen and (max-width: 700px) {
      min-width: 300px;
      max-width: 400px;
    }

    .details-wrapper {
      margin-top: 2rem;
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;

      @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
      }

      .nft-details {
        text-align: left;
        h1 {
          font-size: 22px;
          text-align: left;
          margin-top: 0;
        }

        .nft-description {
          text-align: left;
          word-break: break-word;
          opacity: 0.8;
          line-height: 1.5rem;

          &.clamped {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5; /* number of lines to show */
            line-clamp: 5;
            -webkit-box-orient: vertical;
          }
        }

        .nft-price-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          @media screen and (max-width: 700px) {
            flex-direction: column;
          }
          button {
            background: rgba(40, 0, 200, 0.7);
            color: white;
            padding: 1rem 2rem;
            font-size: 16px;
            border-radius: 6px;
            border: none;
            outline: none;

            @media screen and (max-width: 700px) {
              width: 100%;
            }
            &:hover {
              background: rgba(40, 0, 200, 0.9);
            }
          }
          .nft-amount {
            text-align: left;
            font-size: 18px;
          }
        }
      }
    }

    .nft-image {
      width: 100%;
      object-fit: contain;
      @media screen and (min-width: 700px) {
        position: sticky;
        top: 0;
      }
    }
    .close-button {
      position: absolute;
      top: 1.5rem;
      right: 1.15rem;
      width: 20px;
      height: 20px;
      opacity: 0.7;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
  // padding: 0 20px;
  // 	margin: 20px auto;
  // 	display: flex;
  // 	flex-direction: column;

  // 	max-width: 600px;

  // 	&:hover{

  //     background-color: rgba(0, 0, 0, 0); /* Black w/opacity/see-through */}
`;
