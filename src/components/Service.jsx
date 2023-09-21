import React from 'react'
import Nurse from '../assets/nurse.png';
import Event from '../assets/events.png';
import Health from '../assets/stethoscope.png';
import Care from '../assets/personal-care.png';

import ServiceCard from './ServiceCard';

const Service = () => {
    const ServiceData = [
        {
            "service": "Weekly Care",
            "image": Event,
            "desc" : "Health event"
        },
        {
            "service": "Yoga Posture Detector",
            "imgae": Care,
            "desc": "Musical event",
        },
        {
            "service": "AI Chatbot",
            "imgae": Care,
            "desc": "Musical event",
        },
        {
            "service": "Medicine Reminder",
            "imgae": Care,
            "desc": "Musical event",
        },

    ]

    return (
        <div className='grid grid-cols-3'>
            {ServiceData.map((service, id) => {
                return (
                    <ServiceCard key={id} data={service} />
                )
            })}
        </div>
    )
}

export default Service