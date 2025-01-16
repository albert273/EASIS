import Cards from "@/components/contactUs/Cards";
import Form from "@/components/contactUs/Form";
import HeroPages from "@/components/hero/HeroPages";
import { Stack } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Stack>
      <HeroPages page={"Contact Us"} title={"Contact Us"} />
      <Stack gap={6} sx={{ marginTop: "30px" }}>
        <Cards />
        <Form />
      </Stack>
    </Stack>
  );
}
