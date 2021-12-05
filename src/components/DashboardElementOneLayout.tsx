import * as React from 'react';
import styled from 'styled-components';

interface DashboardElementOneLayoutProps {
  readonly content: JSX.Element;
  readonly tripleCountButton: JSX.Element;
}

const StyledDashboardElementOneLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DashboardElementOneLayout: React.FC<
  DashboardElementOneLayoutProps
> = ({content, tripleCountButton}) => (
  <StyledDashboardElementOneLayout>
    {content}
    {tripleCountButton}
  </StyledDashboardElementOneLayout>
);
