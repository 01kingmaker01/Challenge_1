import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import "styled-components/macro";
import { ReactComponent as Dice } from "./images/icon-dice.svg";
import { ReactComponent as MobileDivider } from "./images/pattern-divider-mobile.svg";
import { ReactComponent as DesktopDivider } from "./images/pattern-divider-desktop.svg";

const Container = tw.div`bg-dark-blue text-center min-h-screen h-screen w-screen flex flex-col items-center  `;

const Box = tw.div`w-11/12 bg-dark-grayish-blue shadow-xl rounded-xl  relative  top[7.5rem] grid grid-template-columns[1fr] grid-template-rows[80px auto 80px] md:( width[540px]  top[calc(50% - 32px)] transform -translate-y-1/2)  desktop:(top[223px] transform -translate-y-0) `; //top[223px]

const TopCont = tw.div` mt-10 mb-6 text-secondary text-xs font-medium md:(mt-12 font-size[.85rem])  `;

const Quote = tw.p` font-bold text-primary px-6 pb-6 pt-0 font-manrope font-size[24px] letter-spacing[0.5px]  line-height[normal] md:(leading-10 font-stretch[semi-condensed] font-size[28px] pt-2 px-10  pb-11 )`;

const BottomCont = tw.div``;

const DividerCon = styled.div`
  ${tw`md:(relative -top-1.5)`}
  svg {
    ${tw`mx-auto`}
  }
`;

const DiceCon = styled.span`
  ${tw`cursor-pointer p-5  bg-secondary rounded-full inline-block relative left-0 right-0 -bottom-8 md:(hover:box-shadow[0px 0px 24px 8px rgba(82,255,168,0.5)]) -webkit-tap-highlight-color[transparent]   outline[none] transition ease-in-out duration-500 `}
`;

const App = () => {
  const [quote, setQuote] = useState({ id: null, advice: null });

  const fetchApi = async () => {
    try {
      let { slip } = await fetch("https://api.adviceslip.com/advice").then(
        (slip) => slip.json()
      );
      console.table(slip);
      return setQuote(slip);
    } catch (e) {
      console.table(e);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Container>
      <Box>
        <TopCont>
          A D V I C E &nbsp; {quote.id && `#${quote.id}`.split("").join(" ")}
        </TopCont>
        <Quote>
          &ldquo;It is easy to sit up and take notice, what's difficult is
          getting up and taking action&rdquo;
          {/* &ldquo;{quote.advice ? quote.advice : " Loading..."}&rdquo; */}
        </Quote>
        <BottomCont>
          <DividerCon>
            <MobileDivider tw="block md:hidden " />
            <DesktopDivider tw="hidden md:block" />
          </DividerCon>
          <DiceCon onClick={fetchApi}>
            <Dice />
          </DiceCon>
        </BottomCont>
      </Box>
    </Container>
  );
};
export default App;
