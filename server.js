const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const rawEventData = [
    {
        id: 'talk1',
        type: 'talk',
        title: 'The Future of AI in Cloud Computing',
        speakers: ['Dr. Alice Wonderland'],
        categories: ['AI', 'Cloud', 'Future Tech'],
        duration: 60,
        description: 'Exploring the intersection of artificial intelligence and cloud infrastructure, and what the next decade holds.'
    },
    {
        id: 'talk2',
        type: 'talk',
        title: 'Advanced JavaScript Patterns',
        speakers: ['Bob The Builder'],
        categories: ['JavaScript', 'Web Development'],
        duration: 60,
        description: 'Dive deep into modern JavaScript patterns that improve code maintainability and performance.'
    },
    {
        id: 'talk3',
        type: 'talk',
        title: 'Securing Your Microservices',
        speakers: ['Charlie Security'],
        categories: ['Security', 'Microservices'],
        duration: 60,
        description: 'Best practices and common pitfalls in securing distributed microservice architectures.'
    },
    {
        id: 'lunch',
        type: 'break',
        title: 'Lunch Break',
        speakers: [],
        categories: ['Break'],
        duration: 60,
        description: 'Enjoy a delightful one-hour lunch break with fellow attendees.'
    },
    {
        id: 'talk4',
        type: 'talk',
        title: 'Data Streaming with Kafka',
        speakers: ['Diana Stream'],
        categories: ['Data Engineering', 'Kafka'],
        duration: 60,
        description: 'An introduction to Apache Kafka for real-time data pipelines and event-driven architectures.'
    },
    {
        id: 'talk5',
        type: 'talk',
        title: 'Container Orchestration with Kubernetes',
        speakers: ['Eve Deployment'],
        categories: ['DevOps', 'Kubernetes', 'Cloud'],
        duration: 60,
        description: 'Mastering the art of deploying and managing containerized applications at scale.'
    },
    {
        id: 'talk6',
        type: 'talk',
        title: 'Frontend Performance Optimization',
        speakers: ['Frank Fast'],
        categories: ['Frontend', 'Performance', 'Web Development'],
        duration: 60,
        description: 'Techniques and tools to make your web applications load faster and run smoother.'
    }
];

// Function to calculate the schedule
function getCalculatedSchedule() {
    const schedule = [];
    let currentTime = new Date();
    currentTime.setHours(10, 0, 0, 0); // Start at 10:00 AM

    rawEventData.forEach((item, index) => {
        const startTime = new Date(currentTime);
        const endTime = new Date(currentTime.getTime() + item.duration * 60 * 1000);

        schedule.push({
            ...item,
            startTime: startTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
            endTime: endTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
        });

        currentTime = endTime;

        // Add transition time if it's a talk and not the last item
        if (item.type === 'talk' && index < rawEventData.length - 1) {
            const transitionEndTime = new Date(currentTime.getTime() + 10 * 60 * 1000); // 10 min transition
            schedule.push({
                id: `transition-${index}`,
                type: 'transition',
                title: 'Transition',
                duration: 10,
                startTime: currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
                endTime: transitionEndTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
            });
            currentTime = transitionEndTime;
        }
    });

    return schedule;
}

// API endpoint to get the schedule
app.get('/api/schedule', (req, res) => {
    res.json(getCalculatedSchedule());
});

// Serve static files (index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for any other requests (SPA fallback)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
