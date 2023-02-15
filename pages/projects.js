import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';


import weatherapp from '../public/images/works/weatherapp.jpg';
import thumbnail from '../public/images/works/thumbnail.jpg';



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
          thumbnail={weatherapp}
          quality={50}>
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
            id="3dimages"
            title="3dimages"
            thumbnail={thumbnail}
            quality={50}>
            See Gallery
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
          mb = {10} 
            id="3dimages"
            title="3dimages"
            thumbnail={thumbnail}
            quality={50}>
            See Gallery
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
          mb = {10} 
            id="3dimages"
            title="3dimages"
            thumbnail={thumbnail}
            quality={50}>
            See Gallery
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
          id="Videos"
          title="videos"
          thumbnail={thumbnail} 
          quality={50}>
          See Gallery
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="Videos"
            title="videos"
            thumbnail={thumbnail}
            quality={50}>
            See Gallery
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem 
          id="Videos"
          title="videos"
          thumbnail={thumbnail}
          quality={50} >
          See Gallery
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
          id="olderprojects"
          title="Older Projects"
          thumbnail={thumbnail}
          quality={50} >
          See Gallery
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="olderprojects"
            title="Older Projects"
            thumbnail={thumbnail}
            quality={50}>
            See Gallery
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem 
          id="olderprojects"
          title="Older Projects"
          thumbnail={thumbnail}
          quality={50} >
          See Gallery
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
