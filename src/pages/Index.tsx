import { useState } from "react";
import { BookOpen, Calendar, MapPin, Utensils, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChatInterface } from "@/components/ChatInterface";
import { ServiceCategories } from "@/components/ServiceCategories";

const Index = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "schedules",
      title: "Class Schedules",
      description: "Find class times, room locations, and academic calendar",
      icon: Calendar,
      color: "campus-blue"
    },
    {
      id: "facilities",
      title: "Campus Facilities",
      description: "Locate buildings, labs, study spaces, and amenities",
      icon: MapPin,
      color: "campus-green"
    },
    {
      id: "dining",
      title: "Dining Services",
      description: "Meal plans, restaurant hours, and menu information",
      icon: Utensils,
      color: "campus-blue"
    },
    {
      id: "library",
      title: "Library Services",
      description: "Book reservations, study rooms, and research help",
      icon: BookOpen,
      color: "campus-green"
    },
    {
      id: "admin",
      title: "Administration",
      description: "Registration, financial aid, and student services",
      icon: Users,
      color: "campus-blue"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-slide-up">
              <MessageCircle className="h-16 w-16 mx-auto mb-6 text-white animate-float" />
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Smart Campus
                <span className="block gradient-text bg-gradient-to-r from-white to-accent-foreground bg-clip-text text-transparent">
                  Assistant
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Your AI-powered guide to campus life. Get instant answers about schedules, facilities, dining, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => setShowChat(true)}
                  className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-lg"
                >
                  Start Chatting
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10 transition-smooth"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServiceCategories 
        services={services}
        onServiceSelect={(serviceId) => {
          setSelectedService(serviceId);
          setShowChat(true);
        }}
      />

      {/* Features Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Smart Campus Assistant?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powered by advanced AI to provide accurate, instant responses to all your campus queries
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "24/7 Availability",
                description: "Get help anytime, anywhere on campus",
                icon: "🕐"
              },
              {
                title: "Instant Responses", 
                description: "No waiting in lines or office hours",
                icon: "⚡"
              },
              {
                title: "Comprehensive Knowledge",
                description: "Access to all campus services and information",
                icon: "🧠"
              }
            ].map((feature, index) => (
              <Card key={index} className="gradient-card border-0 shadow-campus transition-smooth hover:shadow-lg animate-slide-up">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      {showChat && (
        <ChatInterface 
          isOpen={showChat}
          onClose={() => {
            setShowChat(false);
            setSelectedService(null);
          }}
          selectedService={selectedService}
        />
      )}
    </div>
  );
};

export default Index;