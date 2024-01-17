import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({ purpose, title1, title2, description1, description2, buttonText, linkName, imageURL  }) => { // Creating a reusable banner component. Every component has props, which are the properties that are passed in. in this case we have a prop called purpose.
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      {/* {purpose} This is the text that will be passed in. it's a reusable component */}

      <Image src={imageURL} width={500} height={300} />
      <Box p="5"> {/*P is padding*/}
        
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
        <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{description1}<br />{description2}</Text>

        <Button fontSize='xl' bg="blue.300" color="white">
          <Link href={linkName}>{buttonText}</Link>
        </Button>

      </Box>
    </Flex>
  );
};

const Home = ({ propertiesForSale, propertiesForRent }) => {
  return (
    <Box>

      <Banner 
        purpose={ 'RENT A HOME' } 
        title1={ 'Rental Homes For' }
        title2={ 'Everyone' }
        description1={ 'Explore from Apartments, builder floors, villas' }
        description2={ 'and more.' }
        buttonText={ 'Explore Renting' }
        linkName={ '/search?purpose=for-rent' }
        imageURL={ 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4' }
      />

      {/* <Flex flexWrap='wrap'>
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex> */}

      <Banner 
        purpose={ 'BUY A HOME' }
        title1={ ' Find, Buy & Own Your' }
        title2={ 'Dream Home' }
        description1={ ' Explore from Apartments, land, builder floors,' }
        description2={ ' villas and more' }
        buttonText={ 'Explore Buying' }
        linkName={ '/search?purpose=for-sale' }
        imageURL={ 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008' }
      />

      {/* <Flex flexWrap='wrap'>
        {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
      </Flex> */}

    </Box>
  );
}

export default Home;
