import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout 
    title="Weather App">
      <Container>
        <Title>
          WeatherForYou <Badge>Dec 2022-</Badge>
        </Title>
        <P>
        &quot;This WeatherForYou app was built using 
        Next.js, provides a user-friendly interface
         for accessing real-time weather information
          from various locations around the world. 
          With data sourced from a reliable weather
           API, users can access up-to-date information 
           about temperature, precipitation, wind speed, 
           and more. The app is designed to be fast, 
           efficient, and accessible, making it easy 
           for users to quickly check the weather from 
           their desktop or mobile device.&quot;
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://astrumstellar.com">
              Coming soon <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJs + React</span>
          </ListItem>

        </List>


        
      </Container>
    </Layout>
  )
  
  export default Work
