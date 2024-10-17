export interface Fairings {
    reused: boolean | null;
    recovery_attempt: boolean | null;
    recovered: boolean | null;
    ships: string[];
}

export interface Cores {
    core: string | null;
    flight: number | null;
    gridfins: boolean | null;
    legs: boolean | null;
    reused: boolean | null;
    landing_attempt: boolean | null;
    landing_success: boolean | null;
    landing_type: string | null;
    landpad: string | null;
}

export interface Links {
    patch: {
        small: string;
        large: string;
    };
    reddit: {
        campaign: string | null;
        launch: string | null;
        media: string | null;
        recovery: string | null;
    };
    flickr: {
        small: string[];
        original: string[];
    };
    presskit: string | null;
    webcast: string | null;
    youtube_id: string | null;
    article: string | null;
    wikipedia: string | null;
}

export interface Launch {
    fairings: Fairings;
    links: Links;
    static_fire_date_utc: string | null;
    static_fire_date_unix: number | null;
    net: boolean;
    window: number | null;
    rocket: string;
    success: boolean | null;
    failures: string[];
    details: string | null;
    crew: any[];  // You can refine this further based on what crew object looks like
    ships: string[];
    capsules: string[];
    payloads: string[];
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: 'half' | 'quarter' | 'day' | 'hour' | 'minute' | 'month' | 'year';
    upcoming: boolean;
    cores: Cores[];
    auto_update: boolean;
    tbd: boolean;
    launch_library_id: string | null;
    id: string;
}

export interface LaunchCardType {
    item: Launch
}
