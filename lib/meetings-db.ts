import { Meeting } from "./types";

export const meetings: Meeting[] = [
    {
        id: "1",
        date: "2026-05-03",
        meetingType: {
            id: "sacrament",
            name: "Sacrament Meeting",
        },
        openingHymn: {
            number: 2,
            title: "The Spirit of God",
        },
        openingPrayer: "Brother Daniel Mokoena",
        speakers: [
            {
                name: "Sister Sarah Dlamini",
                topic: "Faith in Jesus Christ",
            },
            {
                name: "Brother Thabo Maseko",
                topic: "Following the Savior",
            },
        ],
        intermediateHymn: {
            number: 85,
            title: "How Firm a Foundation",
        },
        business: [
            {
                item: "Sustaining of officers",
                details: "Members sustained new ward officers.",
            },
        ],
        closingHymn: {
            number: 219,
            title: "Because I Have Been Given Much",
        },
        closingPrayer: "Sister Ruth Nkosi",
        presiding: "Bishop David Molefe",
        conducting: "Brother Samuel Khumalo",
    },
    {
        id: "2",
        date: "2026-05-10",
        meetingType: {
            id: "sacrament",
            name: "Sacrament Meeting",
        },
        openingHymn: {
            number: 81,
            title: "Press Forward, Saints",
        },
        openingPrayer: "Sister Maria Ndlovu",
        speakers: [
            {
                name: "Brother Joseph Mthembu",
                topic: "The Book of Mormon",
            },
            {
                name: "Sister Linda Mokoena",
                topic: "The Power of Prayer",
            },
        ],
        intermediateHymn: {
            number: 85,
            title: "How Firm a Foundation",
        },
        business: [
            {
                item: "Announcements",
                details: "Ward activities and service opportunities were announced.",
            },
        ],
        closingHymn: {
            number: 152,
            title: "God Be with You Till We Meet Again",
        },
        closingPrayer: "Brother Peter Zulu",
        presiding: "Bishop David Molefe",
        conducting: "Sister Grace Dube",
    },
    {
        id: "3",
        date: "2026-05-17",
        meetingType: {
            id: "sacrament",
            name: "Sacrament Meeting",
        },
        openingHymn: {
            number: 26,
            title: "Joseph Smith's First Prayer",
        },
        openingPrayer: "Brother Michael Mokoena",
        speakers: [
            {
                name: "Sister Nomsa Khumalo",
                topic: "Service and Charity",
            },
            {
                name: "Brother Sipho Dlamini",
                topic: "The Holy Ghost",
            },
        ],
        closingHymn: {
            number: 152,
            title: "God Be with You Till We Meet Again",
        },
        closingPrayer: "Sister Emily Maseko",
        presiding: "Bishop David Molefe",
        conducting: "Brother Samuel Khumalo",
    },
    {
        id: "4",
        date: "2026-05-24",
        meetingType: {
            id: "sacrament",
            name: "Sacrament Meeting",
        },
        openingHymn: {
            number: 85,
            title: "How Firm a Foundation",
        },
        openingPrayer: "Brother John Ndlovu",
        speakers: [
            {
                name: "Sister Grace Dube",
                topic: "Families and the Gospel",
            },
            {
                name: "Brother David Zulu",
                topic: "Keeping the Sabbath Day Holy",
            },
        ],
        intermediateHymn: {
            number: 98,
            title: "I Need Thee Every Hour",
        },
        closingHymn: {
            number: 219,
            title: "Because I Have Been Given Much",
        },
        closingPrayer: "Brother Peter Zulu",
        presiding: "Bishop David Molefe",
        conducting: "Sister Grace Dube",
    },
    {
        id: "5",
        date: "2026-05-31",
        meetingType: {
            id: "sacrament",
            name: "Sacrament Meeting",
        },
        openingHymn: {
            number: 2,
            title: "The Spirit of God",
        },
        openingPrayer: "Sister Ruth Nkosi",
        speakers: [
            {
                name: "Brother Thabo Maseko",
                topic: "The Atonement of Jesus Christ",
            },
            {
                name: "Sister Sarah Dlamini",
                topic: "Living the Gospel Daily",
            },
        ],
        intermediateHymn: {
            number: 85,
            title: "How Firm a Foundation",
        },
        business: [
            {
                item: "Ward activities",
                details: "Upcoming youth and family activities were announced.",
            },
        ],
        closingHymn: {
            number: 81,
            title: "Press Forward, Saints",
        },
        closingPrayer: "Brother Daniel Mokoena",
        presiding: "Bishop David Molefe",
        conducting: "Brother Samuel Khumalo",
    },
];

export function getMeetingById(id: string): Meeting | undefined {
    return meetings.find((meeting) => meeting.id === id);
}

export function getMeetingsByDate(date: string): Meeting[] {
    return meetings.filter((meeting) => meeting.date === date);
}

export function getAllMeetings(): Meeting[] {
    return meetings;
}