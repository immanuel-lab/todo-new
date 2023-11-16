import React from 'react';
import { faker } from '@faker-js/faker';

 

function Faker() {


  return (
    <>
    <p>{faker.internet.userName()}</p>
    <p>{faker.internet.email()}</p>
    <img src={faker.image.avatar()} alt="User Avatar" />
     </>
  );
}

export default Faker;
