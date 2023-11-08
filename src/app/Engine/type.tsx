export type fixtureType = {
  fixture: {
    id: number;
    venue: {
      id: number;
      name: string;
      city: string;
    };
    date: string;
    timestamp: number;
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
    };
    away: { id: number; name: string; logo: string };
  };
};

export type countryPriorityType = {
  name: string;
  priority: number;
};
