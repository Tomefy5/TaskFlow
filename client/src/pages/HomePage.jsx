import { Button } from "@/components/ui/button";
import BasicLayout from "@/layouts/BasicLayout";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <BasicLayout>
      <section className="py-20 px-8 md:px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Titre et sous-titre */}
          <h1 className="text-4xl font-bold mb-4">Welcome to TaskFlow</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The Smart Way to Organize Your Day
          </p>

          {/* Section de présentation */}
          <h2 className="text-2xl font-semibold mb-4">
            Streamline Your Workflow
          </h2>
          <p className="mb-8">
            TaskFlow is a modern task management solution designed to simplify
            your daily routine. Whether you&apos;re managing personal projects or
            collaborating with a team, TaskFlow helps you stay organized,
            focused, and productive.
          </p>

          {/* Liste des fonctionnalités */}
          <div className="text-left mb-8">
            <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Effortless Task Management:</strong> Quickly add,
                organize, and prioritize tasks with an intuitive interface.
              </li>
              <li>
                <strong>Smart Scheduling:</strong> Set deadlines, recurring
                tasks, and reminders so you never miss a beat.
              </li>
              <li>
                <strong>Collaborative Tools:</strong> Easily share projects and
                assign tasks to team members in real time.
              </li>
              <li>
                <strong>Clean, Responsive Design:</strong> Enjoy a seamless
                experience on desktop, tablet, and mobile devices.
              </li>
            </ul>
          </div>

          {/* Call to action */}
          <h2 className="text-2xl font-semibold mb-4">
            Transform Your Productivity
          </h2>
          <p className="mb-8">
            Empower your workflow with TaskFlow and get more done every day.
            Join thousands of professionals who trust TaskFlow to turn their
            busy schedules into achievable goals.
          </p>
          <div>
            <Button variant="default" className="px-6 py-3 text-lg">
              <span>Get started</span> 
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>
    </BasicLayout>
  );
}
