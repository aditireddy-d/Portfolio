import { Mail, Phone, MapPin, Linkedin, Github, Sparkles, Zap, Heart, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GetInTouch = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "ad7977@rit.edu",
      link: "mailto:ad7977@rit.edu",
      color: "text-blue-300"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "917-337-7045",
      link: "tel:+19173377045",
      color: "text-green-300"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "USA",
      link: "#",
      color: "text-pink-300"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Connect with me on LinkedIn",
      link: "https://linkedin.com/in/aditireddydoma",
      color: "text-cyan-300"
    },
    {
      icon: Github,
      title: "GitHub",
      content: "Check out my code repositories",
      link: "https://github.com/aditireddy-d",
      color: "text-purple-300"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-500 relative overflow-hidden">
      {/* Bubble Effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-300 rounded-full opacity-25 animate-ping"></div>
      <div className="absolute top-20 right-1/3 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-200 rounded-full opacity-80 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-200 rounded-full opacity-70 animate-bounce"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block transform rotate-2 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 p-6 rounded-2xl shadow-2xl mb-8 animate-pulse">
            <h1 className="text-7xl font-black text-white tracking-wider drop-shadow-lg relative">
              GET IN TOUCH
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-300 animate-pulse" />
              <Zap className="absolute -bottom-2 -left-2 w-6 h-6 text-pink-300 animate-bounce" />
            </h1>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-3xl font-bold text-yellow-300 mb-4 animate-pulse">
              "Ready to turn your data into insights?"
            </p>
            <p className="text-xl text-cyan-200 mb-8">
              Let's connect and discuss how I can help you with your data science and analytics needs!
            </p>
          </div>
        </div>

        {/* Contact Information Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 ${info.color}`}>
                    <info.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{info.title}</h3>
                  <p className="text-cyan-200 mb-6">{info.content}</p>
                  {info.link !== "#" && (
                    <Button
                      onClick={() => window.open(info.link, '_blank')}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {info.title === "Location" ? "View Location" : `Visit ${info.title}`}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <Heart className="w-16 h-16 text-pink-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together!
            </h2>
            <p className="text-xl text-cyan-200 mb-8 max-w-3xl mx-auto">
              Whether you need help with data analysis, machine learning models, or building data-driven solutions, 
              I'm excited to collaborate and bring your ideas to life with the power of data science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
