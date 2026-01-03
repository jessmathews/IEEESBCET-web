import React from 'react';
import { CalendarIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const EventsSection = () => {
  const events = [{
    id: 1,
    title: 'Technical Workshop: AI and Machine Learning',
    date: 'October 15, 2023',
    time: '2:00 PM - 5:00 PM',
    location: 'Engineering Building, Room 305',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }, {
    id: 2,
    title: 'Industry Expert Talk: Future of Robotics',
    date: 'November 5, 2023',
    time: '3:30 PM - 5:00 PM',
    location: 'Virtual Event',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }, {
    id: 3,
    title: 'Hackathon: Sustainable Tech Solutions',
    date: 'December 2-3, 2023',
    time: '9:00 AM - 5:00 PM',
    location: 'Student Center',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }];
  return <section id="events" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Upcoming Events
          </h2>
          <div className="w-20 h-1 bg-[#006699] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <div className="flex items-center mb-2 text-gray-600">
                  <CalendarIcon size={16} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center mb-2 text-gray-600">
                  <ClockIcon size={16} className="mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center mb-4 text-gray-600">
                  <MapPinIcon size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <button className="w-full bg-[#006699] text-white py-2 rounded-md hover:bg-[#005588] transition">
                  Register
                </button>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-10">
          <Link to="/events" className="inline-block border-2 border-[#006699] text-[#006699] px-6 py-2 rounded-md font-medium hover:bg-[#006699] hover:text-white transition">
            View All Events
          </Link>
        </div>
      </div>
    </section>;
};