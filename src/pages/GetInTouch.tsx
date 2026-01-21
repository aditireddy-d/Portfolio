import { Mail, Phone, MapPin, Linkedin, Github, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GetInTouch = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: (
        <div>
          <div>ad7977@rit.edu</div>
          <div className="mt-2">aditidoma@gmail.com</div>
        </div>
      ),
      link: "mailto:ad7977@rit.edu",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "917-337-7045",
      link: "tel:+19173377045",
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Wherever the data takes me",
      link: "#",
      color: "text-blue-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Connect with me on LinkedIn",
      link: "https://linkedin.com/in/aditireddydoma",
      color: "text-blue-500"
    },
    {
      icon: Github,
      title: "GitHub",
      content: "Check out my code repositories",
      link: "https://github.com/aditireddy-d",
      color: "text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Ready to turn your data into insights?
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Let's connect and discuss how I can help you with your data science and analytics needs.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-lg p-8 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-6 ${info.color}`}>
                    <info.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{info.title}</h3>
                  <div className="text-slate-300 mb-6 min-h-[3rem] flex items-center justify-center">
                    {typeof info.content === 'string' ? (
                      <p>{info.content}</p>
                    ) : (
                      info.content
                    )}
                  </div>
                  {info.link !== "#" && (
                    <Button
                      onClick={() => window.open(info.link, '_blank')}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
                    >
                      {info.title === "Location" ? "View Location" : `Visit ${info.title}`}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-slate-900 rounded-lg p-12 border border-slate-800">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
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
