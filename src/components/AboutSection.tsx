import { Card, CardContent } from "@/components/ui/card";
import githubLogo from "@/assets/github-logo.svg";
import linkedinLogo from "@/assets/linkedin-logo.svg";
import { getImagePath } from "@/utils/imagePath";

const AboutSection = () => {
  const resumeUrl = getImagePath("/Resume_Aditi_Reddy_2024.pdf");
  console.log('Resume URL:', resumeUrl);
  
  return (
    <section id="about" className="py-20 bg-blue-500 relative overflow-hidden">
      {/* Bubble Effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-300 rounded-full opacity-25 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-300 mb-4">About Me</h2>
          <p className="text-yellow-200 text-lg max-w-2xl mx-auto animate-pulse hover:animate-bounce transition-all duration-300 hover:text-yellow-100 hover:scale-105 font-bold tracking-wide">
            Giving silent data a voice!!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-pink-500 rounded-xl p-8 shadow-lg border-2 border-pink-600">
            <div className="space-y-6">
              <p className="text-lg text-yellow-300 leading-relaxed font-medium">
                I'm a Data Science grad student at RIT with a Bachelor's in Artificial Intelligence and a deep curiosity for all things data.
              </p>
              <p className="text-lg text-yellow-300 leading-relaxed font-medium">
                Over the years, I've dived into projects and internships that let me explore the full data journey from data preprocessing and exploratory data analysis, to statistical modeling, machine learning, data visualization and ETL.
              </p>
              <p className="text-lg text-yellow-300 leading-relaxed font-medium">
                I love turning scattered, messy data into clear, actionable insights and making sure those insights actually make sense to the people who need them. With Python, R, SQL, and a stack of analytics tools in my bag, I turn data into stories that drive decisions.
              </p>
              <p className="text-lg text-yellow-300 leading-relaxed font-medium">
                Let's team up and turn raw data into real impact.
              </p>
            </div>
          </div>
          
          {/* Contact information boxes */}
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              {/* First row - 3 boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Phone box */}
                <div className="bg-pink-500 rounded-xl p-6 shadow-lg border-2 border-pink-600 text-center h-32">
                  <div className="space-y-3 h-full flex flex-col justify-center">
                    <div className="text-3xl">📞</div>
                    <div className="text-yellow-300 text-base font-medium">+1 (917) 337-7045</div>
                  </div>
                </div>
                
                {/* Email box */}
                <div className="bg-pink-500 rounded-xl p-6 shadow-lg border-2 border-pink-600 text-center h-32">
                  <div className="space-y-3 h-full flex flex-col justify-center">
                    <div className="text-3xl">📧</div>
                    <div className="space-y-1">
                      <div className="text-yellow-300 text-sm font-medium">ad7977@rit.edu</div>
                      <div className="text-yellow-300 text-sm font-medium">aditireddy22.doma@gmail.com</div>
                    </div>
                  </div>
                </div>
                
                {/* Location box */}
                <div className="bg-pink-500 rounded-xl p-6 shadow-lg border-2 border-pink-600 text-center h-32">
                  <div className="space-y-3 h-full flex flex-col justify-center">
                    <div className="text-3xl">📍</div>
                    <div className="text-yellow-300 text-base font-medium">Based wherever the data takes me.</div>
                  </div>
                </div>
              </div>
              
              {/* Second row - 3 boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* GitHub box */}
                <div className="bg-pink-500 rounded-xl p-6 shadow-lg border-2 border-pink-600 text-center hover:bg-pink-400 transition-colors duration-300 cursor-pointer h-32">
                  <a href="https://github.com/aditireddy-d" target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="space-y-3 h-full flex flex-col justify-center">
                      <div className="flex justify-center">
                        <img src={githubLogo} alt="GitHub" className="w-12 h-12 text-white" />
                      </div>
                      <div className="text-yellow-300 text-base font-medium">GitHub</div>
                    </div>
                  </a>
                </div>
                
                {/* Resume box */}
                <div className="bg-pink-500 rounded-xl p-6 shadow-lg border-2 border-pink-600 text-center hover:bg-pink-400 transition-colors duration-300 cursor-pointer h-32">
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="space-y-3 h-full flex flex-col justify-center">
                      <div className="text-3xl">📄</div>
                      <div className="text-yellow-300 text-base font-medium">Resume</div>
                    </div>
                  </a>
                </div>
                
                {/* LinkedIn box */}
                <div className="bg-pink-500 rounded-xl p-6 shadow-lg border-2 border-pink-600 text-center hover:bg-pink-400 transition-colors duration-300 cursor-pointer h-32">
                  <a href="https://www.linkedin.com/in/aditireddydoma/" target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="space-y-3 h-full flex flex-col justify-center">
                      <div className="flex justify-center">
                        <img src={linkedinLogo} alt="LinkedIn" className="w-12 h-12 text-white" />
                      </div>
                      <div className="text-yellow-300 text-base font-medium">LinkedIn</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;