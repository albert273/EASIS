import GrowYourBusiness from '@/components/aboutUs/GrowYourBusiness'
import Questions from '@/components/aboutUs/Questions'
import WhoWeAre from '@/components/aboutUs/WhoWeAre'
import HeroPages from '@/components/hero/HeroPages'
import { Stack } from '@mui/material'
import React from 'react'

export default function AboutUsPage() {
  return (
    <Stack gap={8}>
        <HeroPages page={'About Us'} title={'About Us'}/>
        <WhoWeAre />
        <Questions />
        <GrowYourBusiness />
    </Stack>
  )
}

 