import { Card } from "~/components/ui/card";

const MOCK_MESSAGES = [
  {
    id: 1,
    name: "Emma",
    image: "https://picsum.photos/200/200",
    messages: [
      {
        id: 1,
        text: "Hey, how are you?",
        timestamp: "2:30 PM",
        isMe: false
      },
      {
        id: 2,
        text: "I'm good, thanks! How about you?",
        timestamp: "2:31 PM",
        isMe: true
      },
      {
        id: 3,
        text: "I'm doing great! Would you like to grab coffee sometime?",
        timestamp: "2:32 PM",
        isMe: false
      }
    ]
  }
];

export default function Messages() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="h-[600px] flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center gap-4">
            <img
              src={MOCK_MESSAGES[0].image}
              alt={MOCK_MESSAGES[0].name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <h2 className="font-semibold">{MOCK_MESSAGES[0].name}</h2>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {MOCK_MESSAGES[0].messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isMe
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p>{message.text}</p>
                <span className="text-xs opacity-75 mt-1 block">
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 rounded-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
