import React from 'react'
import styled from 'styled-components'
import TwentyTwenty from 'react-twentytwenty'
import iconDown from '../../assets/icons/iconDown.png'

import { colors, fonts } from '../../styles'

const ScrubberViewBtn = styled.button`
  margin: 1em;
  padding: 10px 20px;
  background-color: ${colors.lightGray};
  color: ${colors.secondaryText};
  border-radius: 3px;
  text-transform: uppercase;
  font-family: ${fonts.latoRegular};
  text-align: center;
  font-size: 12px;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`

const Wrapper = styled.div`
  height: 100%;
  cursor: ew-resize;
  padding-bottom: 20px;
  overflow: auto;

  .slider {
    height: 100%;
    width: 5px;
    background: ${colors.red};
  }

  .testImage {
    opacity: 1;
  }
`

const WrapTitle = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.h3`
  flex-basis: 50%;
  text-align: center;
  font-family: ${fonts.latoBold};
  color: ${colors.primaryText};
`

export default function ImageScrubber({
  position,
  refImage,
  testImage,
  showScrubberTestImage,
  showScrubberRefImage,
  showScrubber
}) {
  return (
    <Wrapper>
      <WrapTitle>
        <ScrubberViewBtn
          onClick={() => {
            showScrubberRefImage()
          }}
        >
          REFERENCE
        </ScrubberViewBtn>
        <ScrubberViewBtn
          onClick={() => {
            showScrubberTestImage()
          }}
        >
          TEST
        </ScrubberViewBtn>
        <ScrubberViewBtn
          onClick={() => {
            showScrubber()
          }}
        >
          SCRUBBER
        </ScrubberViewBtn>
      </WrapTitle>
      <TwentyTwenty
        verticalAlign="top"
        minDistanceToBeginInteraction={0}
        maxAngleToBeginInteraction={Infinity}
        initialPosition={position}
        newPosition={position}
      >
        <img className="refImage" src={refImage} />
        <img className="testImage" src={testImage} />
        <div className="slider" />
      </TwentyTwenty>
    </Wrapper>
  )
  // }
}
