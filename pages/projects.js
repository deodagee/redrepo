import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';


import weatherapp from '../public/images/works/weatherapp.png';
import thumbnail from '../public/images/works/thumbnail.png';



const Works = () => (
  <Layout title="Works">
    <Container>

      <Heading 
      as="h3" 
      fontSize={30} 
      mt={0}
      mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={0}>
          Apps
        </Heading>
      </Section>

        <Section>
          <WorkGridItem
          mb = {10} 
          id="weatherapp" 
          title="weatherapp" 
          thumbnail={weatherapp}>
            WeatherForYou
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={0}>
          3D
        </Heading>
      </Section>

        <Section>
          <WorkGridItem
          mb = {10} 
            id=""
            title="Empty"
            thumbnail={thumbnail}>
            Description
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
          mb = {10} 
            id=""
            title="Empty"
            thumbnail={thumbnail}>
            Description
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem 
          id=""
          title="Empty"
          thumbnail={thumbnail} >
          Description
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Videos
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem 
          id=""
          title="Empty"
          thumbnail={thumbnail} >
          Description
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id=""
            title="Empty"
            thumbnail={thumbnail}>
            Description
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem 
          id=""
          title="Empty"
          thumbnail={thumbnail} >
          Description
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Older Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem 
          id=""
          title="Empty"
          thumbnail={thumbnail} >
          Description
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id=""
            title="Empty"
            thumbnail={thumbnail}>
            Description
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem 
          id=""
          title="Empty"
          thumbnail={thumbnail} >
          Description
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
