
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hello! Welcome to Hirtoli Driving School. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    'Course Information',
    'Pricing Details',
    'Schedule Classes',
    'Speak to Instructor'
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        message: 'Thank you for your message! A customer service representative will be with you shortly. In the meantime, you can browse our course information or call us directly at +251 911 123 456.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      message: reply,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);

    // Simulate bot response based on quick reply
    setTimeout(() => {
      let botResponse = '';
      switch (reply) {
        case 'Course Information':
          botResponse = 'We offer various courses including Basic Driving (4-6 weeks), Advanced Driving, Commercial License training, and Refresher courses. Would you like details about a specific course?';
          break;
        case 'Pricing Details':
          botResponse = 'Our Basic Course starts at 8,500 ETB, Advanced Course at 12,000 ETB. We offer flexible payment plans and student discounts. Would you like a detailed pricing breakdown?';
          break;
        case 'Schedule Classes':
          botResponse = 'We have flexible scheduling options including morning, afternoon, evening, and weekend classes. What time works best for you?';
          break;
        case 'Speak to Instructor':
          botResponse = 'I\'ll connect you with one of our instructors. Please hold while I transfer you to an available instructor.';
          break;
        default:
          botResponse = 'Let me help you with that. Can you provide more details about what you\'re looking for?';
      }

      const response = {
        id: messages.length + 2,
        type: 'bot',
        message: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-hirtoli-green hover:bg-hirtoli-green/90 shadow-lg"
          >
            <MessageCircle size={24} />
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96">
          <Card className="h-full flex flex-col shadow-xl">
            <CardHeader className="bg-hirtoli-green text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageCircle size={20} />
                  Live Chat Support
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1"
                >
                  <X size={16} />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex-1 p-0 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-hirtoli-green text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.type === 'bot' && <Bot size={16} className="mt-1 flex-shrink-0" />}
                        <div>
                          <p className="text-sm">{message.message}</p>
                          <p className={`text-xs mt-1 ${
                            message.type === 'user' ? 'text-white/80' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                        {message.type === 'user' && <User size={16} className="mt-1 flex-shrink-0" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Replies */}
              <div className="p-4 border-t">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {quickReplies.map((reply) => (
                    <Button
                      key={reply}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-hirtoli-green hover:bg-hirtoli-green/90"
                  >
                    <Send size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default LiveChat;
