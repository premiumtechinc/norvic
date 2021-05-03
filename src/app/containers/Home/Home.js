import React, { Fragment } from 'react';
import MessengerChat from 'react-messenger-customer-chat';

import Content from '../../components/Content';

import motto from '../../../images/motto.png';


const Home = () => {
  return (
    <Fragment>
      <Content
        title="This is the header where you can put your slogan"
        subtitle="This is the subheader section where you describe the services of your company"
        // image="https://source.unsplash.com/collection/404339/800x600"
        image={motto}
        text="Get in touch with us"
        link="/contact"
      />

      <MessengerChat
        pageId="100754588842352"
        appId="475139486939056"
      />
    </Fragment>
  );
}

export default Home;
