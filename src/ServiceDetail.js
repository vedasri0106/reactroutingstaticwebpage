import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceName } = useParams();

  return (
    <div>
      <h2>Service: {serviceName}</h2>
      <p>Details about the {serviceName} service provided by Innomatics.</p>
    </div>
  );
};

export default ServiceDetail;
