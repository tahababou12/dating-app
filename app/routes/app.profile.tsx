import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const MOCK_PROFILE = {
  name: "John Doe",
  age: 28,
  location: "New York, NY",
  bio: "Adventure seeker and coffee enthusiast. Love traveling and meeting new people.",
  interests: ["Travel", "Photography", "Cooking", "Hiking", "Music"],
  photos: [
    "https://picsum.photos/400/400",
    "https://picsum.photos/400/401",
    "https://picsum.photos/400/402",
    "https://picsum.photos/400/403",
  ]
};

export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={MOCK_PROFILE.photos[0]}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold">
                  {MOCK_PROFILE.name}, {MOCK_PROFILE.age}
                </h2>
                <p className="text-gray-600">{MOCK_PROFILE.location}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">About Me</h3>
              <p className="text-gray-600">{MOCK_PROFILE.bio}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {MOCK_PROFILE.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Photos</h3>
              <div className="grid grid-cols-2 gap-4">
                {MOCK_PROFILE.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
