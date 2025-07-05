function getTimeBasedGreeting() {
    const now = new Date();
    const hour = now.getHours();

    let timeOfDay = "";

    if (hour >= 5 && hour < 12) {
        timeOfDay = "morning";
    } else if (hour >= 12 && hour < 17) {
        timeOfDay = "afternoon";
    } else if (hour >= 17 && hour < 21) {
        timeOfDay = "evening";
    } else {
        timeOfDay = "night";
    }

    const openers = [
        "Hey there,",
        "Hi!",
        "Hello :)",
        "Yo!",
        "Greetings!",
        "Hey!",
        "What’s up?",
        "Hiya!"
    ];

    const greetings = {
        morning: [
            "Good morning! Ready to seize the day?",
            "Rise and shine — a fresh start awaits!",
            "Top of the morning to you!",
        ],
        afternoon: [
            "Hope your afternoon’s going well!",
            "A little sunshine and a lot of hustle — good afternoon!",
            "Afternoon check-in: hydrated and thriving?"
        ],
        evening: [
            "Good evening!",
            "Hope your day wrapped up nicely!",
            "Hey there, good evening! Enjoy the sunset vibes."
        ],
        night: [
            "Night owl, huh? Hope you're doing well.",
            "Late hours bring calm thoughts. Or chaos. Both are valid.",
            "Rest is important — don’t forget to log off eventually!"
        ]
    };

    const opener = openers[Math.floor(Math.random() * openers.length)];
    const dayGreeting = greetings[timeOfDay][Math.floor(Math.random() * greetings[timeOfDay].length)];
    document.getElementById("greeting").innerHTML = `${opener} ${dayGreeting}`;
}
