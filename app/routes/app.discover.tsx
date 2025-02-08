import { Card } from "~/components/ui/card";
import { useEffect, useState } from "react";

const MOCK_PROFILES = [
  {
    id: 1,
    name: "Sarah",
    age: 28,
    occupation: "Product Designer at Google",
    education: "Stanford University",
    bio: "Adventure seeker and coffee enthusiast. Love exploring new places and meeting new people. Always up for a good hike or trying out a new restaurant.",
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    ],
    distance: "5 miles away",
    interests: ["Travel", "Photography", "Hiking", "Coffee"]
  },
  {
    id: 2,
    name: "Michael",
    age: 31,
    occupation: "Software Engineer at Apple",
    education: "MIT",
    bio: "Passionate about technology and outdoor adventures. Looking for someone to share meaningful conversations and create memories with.",
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    ],
    distance: "3 miles away",
    interests: ["Tech", "Hiking", "Photography", "Music"]
  },
  {
    id: 3,
    name: "Emma",
    age: 26,
    occupation: "Marketing Manager at Netflix",
    education: "UCLA",
    bio: "Creative soul with a passion for storytelling. Looking for someone who enjoys deep conversations and spontaneous adventures.",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    ],
    distance: "7 miles away",
    interests: ["Art", "Writing", "Travel", "Film"]
  }
];

export default function Discover() {
  const [isClient, setIsClient] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="max-w-xl mx-auto px-4 py-6">
        <div className="relative h-[calc(100vh-12rem)]">
          <div className="absolute inset-0 bg-gray-100 rounded-3xl animate-pulse" />
        </div>
      </div>
    );
  }

  const profile = MOCK_PROFILES[currentProfile];

  const handleNextProfile = () => {
    setCurrentProfile((prev) => (prev + 1) % MOCK_PROFILES.length);
    setImageError(false);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <div className="relative h-[calc(100vh-12rem)]">
        <Card className="absolute inset-0 overflow-hidden rounded-3xl bg-white">
          <div className="relative h-full">
            {/* Main Image */}
            <div className="relative h-full bg-black">
              {!imageError ? (
                <img
                  src={profile.images[0]}
                  alt={profile.name}
                  className="w-full h-full object-cover opacity-95"
                  loading="eager"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <span className="text-gray-400">Image not available</span>
                </div>
              )}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/60" />
              
              {/* Profile Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="space-y-4">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                      {profile.name}, {profile.age}
                    </h1>
                    <p className="text-lg font-medium text-white/90 mt-1">
                      {profile.occupation}
                    </p>
                    <p className="text-white/80">
                      {profile.education}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-white/90 leading-relaxed">
                      {profile.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest) => (
                        <span
                          key={interest}
                          className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button 
          onClick={handleNextProfile}
          className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all border-2 border-rose-500 text-rose-500 hover:bg-rose-50"
          aria-label="Pass"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <button 
          className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
          aria-label="Super Like"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        
        <button 
          onClick={handleNextProfile}
          className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-50"
          aria-label="Like"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
