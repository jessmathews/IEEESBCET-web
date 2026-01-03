import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarIcon, MapPinIcon, ClockIcon, PlusIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const EventsPage = () => {
  const events = [{
    id: 1,
    title: 'Technical Workshop: AI and Machine Learning',
    start: '2023-10-15',
    time: '2:00 PM - 5:00 PM',
    location: 'Engineering Building, Room 305',
    description: 'Join us for an intensive workshop on AI and Machine Learning fundamentals.',
    color: '#006699'
  }, {
    id: 2,
    title: 'Industry Expert Talk: Future of Robotics',
    start: '2023-11-05',
    time: '3:30 PM - 5:00 PM',
    location: 'Virtual Event',
    description: 'Learn about the future of robotics from industry experts.',
    color: '#006699'
  }, {
    id: 3,
    title: 'Hackathon: Sustainable Tech Solutions',
    start: '2023-12-02',
    end: '2023-12-03',
    time: '9:00 AM - 5:00 PM',
    location: 'Student Center',
    description: '48-hour hackathon focused on sustainable technology solutions.',
    color: '#006699'
  }];
  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleEventClick = clickInfo => {
    const eventId = parseInt(clickInfo.event.id);
    const event = events.find(e => e.id === eventId);
    setSelectedEvent(event);
  };
  return <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div className="text-center flex-grow">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              IEEE Events Calendar
            </h1>
            <div className="w-20 h-1 bg-[#006699] mx-auto mb-4"></div>
            <p className="text-gray-600">
              Stay up to date with all our upcoming events and activities
            </p>
          </div>
          <Link to="/events/upload" className="flex items-center gap-2 bg-[#006699] text-white px-4 py-2 rounded-md hover:bg-[#005588] transition">
            <PlusIcon size={20} />
            <span>Add Event</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <FullCalendar plugins={[dayGridPlugin, interactionPlugin]} initialView="dayGridMonth" events={events} eventClick={handleEventClick} headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
          }} height="auto" eventTimeFormat={{
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'
          }} />
          </div>
          <div className="lg:col-span-1">
            {selectedEvent ? <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedEvent.title}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <CalendarIcon size={20} className="mr-3 text-[#006699]" />
                    <span>
                      {new Date(selectedEvent.start).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ClockIcon size={20} className="mr-3 text-[#006699]" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPinIcon size={20} className="mr-3 text-[#006699]" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600">{selectedEvent.description}</p>
                  </div>
                  <button className="w-full bg-[#006699] text-white py-2 rounded-md hover:bg-[#005588] transition mt-4">
                    Register for Event
                  </button>
                </div>
              </div> : <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 text-center">
                  Select an event to view details
                </p>
              </div>}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.filter(event => new Date(event.start) >= new Date()).sort((a, b) => new Date(a.start) - new Date(b.start)).slice(0, 3).map(event => <div key={event.id} className="p-4 border rounded-lg hover:shadow-md transition cursor-pointer" onClick={() => setSelectedEvent(event)}>
                      <h4 className="font-medium text-gray-800">
                        {event.title}
                      </h4>
                      <div className="text-sm text-gray-600 mt-2">
                        {new Date(event.start).toLocaleDateString()}
                      </div>
                    </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};