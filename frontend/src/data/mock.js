export const mockData = {
  stats: {
    downloads: 10247,
    activeUsers: 4156,
    rating: 4.7,
    reviews: 452
  },
  
  testimonials: [
    {
      name: "Alex Johnson",
      role: "Bluesky User",
      content: "This is such a cool and powerful tool to manage your bluesky account and it is totally free! It is also rapidly growing and adding new features! I love this thing and keep recommending it to everyone!"
    },
    {
      name: "Sarah Davis", 
      role: "Content Creator",
      content: "Love this app! Makes keeping track of my followers, who hasn't followed me back yet, and who I need to follow. Also see who blocks you. Has a follow all option or you can check each individually. Makes keeping track SO much easier."
    },
    {
      name: "Mike Thompson",
      role: "Social Media User",
      content: "This app does exactly what I need without any fuss. I can easily see who unfollowed me (most because of account suspensions and deactivations) and who I'm not following. Simple to use and reliable. Can't say enough."
    },
    {
      name: "Jordan Wilson",
      role: "Digital Marketer", 
      content: "Terrific app for checking out your followers and unfollowers on Bluesky. Links back to the app so you can decide what you want to do with those peeps. Has a handy feature that shows you who doesn't follow YOU back and also THOSE people who you Don't follow back. Within that feature it has an option for you to Bulk Unfollow or Follow those profiles. Great app. Kudos Devs!"
    },
    {
      name: "Casey Martinez",
      role: "Influencer",
      content: "Tracker-Manager is invaluable. I would be lost without it. I can't imagine how else I could get a handle on who's following and who isn't. The app is ingeniously designed and blessed with a developer who actually listens to users. Highly recommended!"
    }
  ],

  features: {
    tracking: {
      followers: 1250,
      unfollowers: 45,
      newToday: 23,
      blockedBy: 12
    },
    analytics: {
      engagementRate: 8.7,
      topPost: {
        likes: 456,
        reposts: 89,
        replies: 67
      },
      weeklyGrowth: 12.3
    },
    relationships: {
      mutualFollows: 892,
      notFollowingBack: 156,
      recentActivity: [
        { user: "@johndoe", action: "followed", time: "2 min ago" },
        { user: "@janesmth", action: "unfollowed", time: "5 min ago" },
        { user: "@creator99", action: "blocked", time: "10 min ago" }
      ]
    }
  },

  faq: [
    {
      question: "Is my Bluesky data safe and private?",
      answer: "Absolutely! We follow a privacy-first approach. Your data is never stored on our servers or shared with third parties. Everything stays secure on your device."
    },
    {
      question: "How accurate is the follower tracking?",
      answer: "Our tracking is real-time and highly accurate. We update follower changes within minutes, giving you the most current information about your network."
    },
    {
      question: "Can I track other users' followers and analytics?",
      answer: "Yes! You can analyze any public Bluesky user's followers, following lists, and post performance to understand their strategies and discover new connections."
    },
    {
      question: "Is there a limit to bulk follow/unfollow actions?",
      answer: "To comply with Bluesky's guidelines and prevent spam, we implement rate limiting on bulk actions. This ensures your account stays in good standing."
    }
  ],

  additionalReviews: [
    {
      name: "Jordan Wilson",
      role: "Digital Marketer", 
      content: "Terrific app for checking out your followers and unfollowers on Bluesky. Links back to the app so you can decide what you want to do with those peeps. Has a handy feature that shows you who doesn't follow YOU back and also THOSE people who you Don't follow back. Within that feature it has an option for you to Bulk Unfollow or Follow those profiles. Great app. Kudos Devs!"
    },
    {
      name: "Casey Martinez",
      role: "Influencer",
      content: "Tracker-Manager is invaluable. I would be lost without it. I can't imagine how else I could get a handle on who's following and who isn't. The app is ingeniously designed and blessed with a developer who actually listens to users. Highly recommended!"
    }
  ]
};