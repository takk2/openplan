'use client'

import Image from 'next/image'
import { useImageStore } from '../../../lib/store/useImageStore'
import { useImageWithStore } from '../../../lib/store/useImageWithQuery'
import Header from '../header/Header'
import styled from '@emotion/styled'
import Information from './Information'

const Result = () => {
  const { isLoading } = useImageWithStore()
  const imageData = useImageStore(state => state.imageData)

  return (
    <Container bg={imageData?.download_url || ''}>
      <Header theme="dark" />
      <ImageInfoContainer>
        <ImageContainer>
          {imageData?.download_url && (
            <StyledImage
              src={imageData.download_url}
              alt="image"
              fill
            />
          )}
        </ImageContainer>
        <Information data={imageData} />
      </ImageInfoContainer>
    </Container>
  )
}

export default Result

const Container = styled.div<{ bg: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 0px 20px 60px;
  overflow-x: hidden;

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    padding-bottom: 0px;
  }

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
      url(${props => props.bg});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${5000 / 3333};
  border-radius: 24px;
  overflow: hidden;
  padding: 0;

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    padding: 0px 20px;
  }
`

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`

const ImageInfoContainer = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr;

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 92px);
  }
`
