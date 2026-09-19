export interface MeetingType {
    id: string;
    name: string;
}

export interface Hymn {
    number: number;
    title: string;
}

export interface Speaker {
    name: string;
    topic: string;
}

export interface Business {
    item: string;
    details: string;
}

export interface Meeting {
    id: string;
    date: string;
    meetingType: MeetingType;
    openingHymn: Hymn;
    openingPrayer: string;
    speakers: Speaker[];
    intermediateHymn?: Hymn;
    business?: Business[];
    closingHymn: Hymn;
    closingPrayer: string;
    presiding: string;
    conducting: string;
}