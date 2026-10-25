import {guideArticleTranslations} from './guideArticleTranslations';

export const guideArticles = {
  'see-who-unfollowed-you-bluesky': {
    slug: 'see-who-unfollowed-you-bluesky',
    title: 'How to See Who Unfollowed You on Bluesky',
    heroTitleStart: 'How to See',
    heroTitleAccent: 'Who Unfollowed You',
    heroTitleEnd: 'on Bluesky',
    description: 'See recent and past Bluesky unfollowers with Bluesky Tracker, and understand what the results mean.',
    eyebrow: 'Follower tracking',
    icon: 'user-minus',
    quickAnswer: 'Open the Network tab in the app and tap “They unfollowed” Use New for recent changes or All for the available history.',
    steps: [
      {
        title: 'Open your Network overview',
        description: 'Refresh your account data, then find the “They unfollowed” card on the Network tab.',
        image: '/guides/network-overview.webp',
        imageAlt: 'Bsky Tracker Network tab showing the They unfollowed card',
      },
      {
        title: 'Review your unfollowers',
        description: 'Tap the card to open the list. New shows the latest changes, while All shows the history available to the app.',
        image: '/guides/unfollowers-list.png',
        imageAlt: 'They unfollowed list in Bsky Tracker with New and All tabs',
      },
    ],
    note: {
      title: 'Keep the result in context',
      text: 'Deleted or unavailable accounts can also appear in this list, so an entry does not always mean that someone deliberately unfollowed you. Results depend on the account history available to the app.',
    },
    keywords: ['who unfollowed me on Bluesky', 'Bluesky unfollowers', 'track Bluesky unfollowers', 'Bluesky follower tracker'],
  },
  'who-doesnt-follow-back-bluesky': {
    slug: 'who-doesnt-follow-back-bluesky',
    title: 'How to Find Who Doesn’t Follow You Back on Bluesky',
    heroTitleStart: 'How to Find',
    heroTitleAccent: 'Who Doesn’t Follow You Back',
    heroTitleEnd: 'on Bluesky',
    description: 'Find the Bluesky accounts you follow that do not currently follow you back.',
    eyebrow: 'Network management',
    icon: 'users',
    quickAnswer: 'In Bluesky Tracker, open the Network tab and select “They don’t follow you back” to see the current list.',
    steps: [
      {
        title: 'Choose the non-follow-back list',
        description: 'From the Network tab, tap “They don’t follow you back.”',
        image: '/guides/network-overview.webp',
        imageAlt: 'Bsky Tracker Network tab showing the They do not follow you back card',
      },
      {
        title: 'Review the accounts',
        description: 'Open profiles individually, use Advanced Filters to narrow the list, or long-press an account to start selecting multiple users.',
        image: '/guides/non-followers-list.webp',
        imageAlt: 'List of Bluesky accounts that do not follow the user back',
      },
    ],
    note: {
      title: 'This is a current relationship check',
      text: 'This list shows who does not follow you back now. It does not by itself mean that an account previously followed and then unfollowed you.',
    },
    keywords: ['who does not follow me back on Bluesky', 'Bluesky non followers', 'Bluesky follow back checker', 'Bluesky following manager'],
  },
  'bulk-unfollow-bluesky': {
    slug: 'bulk-unfollow-bluesky',
    title: 'How to Unfollow Multiple Accounts on Bluesky',
    heroTitleStart: 'How to',
    heroTitleAccent: 'Unfollow Multiple Accounts',
    heroTitleEnd: 'on Bluesky',
    description: 'Select and unfollow multiple Bluesky accounts in one guided action with Bluesky Tracker.',
    eyebrow: 'Bulk actions',
    icon: 'list-checks',
    quickAnswer: 'Long-press an account in a supported user list, select the accounts you want, then open the menu and choose “Unfollow Selected.”',
    steps: [
      {
        title: 'Select the accounts',
        description: 'Open a user list and long-press one account to enter selection mode. Select more accounts or use Select All.',
        image: '/guides/bulk-unfollow-selection.png',
        imageAlt: 'Multiple Bluesky accounts selected with the Unfollow Selected action visible',
      },
      {
        title: 'Run the bulk action',
        description: 'Choose “Unfollow Selected,” review the confirmation, and let the action finish before leaving the screen.',
        image: '/guides/bulk-unfollow-success.png',
        imageAlt: 'Bsky Tracker confirmation that selected accounts were unfollowed successfully',
      },
    ],
    note: {
      title: 'Review before confirming',
      text: 'Bulk actions change several relationships at once. Check the selected accounts carefully and use the whitelist options for anyone you want to protect from future bulk actions.',
    },
    keywords: ['bulk unfollow Bluesky', 'unfollow multiple accounts Bluesky', 'mass unfollow Bluesky', 'manage Bluesky following'],
  },
  'find-inactive-accounts-bluesky': {
    slug: 'find-inactive-accounts-bluesky',
    title: 'How to Find Inactive Accounts on Bluesky',
    heroTitleStart: 'How to Find',
    heroTitleAccent: 'Inactive Accounts',
    heroTitleEnd: 'on Bluesky',
    description: 'Use activity-date filters to find Bluesky accounts that have not posted recently.',
    eyebrow: 'Advanced filters',
    icon: 'filter',
    quickAnswer: 'Open Advanced Filters from a follower or following list, enable Last Post Date, and choose a Before date that matches your definition of inactive.',
    steps: [
      {
        title: 'Open Advanced Filters',
        description: 'Open the followers, following, or another supported user list and tap Advanced Filters.',
        image: '/guides/advanced-filters.webp',
        imageAlt: 'Advanced User Filters screen in Bluesky Tracker',
      },
      {
        title: 'Set an activity cutoff',
        description: 'Enable Last Post Date and set Before to your chosen cutoff. You can also add Last Like Date when you want a broader activity check, then tap Apply Filters.',
        image: '/guides/inactive-account-filters.png',
        imageAlt: 'Activity and Timeline filters for last post and last like dates in Bluesky Tracker',
        caption: 'The date controls are shown here. For inactive accounts, use “Before” with your chosen cutoff date.',
      },
    ],
    note: {
      title: 'You decide what inactive means',
      text: 'Bluesky does not provide a universal inactive status. A quiet account may still be used for reading, so review the filtered results before unfollowing anyone.',
    },
    keywords: ['find inactive Bluesky accounts', 'inactive Bluesky followers', 'clean Bluesky following list', 'Bluesky activity filter'],
  },
  'see-who-blocked-you-bluesky': {
    slug: 'see-who-blocked-you-bluesky',
    title: 'How to See Who Blocked You on Bluesky',
    heroTitleStart: 'How to See',
    heroTitleAccent: 'Who Blocked You',
    heroTitleEnd: 'on Bluesky',
    description: 'Open the Blocked by list in Bluesky Tracker to review available Bluesky block records.',
    eyebrow: 'Block management',
    icon: 'shield',
    quickAnswer: 'Open the Network tab in the app and tap “Blocked by” to see the block records available for your account.',
    steps: [
      {
        title: 'Open the Blocked by section',
        description: 'Refresh the Network tab, then tap the “Blocked by” card.',
        image: '/guides/network-overview.webp',
        imageAlt: 'Bsky Tracker Network tab showing the Blocked by card',
      },
      {
        title: 'Review the available records',
        description: 'The list shows the accounts found by the tracker and the date associated with each available record.',
        image: '/guides/blocked-by-list.png',
        imageAlt: 'Blocked by list in Bluesky Tracker showing accounts and dates',
      },
    ],
    note: {
      title: 'Availability can change',
      text: 'Blocked-by information depends on the public data sources available to the app. Results may be incomplete or delayed and should be treated as an informational view, not a guaranteed lifetime record.',
    },
    keywords: ['who blocked me on Bluesky', 'see Bluesky blocks', 'Bluesky blocked by list', 'Bluesky block tracker'],
  },
};

export const guideSlugs = Object.keys(guideArticles);

export function getGuideArticle(slug, locale = 'en') {
  const guide = guideArticles[slug];
  const translation = guideArticleTranslations[locale]?.[slug];

  if (!guide || !translation) {
    return guide;
  }

  return {
    ...guide,
    ...translation,
    steps: guide.steps.map((step, index) => ({...step, ...translation.steps[index]})),
    note: {...guide.note, ...translation.note},
  };
}
