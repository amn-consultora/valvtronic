"use client";

import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
        <Button
          size="lg"
          className="w-full"
          variant="vx"
          onClick={() => {}}
        >
          <FcGoogle className="size-5" />
        </Button>
    </div>
  )
}
