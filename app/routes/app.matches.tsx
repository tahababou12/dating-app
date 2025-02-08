import { Card } from "~/components/ui/card";

const MOCK_MATCHES = [
  {
    id: 1,
    name: "Emma",
    age: 27,
    image: "https://picsum.photos/200/200",
    lastMessage: "Hey, how are you?",
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    name: "James",
    age: 30,
    image: "https://picsum.photos/200/201",
    lastMessage: "Would you like to grab coffee sometime?",
    timestamp: "1 day ago"
  },
  // Add more mock matches as needed
];

export default function Matches() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Matches</h2>
      <div className="grid gap-4">
        {MOCK_MATCHES.map((match) => (
          <Card key={match.id} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <img
                src={match.image}
                alt={match.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">
                  {match.name}, {match.age}
                </h3>
                <p className="text-sm text-gray-600">{match.lastMessage}</p>
              </div>
              <span className="text-xs text-gray-500">{match.timestamp}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
