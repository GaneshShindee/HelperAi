import { SignIn } from "@clerk/nextjs";

// For Clerk's catch-all routes, we need to handle the dynamic segments properly
export const dynamic = 'force-dynamic';

export default function Page() {
  return <SignIn />;
}
