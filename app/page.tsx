import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Image from "next/image";

/**
 * Renders the home page: a full-screen, centered container with a Button labeled "click me".
 *
 * Declared `async` so the component can perform server-side data fetching if needed.
 *
 * @returns The page's React element.
 */
export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Button>
        click me
      </Button>
    </div>
  );
}
