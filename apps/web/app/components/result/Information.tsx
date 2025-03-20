'use client'

import styled from '@emotion/styled'
import { Button } from '@repo/ui/Button/Button.tsx'
import { useRouter } from 'next/navigation'
import { ImageDataType } from '../../../lib/api/query/result/dto'

interface IInformationProps {
  data: ImageDataType | null
}

const Information = ({ data }: IInformationProps) => {
  const router = useRouter()
  const onClickPrevButton = () => {
    router.push('/')
  }
  return (
    <InformationContainer>
      <InformationBox>
        <InformationItem>
          <label>id</label>
          <p>{data?.id}</p>
        </InformationItem>
        <InformationItem>
          <label>author</label>
          <p>{data?.author}</p>
        </InformationItem>
      </InformationBox>
      <InformationBox>
        <InformationItem>
          <label>width</label>
          <p>{data?.width}</p>
        </InformationItem>
        <InformationItem>
          <label>height</label>
          <p>{data?.height}</p>
        </InformationItem>
      </InformationBox>
      <InformationBox>
        <InformationItem>
          <label>url</label>
          <p className="underline">{data?.url}</p>
        </InformationItem>
        <InformationItem>
          <label>download_url</label>
          <p className="underline">{data?.download_url}</p>
        </InformationItem>
      </InformationBox>
      <ButtonContainer>
        <Button onClick={onClickPrevButton}>이전</Button>
      </ButtonContainer>
    </InformationContainer>
  )
}

export default Information

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    align-items: center;
    justify-content: center;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    padding: 0px 20px;
  }
`

const InformationBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;
  padding: 20px;
  border-radius: 16px;
  background: #fff;
  stroke: #000000;
  stroke-width: 1px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`

const InformationItem = styled.div`
  width: 100%;
  font-size: 15px;

  label {
    font-weight: 500;
    color: #111;
  }

  p {
    font-weight: 500;
    color: #888;

    &.underline {
      text-decoration: underline;
    }
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
