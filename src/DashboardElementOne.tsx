import * as React from 'react';
import {DashboardElementOneLayout} from './components/DashboardElementOneLayout';
import {tripleNumber} from './utils/triple-number';

interface DashboardElementOneProps {
  readonly loading: boolean;
}

export const DashboardElementOne: React.FC<DashboardElementOneProps> = ({
  loading,
}) => {
  const [count, setTripleCount] = React.useState<number>(1);

  const onClickTripleCount = (
    event: React.SyntheticEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    setTripleCount(tripleNumber(count));
  };

  if (loading) {
    return <p>...Loading...</p>;
  }

  return (
    <DashboardElementOneLayout
      content={<p>{count}</p>}
      tripleCountButton={
        <button onClick={(event) => onClickTripleCount(event)}>triple</button>
      }
    />
  );
};
