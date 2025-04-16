import React, { useState } from 'react';
import { XIcon, UploadIcon, CalendarIcon, ClockIcon, MapPinIcon, LinkIcon } from 'lucide-react';
interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  registrationLink: string;
  poster: File | null;
}
interface EventUploadFormProps {
  isOpen: boolean;
  onClose: () => void;
}
export const EventUploadForm = ({
  isOpen,
  onClose
}: EventUploadFormProps) => {
  const [formData, setFormData] = useState<EventFormData>({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    registrationLink: '',
    poster: null
  });
  const [posterPreview, setPosterPreview] = useState<string>('');
  const [errors, setErrors] = useState<Partial<EventFormData>>({});
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof EventFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  const handlePosterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setErrors(prev => ({
          ...prev,
          poster: 'File size should be less than 5MB'
        }));
        return;
      }
      setFormData(prev => ({
        ...prev,
        poster: file
      }));
      setPosterPreview(URL.createObjectURL(file));
      setErrors(prev => ({
        ...prev,
        poster: ''
      }));
    }
  };
  const validateForm = (): boolean => {
    const newErrors: Partial<EventFormData> = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.registrationLink.trim()) newErrors.registrationLink = 'Registration link is required';
    if (!formData.poster) newErrors.poster = 'Event poster is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      onClose();
    }
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Upload New Event
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close">
              <XIcon size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Poster Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Poster*
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md relative">
                {posterPreview ? <div className="space-y-1 text-center">
                    <img src={posterPreview} alt="Event poster preview" className="max-h-64 mx-auto" />
                    <button type="button" onClick={() => {
                  setPosterPreview('');
                  setFormData(prev => ({
                    ...prev,
                    poster: null
                  }));
                }} className="text-sm text-red-600 hover:text-red-700">
                      Remove image
                    </button>
                  </div> : <div className="space-y-1 text-center">
                    <UploadIcon className="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer rounded-md bg-white font-medium text-[#006699] hover:text-[#005588]">
                        <span>Upload a file</span>
                        <input type="file" name="poster" className="sr-only" accept="image/*" onChange={handlePosterChange} />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                  </div>}
              </div>
              {errors.poster && <p className="mt-1 text-sm text-red-600">{errors.poster}</p>}
            </div>
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Event Title*
              </label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#006699] focus:ring-[#006699] sm:text-sm" placeholder="Enter event title" />
              {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>
            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description*
              </label>
              <textarea id="description" name="description" rows={4} value={formData.description} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#006699] focus:ring-[#006699] sm:text-sm" placeholder="Enter event description" />
              {errors.description && <p className="mt-1 text-sm text-red-600">
                  {errors.description}
                </p>}
            </div>
            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date*
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CalendarIcon size={16} className="text-gray-400" />
                  </div>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} className="block w-full pl-10 rounded-md border-gray-300 focus:border-[#006699] focus:ring-[#006699] sm:text-sm" />
                </div>
                {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time*
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ClockIcon size={16} className="text-gray-400" />
                  </div>
                  <input type="time" id="time" name="time" value={formData.time} onChange={handleInputChange} className="block w-full pl-10 rounded-md border-gray-300 focus:border-[#006699] focus:ring-[#006699] sm:text-sm" />
                </div>
                {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
              </div>
            </div>
            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location*
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPinIcon size={16} className="text-gray-400" />
                </div>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} className="block w-full pl-10 rounded-md border-gray-300 focus:border-[#006699] focus:ring-[#006699] sm:text-sm" placeholder="Enter event location" />
              </div>
              {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
            </div>
            {/* Registration Link */}
            <div>
              <label htmlFor="registrationLink" className="block text-sm font-medium text-gray-700">
                Registration Link*
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LinkIcon size={16} className="text-gray-400" />
                </div>
                <input type="url" id="registrationLink" name="registrationLink" value={formData.registrationLink} onChange={handleInputChange} className="block w-full pl-10 rounded-md border-gray-300 focus:border-[#006699] focus:ring-[#006699] sm:text-sm" placeholder="https://..." />
              </div>
              {errors.registrationLink && <p className="mt-1 text-sm text-red-600">
                  {errors.registrationLink}
                </p>}
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-[#006699] text-white rounded-md hover:bg-[#005588]">
                Upload Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
};