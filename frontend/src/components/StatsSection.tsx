import React from 'react';
import { UsersIcon, CalendarIcon, AwardIcon, RocketIcon } from 'lucide-react';
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface StatProps {
  target: number;
  duration?: number;
}

const Stat: React.FC<StatProps> = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && !hasAnimated) {
      let start = 0;
      const end = target;
      const stepTime = Math.max(Math.floor(duration / end), 10);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);

        if (start >= end) {
          clearInterval(timer);
          setHasAnimated(true);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, hasAnimated, target, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold">
      {count.toLocaleString()}+
    </div>
  );
};


export const StatsSection = () => {
  const stats = [{
    icon: UsersIcon,
    value: '200',
    label: 'Active Members',
    description: 'Students and faculty combined'
  }, {
    icon: CalendarIcon,
    value: '50',
    label: 'Events Conducted',
    description: 'In the past year'
  }, {
    icon: RocketIcon,
    value: '25',
    label: 'Projects Completed',
    description: 'Technical & community projects'
  }, {
    icon: AwardIcon,
    value: '15',
    label: 'Awards Won',
    description: 'Regional & national recognition'
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Impact</h2>
          <div className="w-20 h-1 bg-[#006699] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => <div key={index} className="flex flex-col items-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#006699]/10 p-4 rounded-full mb-4">
                <stat.icon size={32} className="text-[#006699]" />
              </div>
              <h3 className="text-4xl font-bold text-[#006699] mb-2">
              <Stat target={Number(stat.value)} /></h3>
              <p className="text-xl font-semibold text-gray-800 mb-1">
                {stat.label}
              </p>
              <p className="text-gray-600 text-center">{stat.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};