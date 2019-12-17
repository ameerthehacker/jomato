import React from 'react';
import { Box, Image, Badge, Text } from '@chakra-ui/core';

function Restaurant({ restaurant }) {
  const property = {
    imageUrl: restaurant.thumb || '/restaurants/placeholder.png',
    imageAlt: restaurant.name,
    title: restaurant.name,
    cuisines: restaurant.cuisines.split(',').length,
    formattedPrice: `${restaurant.average_cost_for_two} for two`
  };

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image 
        w={"200px"}
        src={property.imageUrl} 
        alt={property.imageAlt} 
      />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
          {property.cuisines} Cuisines
          </Box>
        </Box>

        <Text
          mt="1"
          fontWeight="semibold"
          as="h4"
          isTruncated
          maxWidth={150}
        >
          {property.title}
        </Text>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Restaurant;
