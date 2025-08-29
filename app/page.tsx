import { Button } from "@/components/ui/button";
import UserButton from "@/modules/auth/components/user-button";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Button>click me</Button>
      <UserButton />
    </div>
  );
}
