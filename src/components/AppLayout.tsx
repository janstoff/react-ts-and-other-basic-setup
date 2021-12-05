import * as React from 'react';
import styled from 'styled-components';

interface AppLayoutProps {
  readonly headerText: string;
  readonly dashboardElementOne: JSX.Element;
  readonly dashboardElementTwo: JSX.Element;
  readonly dashboardElementThree: JSX.Element;
  readonly dashboardElementFour: JSX.Element;
}

const StyledLayout = styled.div`
  padding: 20px;
`;

const StyledDashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media (min-width: 560px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;

const StyledHeader = styled.h1``;

const StyledDashboardElementWrapper = styled.div`
  border: 1px solid gold;
`;

export const AppLayout: React.FC<AppLayoutProps> = ({
  headerText,
  dashboardElementOne,
  dashboardElementTwo,
  dashboardElementThree,
  dashboardElementFour,
}) => (
  <StyledLayout>
    <StyledHeader>{headerText}</StyledHeader>
    <StyledDashboardGrid>
      <StyledDashboardElementWrapper>
        {dashboardElementOne}
      </StyledDashboardElementWrapper>
      <StyledDashboardElementWrapper>
        {dashboardElementTwo}
      </StyledDashboardElementWrapper>
      <StyledDashboardElementWrapper>
        {dashboardElementThree}
      </StyledDashboardElementWrapper>
      <StyledDashboardElementWrapper>
        {dashboardElementFour}
      </StyledDashboardElementWrapper>
    </StyledDashboardGrid>
  </StyledLayout>
);
