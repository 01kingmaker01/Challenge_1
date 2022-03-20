import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import 'styled-components/macro'
import { ReactComponent as Dice } from './images/icon-dice.svg'
import { ReactComponent as MobileDivider } from './images/pattern-divider-mobile.svg'

const Container = tw.div`bg-dark-blue text-center min-h-screen w-screen flex flex-col items-center justify-center  `

const Box = tw.div`w-11/12 bg-dark-grayish-blue rounded-xl min-height[320px] grid items-center relative -top-14 gap-y-6  `

const TopCont = tw.div` mt-6 text-secondary text-xs font-medium `

const Quote = tw.p`text-default font-bold text-primary px-6  font-manrope `

const BottomCont = tw.div``

const DiceCon = styled.span``

const DividerCon = styled.span``

const App = () => {
  return (
    <>
      <Container>
        <Box>
          <TopCont>A D V I C E</TopCont>
          <Quote>
            &ldquo;It is easy to sit up and take notice, what's difficult is
            getting up and taking action.&rdquo;
          </Quote>
          <BottomCont>
            <DividerCon>
              <MobileDivider />
            </DividerCon>
            <DiceCon>
              <Dice />
            </DiceCon>
          </BottomCont>
        </Box>
      </Container>
    </>
  )
}
export default App
