'use client'

import styled from '@emotion/styled'
import { Button } from '@repo/ui/Button/Button.tsx'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Header from '../header/Header'
import { useImageWithStore } from '../../../lib/store/useImageWithQuery'
import useMediaQuery from '../../../hooks/useMediaQuery'

const Home = () => {
  const router = useRouter()
  const { refetch } = useImageWithStore()
  const isDesktop = useMediaQuery('(min-width: 1440px)')

  const onClickNextButton = () => {
    router.push('/result')
    localStorage.setItem('already_show', 'true')
  }

  useEffect(() => {
    refetch()
    const isShow = localStorage.getItem('already_show')
    if (isShow === 'true') {
      router.push('/result')
    }
  }, [])

  return (
    <>
      <Container>
        <Header />
        <TextContainer>
          <Text>{'안녕하세요\n{김영탁}입니다.'}</Text>
        </TextContainer>
        <ButtonContainer>
          <Button
            onClick={onClickNextButton}
            size={isDesktop ? 'lg' : 'base'}>
            다음
          </Button>
        </ButtonContainer>
      </Container>
    </>
  )
}

export default Home

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100dvh;
  padding: 0px 10px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`

const Text = styled.p`
  font-size: 28px;
  font-weight: 600;
  white-space: pre-line;
  text-align: center;

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    font-size: 32px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 20px;
`
