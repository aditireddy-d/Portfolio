import { Card, CardContent } from "@/components/ui/card";
import githubLogo from "@/assets/github-logo.svg";
import linkedinLogo from "@/assets/linkedin-logo.svg";
import { getImagePath } from "@/utils/imagePath";

const AboutSection = () => {
  const resumeUrl = getImagePath("/Resume_Aditi_Reddy_2024.pdf");
  console.log('Resume URL:', resumeUrl);
  
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Transforming data into actionable insights
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm a Data Science graduate student at RIT with a Bachelor's in Artificial Intelligence and a deep curiosity for all things data.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Over the years, I've worked on projects and internships that let me explore the full data journey from data preprocessing and exploratory data analysis, to statistical modeling, machine learning, data visualization and ETL.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                I specialize in turning complex, messy data into clear, actionable insights that drive business decisions. With expertise in Python, R, SQL, and a comprehensive stack of analytics tools, I transform data into strategic value.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Let's collaborate and turn raw data into real impact.
              </p>
            </div>
          </div>
          
          {/* Contact information boxes */}
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              {/* First row - 3 boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Phone box */}
                <Card className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 text-center h-32 hover:shadow-md transition-shadow">
                  <CardContent className="space-y-3 h-full flex flex-col justify-center p-0">
                    <div className="text-2xl">📞</div>
                    <div className="text-slate-700 text-sm font-medium">+1 (917) 337-7045</div>
                  </CardContent>
                </Card>
                
                {/* Email box */}
                <Card className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 text-center h-32 hover:shadow-md transition-shadow">
                  <CardContent className="space-y-2 h-full flex flex-col justify-center p-0">
                    <div className="text-2xl">📧</div>
                    <div className="space-y-1">
                      <div className="text-slate-700 text-xs font-medium">ad7977@rit.edu</div>
                      <div className="text-slate-700 text-xs font-medium">aditidoma@gmail.com</div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Location box */}
                <Card className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 text-center h-32 hover:shadow-md transition-shadow">
                  <CardContent className="space-y-3 h-full flex flex-col justify-center p-0">
                    <div className="text-2xl">📍</div>
                    <div className="text-slate-700 text-sm font-medium">Wherever the data takes me</div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Second row - 3 boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* GitHub box */}
                <Card className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 text-center hover:shadow-md hover:border-blue-300 transition-all cursor-pointer h-32">
                  <a href="https://github.com/aditireddy-d" target="_blank" rel="noopener noreferrer" className="block h-full">
                    <CardContent className="space-y-3 h-full flex flex-col justify-center p-0">
                      <div className="flex justify-center">
                        <img src={githubLogo} alt="GitHub" className="w-10 h-10" />
                      </div>
                      <div className="text-slate-700 text-sm font-medium">GitHub</div>
                    </CardContent>
                  </a>
                </Card>
                
                {/* Resume box */}
                <Card className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 text-center hover:shadow-md hover:border-blue-300 transition-all cursor-pointer h-32">
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <CardContent className="space-y-3 h-full flex flex-col justify-center p-0">
                      <div className="text-2xl">📄</div>
                      <div className="text-slate-700 text-sm font-medium">Resume</div>
                    </CardContent>
                  </a>
                </Card>
                
                {/* LinkedIn box */}
                <Card className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 text-center hover:shadow-md hover:border-blue-300 transition-all cursor-pointer h-32">
                  <a href="https://www.linkedin.com/in/aditireddydoma/" target="_blank" rel="noopener noreferrer" className="block h-full">
                    <CardContent className="space-y-3 h-full flex flex-col justify-center p-0">
                      <div className="flex justify-center">
                        <img src={linkedinLogo} alt="LinkedIn" className="w-10 h-10" />
                      </div>
                      <div className="text-slate-700 text-sm font-medium">LinkedIn</div>
                    </CardContent>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;