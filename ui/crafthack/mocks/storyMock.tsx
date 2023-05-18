import { storiesSchema, storySchema } from "@/models/storySchema";
import { z } from "zod";

export const storyMock: z.infer<typeof storiesSchema> = [
  {
    id: "1f2c3318-b26b-4036-8a54-a95a678f1d5d",
    summary: "Suspicious Phone Call Offering Free Vacation",
    userScore: 9,
    aiScore: 8.5,
    specialistOpinion: true,
    userStory:
      "Received a phone call claiming I won a free vacation. They asked for my credit card details for 'verification purposes'. I ended the call immediately.",
    postedBy: "John Doe",
    postedOn: new Date("2023-05-16T00:00:00Z"),
  },
  {
    id: "f6543a1e-c3d3-447f-a394-94583dbfb5f1",
    summary: "Strange Job Offer from Overseas",
    userScore: 9.5,
    aiScore: 8.8,
    specialistOpinion: true,
    userStory:
      "I received an unsolicited job offer from a company overseas. They claimed to have found my resume online and were impressed by my skills. The job description was vague, and they were offering a salary that seemed too high for the requirements. They insisted on having a Skype interview as soon as possible. During the interview, they never showed their faces and kept pressuring me to sign a contract and provide my bank details for the 'salary deposit'. I researched the company afterward and found very little information about them online.",
    postedBy: "Jane Smith",
    postedOn: new Date("2023-05-15T00:00:00Z"),
  },
  {
    id: "a09dbd1f-f4a8-4ad7-9762-b62f44807a7a",
    summary: "Elaborate Real Estate Scam",
    userScore: 9,
    aiScore: 9.2,
    specialistOpinion: true,
    userStory:
      "I found an amazing house listing online with a price that seemed too good to be true. I contacted the listed agent, who was very eager to close the deal quickly due to the 'high demand'. He suggested a lawyer to facilitate the transaction and urged me to deposit a 'holding fee' into an account. The account wasn't in the lawyer's or agent's name but a third party 'holding the funds in trust'. This raised red flags. I consulted with a trusted real estate agent friend who warned me that this could be an elaborate scam. I reported it to the local authorities.",
    postedBy: "Jane Smith",
    postedOn: new Date("2023-05-15T00:00:00Z"),
  },
  {
    id: "a8b4a24d-d581-4f05-80a8-4b904de92f45",
    summary: "Mystery Credit Card in Mail",
    userScore: 4,
    aiScore: 3.5,
    specialistOpinion: false,
    userStory:
      "I received a credit card in the mail that I didn't apply for. Contacted the issuer and found out that my existing card had expired and this was its replacement.",
    postedBy: "John Doe",
    postedOn: new Date("2023-05-16T00:00:00Z"),
  },
  {
    id: "c19d37c2-1c7b-48a9-8615-5d3779e8f3e4",
    summary: "Online Dating Scam",
    userScore: 8.5,
    aiScore: 9,
    specialistOpinion: true,
    userStory:
      "I met someone on an online dating site who seemed really sweet at first. We chatted for a few weeks and then they started to share some hard-luck stories. First, it was about losing a job, then about an ill relative needing expensive surgery. They never outright asked for money but hinted that they were struggling. Eventually, they mentioned not being able to afford groceries. I offered to send a small amount of money. As soon as I did, they ghosted me. I couldn't reach them anymore. I believe this was a scam, preying on people's empathy and kindness.",
    postedBy: "Jane Smith",
    postedOn: new Date("2023-05-15T00:00:00Z"),
  },
  {
    id: "a0c861d7-3db2-4ab8-8751-70bb4b17bd7f",
    summary: "Email from 'Bank' Requesting Personal Information",
    userScore: 10,
    aiScore: 9.7,
    specialistOpinion: true,
    userStory:
      "I got an email supposedly from my bank asking for my account number and password to resolve a 'security issue'. The email had lots of grammatical errors. I contacted my bank directly and they confirmed it wasn't from them.",
    postedBy: "John Doe",
    postedOn: new Date("2023-05-16T00:00:00Z"),
  },
  {
    id: "b2f2e1f4-24f2-49d3-b9ac-5d6bd2f3b890",
    summary: "Unexpected Amazon Delivery",
    userScore: 2,
    aiScore: 1.5,
    specialistOpinion: false,
    userStory:
      "I received a package from Amazon that I don't remember ordering. Contacted Amazon, and it turned out to be a gift from a friend.",
    postedBy: "Jane Smith",
    postedOn: new Date("2023-05-15T00:00:00Z"),
  },
  {
    id: "29f8e578-b503-446b-8d75-31415b024acb",
    summary: "Overpaid Check Scam on Craigslist",
    userScore: 8,
    aiScore: 8.8,
    specialistOpinion: true,
    userStory:
      "Tried to sell my old guitar on Craigslist. A buyer sent a check for over the asked price and asked to wire the extra money back. Thankfully, my bank caught it as a fraudulent check.",
    postedBy: "John Doe",
    postedOn: new Date("2023-05-16T00:00:00Z"),
  },
  {
    id: "c637c226-3b04-4af3-9331-603f98c353f0",
    summary: "Phishing Attempt via Facebook",
    userScore: 7,
    aiScore: 7.5,
    specialistOpinion: false,
    userStory:
      "Someone tried to phish my Facebook login details. They sent me a message pretending to be Facebook Support. I reported it to Facebook.",
    postedBy: "Jane Smith",
    postedOn: new Date("2023-05-15T00:00:00Z"),
  },
  {
    id: "a82e5647-942a-42c5-ae5e-f83e8f9c15ae",
    summary: "Fraudulent Investment Opportunity",
    userScore: 8.5,
    aiScore: 9,
    specialistOpinion: true,
    userStory:
      "Received an email promoting an 'exclusive' investment opportunity with a high return. Looked it up and it was connected to a known Ponzi scheme.",
    postedBy: "John Doe",
    postedOn: new Date("2023-05-16T00:00:00Z"),
  },
  {
    id: "84c8a1ae-cba6-46f5-8a45-8c19a16e0802",
    summary: "Unexpected Inheritance Scam",
    userScore: 10,
    aiScore: 9.9,
    specialistOpinion: true,
    userStory:
      "Got a letter in the mail claiming I had an inheritance from a distant relative, but I needed to send money for 'processing fees'. I don't have any relatives that match the description.",
    postedBy: "Jane Smith",
    postedOn: new Date("2023-05-15T00:00:00Z"),
  },
  {
    id: "3fa8c459-1c14-41ce-823b-c01c90fb9f2c",
    summary: "Suspicious Activity on Bank Account",
    userScore: 3,
    aiScore: 2.5,
    specialistOpinion: false,
    userStory:
      "I saw a charge on my bank account from a business I didn't recognize. Contacted the bank, and they reminded me of a recent purchase I made that was billed under a different company name.",
    postedBy: "John Doe",
    postedOn: new Date("2023-05-16T00:00:00Z"),
  },
  {
    id: "9f4f6b45-450f-4f99-9333-eebc96a8d5d8",
    summary: "Call From Unknown Number",
    userScore: 2,
    aiScore: 1.7,
    specialistOpinion: false,
    userStory:
      "Received a call from an unknown number that left a vague voicemail. It was just my doctor's office calling from a different line to confirm an appointment.",
    postedBy: "Jane Smith",
    postedOn: new Date("2023-05-15T00:00:00Z"),
  },
  {
    id: "57eead81-c059-4ad8-a5e0-ae62c26fd286",
    summary: "Fake IRS Call Demanding Immediate Payment",
    userScore: 8.7,
    aiScore: 9,
    specialistOpinion: true,
    userStory:
      "I received a phone call from someone claiming to be the IRS, stating that I owed taxes and needed to pay immediately to avoid arrest. I knew it was a scam because the IRS doesn't call to demand immediate payment.",
    postedBy: "John Doe",
    postedOn: new Date("2023-05-16T00:00:00Z"),
  },
  {
    id: "c084b4fc-5e16-4ec5-a427-46f29ef6e8b3",
    summary: "Tech Support Scam",
    userScore: 8,
    aiScore: 8.2,
    specialistOpinion: true,
    userStory:
      "A pop-up on my computer claimed it had a virus and provided a phone number for tech support. The 'support agent' requested remote access to my computer. I declined and exited the site.",
    postedBy: "Jane Smith",
    postedOn: new Date("2023-05-15T00:00:00Z"),
  },
  {
    id: "0dc2b6c9-5d34-4f85-8dbd-f6b28fe4ad8c",
    summary: "Mystery Shopping Scam",
    userScore: 7.5,
    aiScore: 7.8,
    specialistOpinion: true,
    userStory:
      "Received a job offer in my email to be a mystery shopper. They sent a check in advance but it bounced. Luckily, I didn't wire any money back as they asked.",
    postedBy: "John Doe",
    postedOn: new Date("2023-05-16T00:00:00Z"),
  },
  {
    id: "92024f1c-82a9-4c32-b570-0095e0d5b729",
    summary: "Charity Scam Following Natural Disaster",
    userScore: 9,
    aiScore: 9.5,
    specialistOpinion: true,
    userStory:
      "Following a recent natural disaster, I received an email from a supposed charity asking for donations. I looked it up and the charity doesn't exist.",
    postedBy: "Jane Smith",
    postedOn: new Date("2023-05-15T00:00:00Z"),
  },
  {
    id: "4cde7a19-38d3-4686-b1e3-0d0a1d28d733",
    summary: "Unexpected Refund From Tax Office",
    userScore: 3,
    aiScore: 2,
    specialistOpinion: false,
    userStory:
      "I received an unexpected tax refund in my bank account. It turns out, I had overpaid taxes the previous year and the tax office was returning the excess payment.",
    postedBy: "John Doe",
    postedOn: new Date("2023-05-16T00:00:00Z"),
  },
];
