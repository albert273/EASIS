import HeroPages from "@/components/hero/HeroPages";
import ImageListComponents from "@/components/ourProjects/ImageList";
import { Container, Stack } from "@mui/material";
export default function page() {

  return (
    <Stack gap={8}>
      <HeroPages title={"Our Projects"} page={"Our Projects"} />
      <Container maxWidth={false} sx={{ width: "90%" }}>
        <ImageListComponents />
      </Container>
    </Stack>
  );
}
