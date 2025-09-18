import { Mail, Phone, MapPin, Linkedin, Github, Sparkles, Zap, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-20 bg-blue-500 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-300 rounded-full opacity-25 animate-ping"></div>
      <div className="absolute top-20 right-1/3 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-200 rounded-full opacity-80 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-200 rounded-full opacity-70 animate-bounce"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Super Creative Header */}
        <div className="text-center mb-20">
          <button 
            onClick={() => navigate('/get-in-touch')}
            className="inline-block transform rotate-2 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 p-6 rounded-2xl shadow-2xl mb-8 animate-pulse hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-7xl font-black text-white tracking-wider drop-shadow-lg relative">
              GET IN TOUCH
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-300 animate-pulse" />
              <Zap className="absolute -bottom-2 -left-2 w-6 h-6 text-pink-300 animate-bounce" />
            </h2>
          </button>
          <div className="max-w-4xl mx-auto">
            <p className="text-3xl font-bold text-yellow-300 mb-4 animate-pulse">
              "Ready to turn your data into insights?"
            </p>
          </div>
        </div>
        

        

      </div>
    </section>
  );
};

export default ContactSection;