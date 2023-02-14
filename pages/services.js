import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import branding from '../public/images/works/branding.png'
import flstudio from '../public/images/works/flstudio.png'
import frontend from '../public/images/works/frontend.png'
import geometrynodes from '../public/images/works/geometrynodes.png'
import modeling from '../public/images/works/modeling.png'
import uiux from '../public/images/works/uiux.png'


const Works = () => (
  <Layout title="Works">
    <Container>

    <Heading 
      as="h3" 
      fontSize={30} 
      mt={0}
      mb={4}>
        Services
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.2}>
        <Divider my={6} />
      </Section>

      <Section>
          <WorkGridItem
            id="branding"
            title="Branding"
            thumbnail={branding}>
            Description
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="flstudio"
            title="Audio"
            thumbnail={flstudio}>
            Description
          </WorkGridItem>
        </Section>
        
        <Section delay={0.1}>
          <WorkGridItem 
          id="frontend"
          title="Front/Back End"
          thumbnail={frontend} >
          Description
          </WorkGridItem>
        </Section>
         
        <Section>
          <WorkGridItem
            id="geometrynodes"
            title="Geometry Nodes"
            thumbnail={geometrynodes}
          >
            Description
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="modeling"
            title="Modeling"
            thumbnail={modeling}
          >
            Description
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="uiux" 
          thumbnail={uiux} 
          title="Ui / Ux">
          Description
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

      </Section>
    </Container>
  </Layout>
)

export default Works
