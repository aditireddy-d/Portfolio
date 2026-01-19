import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getImagePath } from "@/utils/imagePath";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";


const EducationSection = () => {
  return (
    <>
      <section id="education" className="py-20 bg-blue-500 relative overflow-hidden">
      {/* Bubble Effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-300 rounded-full opacity-25 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-300 mb-4">Education</h2>
            
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Master's Degree */}
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-purple-300/30 hover:border-purple-400/50 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                      <GraduationCap className="w-7 h-7 text-purple-300" />
                      Masters in Science
                    </CardTitle>
                    <div className="flex items-center gap-4 text-purple-200 mt-3">
                      <div className="flex items-center gap-2">
                        <img 
                          src={getImagePath("/rit-logo.png")} 
                          alt="RIT Logo" 
                          className="h-8 w-8 object-contain"
                        />
                        <span className="font-semibold">Rochester Institute of Technology (RIT)</span>
                      </div>
                    </div>
                    <div className="text-purple-200 mt-2">
                      <span className="font-medium">Data Science</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-purple-200">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">2024 - 2026</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-purple-100">
                    <Award className="w-5 h-5 text-purple-300" />
                    <span className="font-medium">GPA: 3.9/4.0</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-purple-200 mb-2">Relevant Coursework:</p>
                    <p className="text-purple-100 text-sm leading-relaxed">
                      Data Science & Analytics, Database Design, Non-Relational Databases, Data Warehousing, 
                      Visual Analytics, Information Retrieval & Text Mining, Time Series Forecasting, Knowledge Discovery
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bachelor's Degree */}
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-orange-300/30 hover:border-orange-400/50 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                      <GraduationCap className="w-7 h-7 text-orange-300" />
                      Bachelor of Engineering
                    </CardTitle>
                    <div className="flex items-center gap-4 text-orange-200 mt-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        <span className="font-semibold">Mahindra University</span>
                      </div>
                    </div>
                    <div className="text-orange-200 mt-2">
                      <span className="font-medium">Artificial Intelligence</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-orange-200">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">2020 - 2024</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-orange-100">
                    <Award className="w-5 h-5 text-orange-300" />
                    <span className="font-medium">Degree in Artificial Intelligence</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-200 mb-2">Key Focus Areas:</p>
                    <p className="text-orange-100 text-sm leading-relaxed">
                      Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, 
                      Data Structures & Algorithms, Database Systems, Software Engineering
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
     </>
   );
 };

 export default EducationSection; 