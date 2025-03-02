export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#hero',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];


export const myProjects = [
    {
        title: 'Digital Lock and Key',
        company: 'Atsuya Technologies Pvt Ltd',
        date: 'June-July 2024',
        desc: ' A secure digital lock system using STSAFE A110 and ESP32 , featuring **enhanced encryption, subscription-based keys, and controlled access management** for robust data protection.',
        subdesc:
            'Developed a secure digital lock system using STSAFE A110 and ESP32. Enhanced security and control over digital lock access management.\n' +
            'Improved encryption and optimized key management for data integrity. Implemented encryption, subscription-based keys, and Arduino IDE integration. Ensured secure, controlled digital lock access with robust data protection.',
        href: "public/Report.pdf",
        texture: '/textures/project/giphy.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#000000 ',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #000000 ',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'C',
                path: '/assets/c-1.webp',
            },
            {
                id: 2,
                name: 'Arduino IDE',
                path: '/assets/Arduino_Logo.webp',
            },
            {
                id: 3,
                name: 'ST Microelectronis',
                path: '/assets/stmicroelectronics-ezgif.com-webp-to-png-converter.png',
            },

        ],
    },

    {
        title: 'Comment Toxicity Detection',
        company: 'Self-Initiated Project',
        date: 'December 2024',
        desc: 'An AI solution for real-time detection and classification of toxic comments, enhancing online safety and user experience by identifying harmful content using LLM techniques.',
        subdesc:
            'This project integrates advanced Natural Language Processing (NLP) techniques and AI models to classify comments as toxic or non-toxic, and categorize them based on toxicity type (e.g., insults, profanity, hate speech, etc.).\n' +
            '\n' +
            'With a user-friendly Streamlit interface, users can easily input comments and receive instant feedback on the toxicity and its type. It uses the Meta-Llama-3.1-8B-Instruct-Turbo model for precise analysis.\n' +
            '\n',
        href: 'public/textures/project/project2.mp4',
        texture: 'public/textures/project/project2.mp4',
        logo: 'public/assets/comment toxicitiy detection logo  copy 2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: 'public/assets/PYTHON .png',
            },
            {
                id: 2,
                name: 'AI',
                path: 'public/assets/AI .png',
            },
            {
                id: 3,
                name: 'StreamLit',
                path: 'public/assets/streamlit .png',
            },
            {
                id: 4,
                name: 'oLamma',
                path: 'public/assets/ollama.png',
            },
        ],
    },


    {
        title: 'Custom Cattle Pet-Feeder',
        company: 'Academic Project',
        date: 'January-May 2024',
        desc: 'Developed an IoT-based automatic pet feeder with real-time monitoring and adaptive\n' +
            'feeding.',
        subdesc:
            'Revolutionized livestock management with precise data collection and real-time\n' +
            'monitoring.\n' +
            'Enhanced livestock health and sustainability through an efficient feeding system.\n' +
            'Engineered the feeder using machine learning to adjust feeding patterns based on\n' +
            'data analysis.\n' +
            'Improved livestock health management, promoting sustainable farming and optimal\n' +
            'pet nutrition.',
        href: 'public/petfeeder.pdf',
        texture: 'public/textures/project/petfeeder_QmgalOHL.mp4',
        logo: 'public/assets/petfeeder.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Arduino IDE',
                path: 'public/assets/Arduino_Logo.webp',
            },
            {
                id: 2,
                name: 'C',
                path: 'public/assets/c-1.webp',
            },

        ],
    },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Programming Languages',
        title: "C, Python , C++",
        icon: 'public/assets/programming.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Development',
        title: "Machine Learning , Gen AI , LLMs , IOT ",
        icon: 'public/assets/machine-learning.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Database',
        title: "PostgreSQL",
        icon: 'public/assets/database.png',
        animation: 'salute',
    },
    {
        id: 4,
        name: 'Version Control and Collaboration',
        title: "Git and Github ",
        icon: 'public/assets/merge.png',
        animation: 'salute',
    },

];