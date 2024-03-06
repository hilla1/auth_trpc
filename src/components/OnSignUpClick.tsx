'use client'

import Logo from '@/assets/Logo.png'
import Image from 'next/image'

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import SignUp from './SignUp'

export default function OnSignUpClick() {
  return (
    <AlertDialog>
    <AlertDialogTrigger>SignUp</AlertDialogTrigger>
    <AlertDialogContent>
     <SignUp/>
     <div className='container relative flex flex-col items-center justify-center lg:px-0'>
     <AlertDialogCancel className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>Cancel</AlertDialogCancel>
     </div>
    </AlertDialogContent>
  </AlertDialog>
  )
}
