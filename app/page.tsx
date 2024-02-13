'use client'
import './globals.css'
import Image from 'next/image'
import { APP_NAME } from '../utils/config'
import CelebrationIcon from '@mui/icons-material/Celebration'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

export default function Home() {
  return (
    <div className="h-full centered-col">
      <div className="text-xl font-bold py-10">Your Project : {APP_NAME} </div>
      <div className="text-xl font-bold py-10 between-row gap-x-2">
        Mui Icon :{' '}
        <div className="text-blue-400">
          <CelebrationIcon />
        </div>{' '}
      </div>
      <div className="text-xl font-bold py-10 between-row gap-x-2">
        Mui Button:
        <>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </>
      </div>
    </div>
  )
}
