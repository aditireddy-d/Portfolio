import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const programmingLanguages = [
    { name: "Python", icon: "/python-icon.png", isImage: true, color: "bg-yellow-100" },
    { name: "R", icon: "/r-icon.png", isImage: true, color: "bg-blue-100" },
    { name: "MySQL", icon: "/mysql-icon.png", isImage: true, color: "bg-orange-100" },
    { name: "Java", icon: "/java-icon.png", isImage: true, color: "bg-red-100" }
  ];

  const libraries = [
    { name: "Pandas", icon: "/pandas-icon.png", isImage: true, color: "bg-green-100" },
    { name: "NumPy", icon: "/numpy-icon.png", isImage: true, color: "bg-blue-100" },
    { name: "Scikit-Learn", icon: "/scikit-icon.png", isImage: true, color: "bg-orange-100" },
    { name: "Keras", icon: "/keras-icon.png", isImage: true, color: "bg-red-100" },
    { name: "TensorFlow", icon: "/tensorflow-icon.png", isImage: true, color: "bg-yellow-100" },
    { name: "PyTorch", icon: "/pytorch-icon.png", isImage: true, color: "bg-purple-100" }
  ];

  const toolsAndTechnologies = [
    { name: "Tableau", icon: "/tableau-icon.png", isImage: true, color: "bg-blue-100" },
    { name: "PowerBI", icon: "/powerbi-icon.png", isImage: true, color: "bg-yellow-100" },
    { name: "Seaborn", icon: "/seaborn-icon.png", isImage: true, color: "bg-pink-100" },
    { name: "Matlab", icon: "/matlab-icon.png", isImage: true, color: "bg-orange-100" },
    { name: "MySQL Workbench", icon: "/mysqlworkbench-icon.png", isImage: true, color: "bg-blue-100" },
    { name: "Machine Learning", icon: "/machinelearning-icon.png", isImage: true, color: "bg-green-100" },
    { name: "Artificial Intelligence", icon: "/ai-icon.png", isImage: true, color: "bg-purple-100" },
    { name: "LLM", icon: "/llm-icon.png", isImage: true, color: "bg-indigo-100" },
    { name: "Excel", icon: "/excel-icon.png", isImage: true, color: "bg-green-100" },
    { name: "PowerPoint", icon: "/powerpoint-icon.png", isImage: true, color: "bg-red-100" },
    { name: "Google Sheets", icon: "/googlesheets-icon.png", isImage: true, color: "bg-green-100" },
    { name: "Microsoft Word", icon: "/word-icon.png", isImage: true, color: "bg-blue-100" },
    { name: "ETL", icon: "/etl-icon.png", isImage: true, color: "bg-gray-100" },
    { name: "AWS", icon: "/aws-icon.png", isImage: true, color: "bg-orange-100" },
    { name: "Airflow", icon: "/airflow-icon.png", isImage: true, color: "bg-blue-100" },
    { name: "Visual Studio", icon: "/visualstudio-icon.png", isImage: true, color: "bg-purple-100" },
    { name: "Jupyter Notebook", icon: "/jupyter-icon.png", isImage: true, color: "bg-orange-100" },
    { name: "Git", icon: "/git-icon.png", isImage: true, color: "bg-orange-100" }
  ];

  return (
    <section id="skills" className="py-20 bg-blue-500 relative overflow-hidden">
      {/* Bubble Effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-300 rounded-full opacity-25 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-300 mb-4">Skills</h2>
        </div>
        
        <div className="space-y-16">
          {/* Programming Languages */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {programmingLanguages.map((skill, skillIndex) => (
                <Card key={skillIndex} className={`hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:scale-110 border-2 border-gray-300 hover:border-gray-400 h-32 ${skill.color} hover:bg-gradient-to-br hover:from-${skill.color.replace('bg-', '')} hover:to-${skill.color.replace('bg-', '').replace('-100', '-200')} backdrop-blur-sm relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-4 text-center relative z-10">
                    <div className="w-16 h-16 mb-2 mx-auto flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:shadow-gray-200/30 border border-gray-200">
                      {skill.isImage ? (
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <span className="text-3xl">{skill.icon}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-xs text-gray-800 transition-all duration-300 hover:text-gray-900 group-hover:scale-105 font-mono tracking-wide">{skill.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Libraries */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">Libraries</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {libraries.map((library, libraryIndex) => (
                <Card key={libraryIndex} className={`hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:scale-110 border-2 border-gray-300 hover:border-gray-400 h-32 ${library.color} hover:bg-gradient-to-br hover:from-${library.color.replace('bg-', '')} hover:to-${library.color.replace('bg-', '').replace('-100', '-200')} backdrop-blur-sm relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-4 text-center relative z-10">
                    <div className="w-16 h-16 mb-2 mx-auto flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:shadow-gray-200/30 border border-gray-200">
                      {library.isImage ? (
                        <img 
                          src={library.icon} 
                          alt={library.name}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <span className="text-3xl">{library.icon}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-xs text-gray-800 transition-all duration-300 hover:text-gray-900 group-hover:scale-105 font-mono tracking-wide">{library.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-9 gap-4 max-w-6xl mx-auto">
              {toolsAndTechnologies.map((tool, toolIndex) => (
                <Card key={toolIndex} className={`hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:scale-110 border-2 border-gray-300 hover:border-gray-400 h-32 ${tool.color} hover:bg-gradient-to-br hover:from-${tool.color.replace('bg-', '')} hover:to-${tool.color.replace('bg-', '').replace('-100', '-200')} backdrop-blur-sm relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-4 text-center relative z-10">
                    <div className="w-16 h-16 mb-2 mx-auto flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:shadow-gray-200/30 border border-gray-200">
                      {tool.isImage ? (
                        <img 
                          src={tool.icon} 
                          alt={tool.name}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <span className="text-3xl">{tool.icon}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-xs text-gray-800 leading-tight transition-all duration-300 hover:text-gray-900 group-hover:scale-105 font-mono tracking-wide">{tool.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;