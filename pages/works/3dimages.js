import {
  Container,
  Badge,
  SimpleGrid,
  Heading,
  Center,
  Box,
  Button,
} from '@chakra-ui/react'
import Section from '../../components/section'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import Image from 'next/image'
import NextLink from 'next/link'

const myLoader = ({src, width, quality}) => {
  return `https://astrumstellar.com/${src}?w=${width}&q=${quality || 75}`
}

const Work = (props) => (
  <Layout title="3D Images">
    <Container>
      <Title>
        3D <Badge>Visuals</Badge>
      </Title>
      <P>
      Effective branding leverages digital creativity to effectively communicate a company&apos;s unique identity and values to its target audience through various digital channels.        
      </P>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Gallery</Center>
      </Heading>

      
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 3]} gap={6}>

        <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>
          
          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>
          
          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

          <Image
          loader={myLoader}
          src="/images/works/branding.jpg"
          alt='0'
          width={200}
          height={200}>
          </Image>

       
        </SimpleGrid>
      </Section>
    </Container>

    <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="green"
        mt={50}>
          Return to home
        </Button>
      </Box>

    
  </Layout>
  
)

export default Work
