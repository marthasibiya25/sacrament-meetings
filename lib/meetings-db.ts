import { neon } from "@neondatabase/serverless";
import type { Meeting, MeetingType } from "./types";

const sql = neon(process.env.DATABASE_URL!);

const ITEMS_PER_PAGE = 5;

function formatMeetingType(value: string): MeetingType {
    const names: Record<string, string> = {
        testimony: "Testimony Meeting",
        regular: "Regular Sacrament Meeting",
        stake: "Stake Meeting",
        general: "General Meeting",
        special: "Special Meeting",
    };

    return {
        id: value,
        name: names[value] ?? value,
    };
}

function mapMeeting(row: {
    id: number;
    date: string;
    meetingType: string;
    presiding: string;
    conducting: string;
    announcements: string[] | null;
    openingHymn: Meeting["openingHymn"];
    openingPrayer: string;
    wardBusiness: Meeting["business"];
    stakeBusiness: boolean | null;
    sacramentHymn: Meeting["intermediateHymn"];
    speakers: Meeting["speakers"];
    closingHymn: Meeting["closingHymn"];
    closingPrayer: string;
}): Meeting {
    return {
        id: String(row.id),
        date: row.date,
        meetingType: formatMeetingType(row.meetingType),
        openingHymn: row.openingHymn,
        openingPrayer: row.openingPrayer,
        speakers: row.speakers ?? [],
        intermediateHymn: row.sacramentHymn,
        business: row.wardBusiness ?? [],
        announcements: row.announcements ?? [],
        stakeBusiness: row.stakeBusiness ?? false,
        closingHymn: row.closingHymn,
        closingPrayer: row.closingPrayer,
        presiding: row.presiding,
        conducting: row.conducting,
    };
}

export async function getMeetings(
    query: string = "",
    currentPage: number = 1
): Promise<Meeting[]> {
    const searchTerm = `%${query}%`;
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    const rows = await sql`
        SELECT
            id,
            to_char(date, 'YYYY-MM-DD') AS date,
            meeting_type AS "meetingType",
            presiding,
            conducting,
            announcements,
            opening_hymn AS "openingHymn",
            opening_prayer AS "openingPrayer",
            ward_business AS "wardBusiness",
            stake_business AS "stakeBusiness",
            sacrament_hymn AS "sacramentHymn",
            speakers,
            closing_hymn AS "closingHymn",
            closing_prayer AS "closingPrayer"
        FROM meetings
        WHERE
            presiding ILIKE ${searchTerm}
            OR conducting ILIKE ${searchTerm}
            OR meeting_type ILIKE ${searchTerm}
            OR speakers::text ILIKE ${searchTerm}
        ORDER BY date DESC
        LIMIT ${ITEMS_PER_PAGE}
        OFFSET ${offset}
    `;

    return rows.map((row) =>
        mapMeeting(
            row as {
                id: number;
                date: string;
                meetingType: string;
                presiding: string;
                conducting: string;
                announcements: string[] | null;
                openingHymn: Meeting["openingHymn"];
                openingPrayer: string;
                wardBusiness: Meeting["business"];
                stakeBusiness: boolean | null;
                sacramentHymn: Meeting["intermediateHymn"];
                speakers: Meeting["speakers"];
                closingHymn: Meeting["closingHymn"];
                closingPrayer: string;
            }
        )
    );
}

export async function getMeetingsTotalPages(
    query: string = ""
): Promise<number> {
    const searchTerm = `%${query}%`;

    const rows = await sql`
        SELECT COUNT(*) AS count
        FROM meetings
        WHERE
            presiding ILIKE ${searchTerm}
            OR conducting ILIKE ${searchTerm}
            OR meeting_type ILIKE ${searchTerm}
            OR speakers::text ILIKE ${searchTerm}
    `;

    return Math.ceil(Number(rows[0].count) / ITEMS_PER_PAGE);
}

export async function getMeetingById(
    id: string
): Promise<Meeting | undefined> {
    const rows = await sql`
        SELECT
            id,
            to_char(date, 'YYYY-MM-DD') AS date,
            meeting_type AS "meetingType",
            presiding,
            conducting,
            announcements,
            opening_hymn AS "openingHymn",
            opening_prayer AS "openingPrayer",
            ward_business AS "wardBusiness",
            stake_business AS "stakeBusiness",
            sacrament_hymn AS "sacramentHymn",
            speakers,
            closing_hymn AS "closingHymn",
            closing_prayer AS "closingPrayer"
        FROM meetings
        WHERE id = ${Number(id)}
    `;

    if (rows.length === 0) {
        return undefined;
    }

    return mapMeeting(
        rows[0] as {
            id: number;
            date: string;
            meetingType: string;
            presiding: string;
            conducting: string;
            announcements: string[] | null;
            openingHymn: Meeting["openingHymn"];
            openingPrayer: string;
            wardBusiness: Meeting["business"];
            stakeBusiness: boolean | null;
            sacramentHymn: Meeting["intermediateHymn"];
            speakers: Meeting["speakers"];
            closingHymn: Meeting["closingHymn"];
            closingPrayer: string;
        }
    );
}

export async function getMeetingsByDate(
    date: string
): Promise<Meeting[]> {
    const rows = await sql`
        SELECT
            id,
            to_char(date, 'YYYY-MM-DD') AS date,
            meeting_type AS "meetingType",
            presiding,
            conducting,
            announcements,
            opening_hymn AS "openingHymn",
            opening_prayer AS "openingPrayer",
            ward_business AS "wardBusiness",
            stake_business AS "stakeBusiness",
            sacrament_hymn AS "sacramentHymn",
            speakers,
            closing_hymn AS "closingHymn",
            closing_prayer AS "closingPrayer"
        FROM meetings
        WHERE date = ${date}
        ORDER BY date DESC
    `;

    return rows.map(
        (row) =>
            mapMeeting(
                row as {
                    id: number;
                    date: string;
                    meetingType: string;
                    presiding: string;
                    conducting: string;
                    announcements: string[] | null;
                    openingHymn: Meeting["openingHymn"];
                    openingPrayer: string;
                    wardBusiness: Meeting["business"];
                    stakeBusiness: boolean | null;
                    sacramentHymn: Meeting["intermediateHymn"];
                    speakers: Meeting["speakers"];
                    closingHymn: Meeting["closingHymn"];
                    closingPrayer: string;
                }
            )
    );
}

export async function getAllMeetings(): Promise<Meeting[]> {
    const rows = await sql`
        SELECT
            id,
            to_char(date, 'YYYY-MM-DD') AS date,
            meeting_type AS "meetingType",
            presiding,
            conducting,
            announcements,
            opening_hymn AS "openingHymn",
            opening_prayer AS "openingPrayer",
            ward_business AS "wardBusiness",
            stake_business AS "stakeBusiness",
            sacrament_hymn AS "sacramentHymn",
            speakers,
            closing_hymn AS "closingHymn",
            closing_prayer AS "closingPrayer"
        FROM meetings
        ORDER BY date DESC
    `;

    return rows.map(
        (row) =>
            mapMeeting(
                row as {
                    id: number;
                    date: string;
                    meetingType: string;
                    presiding: string;
                    conducting: string;
                    announcements: string[] | null;
                    openingHymn: Meeting["openingHymn"];
                    openingPrayer: string;
                    wardBusiness: Meeting["business"];
                    stakeBusiness: boolean | null;
                    sacramentHymn: Meeting["intermediateHymn"];
                    speakers: Meeting["speakers"];
                    closingHymn: Meeting["closingHymn"];
                    closingPrayer: string;
                }
            )
    );
}