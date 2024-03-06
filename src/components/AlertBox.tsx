'use client'

import Logo from '@/assets/Logo.png'
import Image from 'next/image'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { useState } from 'react'

export default function AlertBox() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle className='flex flex-col justify-center items-center'>
      <Image src={Logo} alt='Logo' className='flex w-[50%] md:w-[50%] cursor-pointer'/>
        Are you absolutely sure?
        </AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}
