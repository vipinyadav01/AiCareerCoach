import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Next.js App</h1>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={200}
        height={200}
        className="rounded-lg shadow-lg bg-white p-4 mb-6"
      />

      <br />
      <p className="text-lg text-gray-300 mb-6">
        This is a simple Next.js application with Tailwind CSS styling.
      </p>
      <Button asChild>
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
          Learn More
        </a>
      </Button>

    </div>
  );
}
