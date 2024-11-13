import { UserMenu } from "./UserMenu";
import { auth } from "@/auth";

export const User = async() => {

  const session = await auth(); 

  return (
    <UserMenu user={session?.user || null} />
  )
}
