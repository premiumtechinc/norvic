import { Fragment } from 'react';
import { Heading, Text } from '@chakra-ui/react';

import Page from '../../components/Page';
import Content from '../../components/Content';


function Home() {
  return (
    <Page>
      {/* <header className="app-header">
        <Heading>PROJECT NORVIC</Heading>
        <Heading size="2xl">PROJECT NORVIC</Heading>
        <Text>Project Norvic</Text>
        <Text fontWeight="bold" fontSize="lg">Project Norvic</Text>
      </header> */}
      <Content
        title="This is the header where you can put your slogan"
        subtitle="This is the subheader section where you describe the services of your company"
        image="https://source.unsplash.com/collection/404339/800x600"
        text="Get in touch with us"
        link="/contact"
      />
    </Page>
  );
}

export default Home;
