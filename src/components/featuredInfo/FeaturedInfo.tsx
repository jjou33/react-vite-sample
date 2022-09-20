import styled from '@emotion/styled'
import { css } from '@emotion/react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const FeaturedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const FeaturedItemWrapper = styled.div`
  flex: 1;
  margin: 0 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;

  -webkit-box-shadow: 0px 0px 12px -1px #000000;
  box-shadow: 0px 0px 12px -1px #000000;
`

const FeaturedTitleSpan = styled.span`
  font-size: 20px;
`

const FeaturedMoneyContainerDiv = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`

const FeaturedMoneySpan = styled.span`
  font-size: 30px;
  font-weight: 600;
`

const FeaturedMoneyRateSpan = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

const FeaturedSubSpan = styled.span``

const FeaturedIcon = css`
  &.negative {
    color: red;
  }
  &.plus {
    color: green;
  }
`

const FeaturedInfo = () => {
  return (
    <FeaturedContainer>
      <FeaturedItemWrapper>
        <FeaturedTitleSpan>Revenue</FeaturedTitleSpan>
        <FeaturedMoneyContainerDiv>
          <FeaturedMoneySpan>$2,415</FeaturedMoneySpan>
          <FeaturedMoneyRateSpan>
            +11.4
            <ArrowUpwardIcon css={FeaturedIcon} className="plus" />
          </FeaturedMoneyRateSpan>
        </FeaturedMoneyContainerDiv>
        <FeaturedSubSpan>Compared to last month</FeaturedSubSpan>
      </FeaturedItemWrapper>

      <FeaturedItemWrapper>
        <FeaturedTitleSpan>Revenue</FeaturedTitleSpan>
        <FeaturedMoneyContainerDiv>
          <FeaturedMoneySpan>$2,415</FeaturedMoneySpan>
          <FeaturedMoneyRateSpan>
            -11.4
            <ArrowDownwardIcon css={FeaturedIcon} className="negative" />
          </FeaturedMoneyRateSpan>
        </FeaturedMoneyContainerDiv>
        <FeaturedSubSpan>Compared to last month</FeaturedSubSpan>
      </FeaturedItemWrapper>

      <FeaturedItemWrapper>
        <FeaturedTitleSpan>Revenue</FeaturedTitleSpan>
        <FeaturedMoneyContainerDiv>
          <FeaturedMoneySpan>$2,415</FeaturedMoneySpan>
          <FeaturedMoneyRateSpan>
            +52.4
            <ArrowUpwardIcon css={FeaturedIcon} className="plus" />
          </FeaturedMoneyRateSpan>
        </FeaturedMoneyContainerDiv>
        <FeaturedSubSpan>Compared to last month</FeaturedSubSpan>
      </FeaturedItemWrapper>
    </FeaturedContainer>
  )
}

export default FeaturedInfo
