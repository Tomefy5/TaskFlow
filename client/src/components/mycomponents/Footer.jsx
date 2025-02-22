import { Facebook, MessageCircle, Github } from "lucide-react";

export default function Footer() {
  const contacts = [
    { contact: "github", Icon: Github, href: "https://github.com/Tomefy5" },
    {
      contact: "whatsapp",
      Icon: MessageCircle,
      href: "https://wa.me/261327137415",
    },
    {
      contact: "facebook",
      Icon: Facebook,
      href: "https://web.facebook.com/tomefy.andrytsiresy",
    },
  ];

  return (
    <footer className="fixed bottom-0 border-t w-full flex-shrink-0 h-20 bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Mention de copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} TaskFlow - Built by Tomefy
        </div>
        {/* Liens vers les réseaux sociaux */}
        <div className="flex items-center space-x-4">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <contact.Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
