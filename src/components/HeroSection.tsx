import heroImage from "@/assets/hero-image.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-blue-500 pt-20 relative overflow-hidden">
      {/* Bubble Effects */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cyan-300 rounded-full opacity-25 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="border-4 border-purple-600 bg-gray-800 p-8 rounded-lg">
                <h1 className="text-4xl lg:text-6xl font-bold text-pink-300 leading-tight">
                  Hey there! I am <span className="text-green-400">Aditi Reddy Doma</span> and welcome to my data story
                </h1>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-purple-600 rounded-2xl shadow-2xl p-4 h-[650px] flex items-center justify-center">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={profilePhoto} 
                  alt="Aditi Reddy Doma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;