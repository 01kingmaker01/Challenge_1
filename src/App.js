import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import "styled-components/macro";
import { ReactComponent as Dice } from "./images/icon-dice.svg";
import { ReactComponent as MobileDivider } from "./images/pattern-divider-mobile.svg";

const Container = tw.div`bg-dark-blue text-center min-h-screen w-screen flex flex-col items-center`;

const Box = tw.div`w-11/12 bg-dark-grayish-blue rounded-xl min-height[316px] relative top[7.5rem]  `;

const TopCont = tw.div` mt-10 mb-6 text-secondary text-xs font-medium`;

const Quote = tw.p`text-default font-bold text-primary p-6 pt-0  font-manrope `;

const BottomCont = tw.div`absolute w-full left-0 bottom-0 `;

const DividerCon = styled.div`
  ${tw`absolute left-1/2 -translate-x-1/2 -top-20`}
  svg {
    ${tw`mx-auto`}
  }
`;

const DiceCon = styled.span`
  ${tw`cursor-pointer p-4 bg-secondary rounded-full inline-block absolute left-1/2 -translate-x-1/2 -bottom-7`}
`;

const App = () => {
  const [quote, setQuote] = useState({ id: null, advice: null });

  const fetchApi = async () => {
    let { slip } = await fetch("https://api.adviceslip.com/advice").then(
      (slip) => slip.json()
    );
    setQuote(slip);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Container>
      <Box>
        <TopCont>
          A D V I C E &nbsp; {`#${quote.id}`.split("").join(" ")}
        </TopCont>
        <Quote>&ldquo;{quote.advice}&rdquo;</Quote>
        <BottomCont>
          <DividerCon>
            <MobileDivider />
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
