import HeroPages from '@/components/hero/HeroPages'
import LeftAppBar from '@/components/services/LeftAppBar'
import RightSection from '@/components/services/RightSection'
import { Stack } from '@mui/material'
import React from 'react'

export default function page() {
  return (
    <Stack gap={8}>
        <HeroPages title={'Services'} page={'services'}/>
        <Stack direction={'row'} gap={3}>
            <Stack sx={{width: "30%", display:{xs: "none", lg: "flex"}}}>
            <LeftAppBar />
            </Stack>
            <Stack sx={{width: {xs:"95%", lg:"70%"}}}>
            <RightSection />

            </Stack>
        </Stack>
    </Stack>
  )
}

