"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

interface BackButtonProps {
  label: string;
  question: string;
  href: string;
}

export const BackButton = ({href, label, question}:BackButtonProps) => {
  return (
    <Button
      variant="link"
      className="font-normal w-full text-sm lg:text-xl"
      size="sm"
      asChild
    >
      <Link href={href} className="flex flex-col md:flex-row gap-3"> 
        <span>{question}</span>      
        {label}      
      </Link>
    </Button>
  )
}
