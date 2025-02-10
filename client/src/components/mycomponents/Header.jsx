import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ListTodo } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Project Title */}
        <div className="text-xl font-bold flex items-center justify-center gap-2">
          <ListTodo size={28} color="#000" />
          <span>TaskFlow</span>
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Button asChild variant="outline">
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
