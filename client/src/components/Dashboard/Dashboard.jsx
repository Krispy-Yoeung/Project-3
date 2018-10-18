import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';




const Dashboard = ({ secretData }) => (


  
  <div id="dashboardCards">
  <Card className="container">
    <CardTitle
      title="Dashboard"
      // subtitle="Successfully signed in"
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>
  <br></br>

<Card className="container">
<CardTitle
  title="Super Hero Page"
  subtitle="link to it?"
/>
</Card>
<br></br>
<Card className="container">
<CardTitle
  title="Super Hero Youtube Page"
  subtitle="link to it?"
/>
</Card>
</div>
  
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
