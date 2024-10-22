import { useState } from 'react';
import { Box, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button,  useToast } from "@chakra-ui/react";
import CenteredLayout from "../components/CenteredLayout.jsx";

const CreatePage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [rating, setRating] = useState('');

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare JSON payload
    const newRestaurantData = {
      name,
      cuisine,
      description,
      address,
      rating,
      imageUrl
    };

    // Here you would send this data to your server
    console.log(newRestaurantData);
    
    toast({
      title: "Restaurant created.",
      description: "Your new restaurant has been added successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Reset form
    setName('');
    setCuisine('');
    setDescription('');
    setAddress('');
    setImageUrl('');
    setRating('');
  };

  return (
    <CenteredLayout>
      <Box p={8}>
        <Heading mb={6}>Create New Restaurant</Heading>
        <VStack as="form" spacing={8} align="stretch" onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Restaurant name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Cuisine</FormLabel>
            <Input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} placeholder="Cuisine Type" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description of the restaurant" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Rating</FormLabel>
            <Input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
          </FormControl>
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating (1-5)" />
          </FormControl>
          <Button colorScheme="blue" type="submit">Create Restaurant</Button>
        </VStack>
      </Box>
    </CenteredLayout>
  );
}

export default CreatePage;