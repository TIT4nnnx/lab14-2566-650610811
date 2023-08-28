"use client";
import { Button, Container, Divider, Group, Pagination, Rating, Text, Textarea, Title } from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      
      <Title order={4} mt="sm">Your rating</Title>
      <Rating defaultValue={0} size="lg"/>

      <Textarea mt="xs"
      placeholder="Do you enjoy eating?"
      label="Your review"
      size="sm"
      minRows={3}
      />
      
      <Button mt="xs" color="orange">Submit Review</Button>

      <Divider mt="sm" />
      <Group position="center" mt="sm">
        <Title order={4}>Elon Musk</Title>
        <Rating defaultValue={5} />
      </Group>
      <Text align="center"  color="dimmed">Best pizza in this world. I give you X score.</Text>

      <Divider mt="sm" />
      <Group position="center" mt="sm">
        <Title order={4} >Mark Zuck
       </Title>
        <Rating defaultValue={4}/>
      </Group>
      <Text align="center" color="dimmed">My favourite part is pepperoni</Text>

      <Pagination mt="md" position="center" total={20} color="orange" />

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Suphakorn Komod 650610811
      </Text>
    </Container>
  );
}
