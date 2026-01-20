import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getImagePath } from "@/utils/imagePath";

const SkillsSection = () => {
  const programmingLanguages = [
    { name: "Python", icon: getImagePath("/python-icon.png"), isImage: true, color: "bg-yellow-100" },
    { name: "R", icon: getImagePath("/r-icon.png"), isImage: true, color: "bg-blue-100" },
    { name: "MySQL", icon: getImagePath("/mysql-icon.png"), isImage: true, color: "bg-orange-100" },
    { name: "Java", icon: getImagePath("/java-icon.png"), isImage: true, color: "bg-red-100" }
  ];

  const libraries = [
    { name: "Pandas", icon: getImagePath("/pandas-icon.png"), isImage: true, color: "bg-green-100" },
    { name: "NumPy", icon: getImagePath("/numpy-icon.png"), isImage: true, color: "bg-blue-100" },
    { name: "Scikit-Learn", icon: getImagePath("/scikit-icon.png"), isImage: true, color: "bg-orange-100" },
    { name: "Keras", icon: getImagePath("/keras-icon.png"), isImage: true, color: "bg-red-100" },
    { name: "TensorFlow", icon: getImagePath("/tensorflow-icon.png"), isImage: true, color: "bg-yellow-100" },
    { name: "PyTorch", icon: getImagePath("/pytorch-icon.png"), isImage: true, color: "bg-purple-100" }
  ];

  const toolsAndTechnologies = [
    { name: "Tableau", icon: getImagePath("/tableau-icon.png"), isImage: true, color: "bg-blue-100" },
    { name: "PowerBI", icon: getImagePath("/powerbi-icon.png"), isImage: true, color: "bg-yellow-100" },
    { name: "Seaborn", icon: getImagePath("/seaborn-icon.png"), isImage: true, color: "bg-pink-100" },
    { name: "Matlab", icon: getImagePath("/matlab-icon.png"), isImage: true, color: "bg-orange-100" },
    { name: "MySQL Workbench", icon: getImagePath("/mysqlworkbench-icon.png"), isImage: true, color: "bg-blue-100" },
    { name: "Machine Learning", icon: getImagePath("/machinelearning-icon.png"), isImage: true, color: "bg-green-100" },
    { name: "Artificial Intelligence", icon: getImagePath("/ai-icon.png"), isImage: true, color: "bg-purple-100" },
    { name: "LLM", icon: getImagePath("/llm-icon.png"), isImage: true, color: "bg-indigo-100" },
    { name: "Excel", icon: getImagePath("/excel-icon.png"), isImage: true, color: "bg-green-100" },
    { name: "PowerPoint", icon: getImagePath("/powerpoint-icon.png"), isImage: true, color: "bg-red-100" },
    { name: "Google Sheets", icon: getImagePath("/googlesheets-icon.png"), isImage: true, color: "bg-green-100" },
    { name: "Microsoft Word", icon: getImagePath("/word-icon.png"), isImage: true, color: "bg-blue-100" },
    { name: "ETL", icon: getImagePath("/etl-icon.png"), isImage: true, color: "bg-gray-100" },
    { name: "AWS", icon: getImagePath("/aws-icon.png"), isImage: true, color: "bg-orange-100" },
    { name: "Airflow", icon: getImagePath("/airflow-icon.png"), isImage: true, color: "bg-blue-100" },
    { name: "Visual Studio", icon: getImagePath("/visualstudio-icon.png"), isImage: true, color: "bg-purple-100" },
    { name: "Jupyter Notebook", icon: getImagePath("/jupyter-icon.png"), isImage: true, color: "bg-orange-100" },
    { name: "Git", icon: getImagePath("/git-icon.png"), isImage: true, color: "bg-orange-100" }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-16">
          {/* Programming Languages */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 text-center">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {programmingLanguages.map((skill, skillIndex) => (
                <Card key={skillIndex} className="hover:shadow-md transition-all duration-300 hover:border-blue-300 border border-slate-200 h-32 bg-white relative overflow-hidden group">
                  <CardContent className="p-4 text-center relative z-10">
                    <div className="w-16 h-16 mb-2 mx-auto flex items-center justify-center bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200">
                      {skill.isImage ? (
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            console.error('Failed to load image:', skill.icon);
                            e.currentTarget.style.display = 'none';
                          }}
                          onLoad={() => console.log('Successfully loaded image:', skill.icon)}
                        />
                      ) : (
                        <span className="text-3xl">{skill.icon}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-xs text-slate-700 transition-all duration-300 font-mono tracking-wide">{skill.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Libraries */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 text-center">Libraries</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {libraries.map((library, libraryIndex) => (
                <Card key={libraryIndex} className="hover:shadow-md transition-all duration-300 hover:border-blue-300 border border-slate-200 h-32 bg-white relative overflow-hidden group">
                  <CardContent className="p-4 text-center relative z-10">
                    <div className="w-16 h-16 mb-2 mx-auto flex items-center justify-center bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200">
                      {library.isImage ? (
                        <img 
                          src={library.icon} 
                          alt={library.name}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            console.error('Failed to load image:', library.icon);
                            e.currentTarget.style.display = 'none';
                          }}
                          onLoad={() => console.log('Successfully loaded image:', library.icon)}
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
                          onError={(e) => {
                            console.error('Failed to load image:', tool.icon);
                            e.currentTarget.style.display = 'none';
                          }}
                          onLoad={() => console.log('Successfully loaded image:', tool.icon)}
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