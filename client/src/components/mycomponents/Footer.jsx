import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const contacts = [
    { contact: "facebook", Icon: Facebook, href: "" },
    { contact: "twitter", Icon: Twitter, href: "" },
    { contact: "instagram", Icon: Instagram, href: "" },
  ];

  return (
    <footer className="absolute bottom-0 border-t w-full bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Mention de copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} TaskFlow. All rights reserved    
        </div>
        {/* Liens vers les réseaux sociaux */}
        <div className="flex items-center space-x-4">
          {contacts.map((contact, index) => (
            <Link
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <contact.Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
