import React from 'react';
import {AppLayout} from './components/AppLayout';
import {DashboardElementOne} from './DashboardElementOne';

const App: React.FC = () => {
  const [firstElementLoading, setFirstElementLoading] = React.useState(true);
  React.useEffect(() => {
    // Do async api fetching etc. here and set the relevant response data
    // into the App component state.
    // If api calls are designed for more specific to child components (i.e. parts of the dashboard)
    // fetch and set them there.

    // The setTimeout is just an example for illustration.
    setTimeout(() => {
      setFirstElementLoading(false);
    }, 2000);
  }, []);

  return (
    <AppLayout
      headerText={'Hello World'}
      dashboardElementOne={
        <DashboardElementOne loading={firstElementLoading} />
      }
      dashboardElementTwo={<p>Dashboard Element 2</p>}
      dashboardElementThree={<p>Dashboard Element 3</p>}
      dashboardElementFour={<p>Dashboard Element 4</p>}
    />
  );
};

export default App;
