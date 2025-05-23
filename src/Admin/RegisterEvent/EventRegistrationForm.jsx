import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
  Card,
  CardHeader,
  CardBody,
  Divider,
} from "@chakra-ui/react";

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    eventDate: "",
    link: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.eventDate.trim()) newErrors.eventDate = "Event date is required";
    if (!formData.link.trim()) newErrors.link = "Link is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("https://folk-server-b25x.onrender.com/api/whatsapp/registerEvent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Something went wrong");

      toast({
        title: "Event registered",
        description: "Participants will receive WhatsApp notifications.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setFormData({ title: "", eventDate: "", link: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to register event.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxW="container.sm" py={10}>
      <Card variant="outline" boxShadow="md">
        <CardHeader>
          <Heading as="h1" size="lg" textAlign="center" mb={2}>
            Gita Event Registration
          </Heading>
          <Text textAlign="center" color="gray.600">
            Notify all Gita participants about a new event
          </Text>
        </CardHeader>
        <Divider />
        <CardBody>
          <Box as="form" onSubmit={handleSubmit}>
            <VStack spacing={6} align="stretch">
              <FormControl isInvalid={!!errors.title} isRequired>
                <FormLabel>Event Title</FormLabel>
                <Input
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  placeholder="e.g. Gita Session on Mind Control"
                />
                <FormErrorMessage>{errors.title}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.eventDate} isRequired>
                <FormLabel>Event Date & Time</FormLabel>
                <Input
                  type="datetime-local"
                  value={formData.eventDate}
                  onChange={(e) => handleChange("eventDate", e.target.value)}
                />
                <FormErrorMessage>{errors.eventDate}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.link} isRequired>
                <FormLabel>Meeting Link</FormLabel>
                <Input
                  value={formData.link}
                  onChange={(e) => handleChange("link", e.target.value)}
                  placeholder="e.g. https://zoom.us/j/xxxxx"
                />
                <FormErrorMessage>{errors.link}</FormErrorMessage>
              </FormControl>

              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                isLoading={isSubmitting}
                loadingText="Registering..."
                width="full"
              >
                Register Event
              </Button>
            </VStack>
          </Box>
        </CardBody>
      </Card>
    </Container>
  );
};

export default EventRegistrationForm;
