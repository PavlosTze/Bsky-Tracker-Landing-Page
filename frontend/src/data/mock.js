export const mockData = {
  stats: {
    downloads: 5247,
    activeUsers: 3892,
    rating: 4.6,
    reviews: 347
  },
  
  testimonials: [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      content: "This app transformed how I manage my Bluesky presence. The real-time tracking is incredible - I can see exactly who unfollows me and when!"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Digital Marketer",
      content: "The bulk follow/unfollow feature saved me hours every week. Plus the analytics help me understand what content resonates with my audience."
    },
    {
      name: "Emma Thompson",
      role: "Influencer",
      content: "Privacy-first approach is what sold me. My data stays on my device, but I still get all the insights I need to grow my following."
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
      question: "Does this work with private Bluesky accounts?",
      answer: "The app respects privacy settings. For private accounts, you can only access data that's publicly available or accounts that follow you back."
    },
    {
      question: "Is there a limit to bulk follow/unfollow actions?",
      answer: "To comply with Bluesky's guidelines and prevent spam, we implement rate limiting on bulk actions. This ensures your account stays in good standing."
    },
    {
      question: "How often is the app updated?",
      answer: "We regularly update the app with new features and improvements based on user feedback. Recent updates include mute lists and improved bulk actions."
    }
  ],

  pricing: {
    free: {
      name: "Free",
      price: "$0",
      features: [
        "Basic follower tracking",
        "Up to 100 bulk actions/day", 
        "7-day history",
        "Basic analytics"
      ]
    },
    pro: {
      name: "Pro",
      price: "$4.99/month",
      features: [
        "Unlimited tracking",
        "Unlimited bulk actions",
        "Full history & analytics",
        "Advanced filters",
        "Priority support"
      ]
    }
  }
};