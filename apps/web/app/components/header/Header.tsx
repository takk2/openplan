'use client'

import styled from '@emotion/styled'

interface IHeaderProps {
  theme?: 'right' | 'dark'
}

const Header = ({ theme = 'right' }: IHeaderProps) => {
  return (
    <Container>
      <Title headerTheme={theme}>김영탁</Title>
    </Container>
  )
}

export default Header

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  padding: 17px 20px;
`

const Title = styled.h1<{ headerTheme: 'right' | 'dark' }>`
  font-size: 15px;
  font-weight: 500;
  color: ${({ headerTheme }) => (headerTheme === 'dark' ? '#fff' : '#1a1a1a')};
`
