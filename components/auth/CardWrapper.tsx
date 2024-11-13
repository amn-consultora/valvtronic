"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/auth/Header";
import { Social } from "@/components/auth/Social";
import { BackButton } from "@/components/auth/BackButton";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonQuestion: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({backButtonHref, backButtonLabel, backButtonQuestion, children, headerLabel, showSocial}:CardWrapperProps) => {
  return (
    <Card className="px-3 bg-transparent">
        <CardHeader>
            <Header label={headerLabel} />
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        {showSocial && (
            <CardFooter>
                <Social />
            </CardFooter>
        )}
        <CardFooter>
            <BackButton 
                label={backButtonLabel}
                question={backButtonQuestion}
                href={backButtonHref}
            />
        </CardFooter>
    </Card>
  )
}
