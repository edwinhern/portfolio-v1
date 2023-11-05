"use client";

import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { Button } from "@/components/ui/button";

export default function CustomNotFound() {
  const pathname = usePathname();
  const isBlogPath = useMemo(() => pathname.includes("/blog"), [pathname]);
  const backURL = isBlogPath ? "/blog" : "/";

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <h1>404 - Page Not Found 🤖</h1>
        <Link href={backURL}>
          <Button>
            <MoveLeft size={18} className="mr-2" />
            {isBlogPath ? "Back to Blog" : "Back to Home"}
          </Button>
        </Link>
      </div>
    </>
  );
}
