export type fixtureType = {
  match_id: string;
  country_id: string;
  country_name: string;
  league_id: string;
  league_name: string;
  match_date: string;
  match_status: string;
  match_time: string;
  match_hometeam_id: string;
  match_hometeam_name: string;
  match_hometeam_score: string;
  match_awayteam_name: string;
  match_awayteam_id: string;
  match_awayteam_score: string;
  match_hometeam_halftime_score: string;
  match_awayteam_halftime_score: string;
  match_hometeam_extra_score: string;
  match_awayteam_extra_score: string;
  match_hometeam_penalty_score: string;
  match_awayteam_penalty_score: string;
  match_hometeam_ft_score: string;
  match_awayteam_ft_score: string;
  match_hometeam_system: string;
  match_awayteam_system: string;
  match_live: string;
  match_round: string;
  match_stadium: string;
  match_referee: string;
  team_home_badge: string;
  team_away_badge: string;
  league_logo: string;
  country_logo: string;
  league_year: string;
  fk_stage_key: string;
  stage_name: string;
  goalscorer: {
    time: string;
    home_scorer: string;
    home_scorer_id: string;
    home_assist: string;
    home_assist_id: string;
    score: string;
    away_scorer: string;
    away_scorer_id: string;
    away_assist: string;
    away_assist_id: string;
    info: string;
    score_info_time: string;
  }[];
  cards: {
    time: string;
    home_fault: string;
    card: string;
    away_fault: string;
    info: string;
    home_player_id: string;
    away_player_id: string;
    score_info_time: string;
  }[];
  substitutions: {
    home: {
      time: string;
      substitution: string;
      substitution_player_id: string;
    }[];
    away: {
      time: string;
      substitution: string;
      substitution_player_id: string;
    }[];
  };
  lineup: {
    home: {
      starting_lineups: {
        lineup_player: string;
        lineup_number: string;
        lineup_position: string;
        player_key: string;
      }[];
      substitutes: {
        lineup_player: string;
        lineup_number: string;
        lineup_position: string;
        player_key: string;
      }[];
      coach: {
        lineup_player: string;
        lineup_number: string;
        lineup_position: string;
        player_key: string;
      }[];
      missing_players: [];
    };
    away: {
      starting_lineups: {
        lineup_player: string;
        lineup_number: string;
        lineup_position: string;
        player_key: string;
      }[];
      substitutes: {
        lineup_player: string;
        lineup_number: string;
        lineup_position: string;
        player_key: string;
      }[];
      coach: {
        lineup_player: string;
        lineup_number: string;
        lineup_position: string;
        player_key: string;
      }[];
      missing_players: [];
    };
  };
  statistics: {
    type: string;
    home: string;
    away: string;
  }[];
  statistics_1half: {
    type: string;
    home: string;
    away: string;
  }[];
};

export type predictionType = {
  match_id: string;
  country_id: string;
  country_name: string;
  league_id: string;
  league_name: string;
  match_date: string;
  match_status: string;
  match_time: string;
  match_hometeam_id: string;
  match_hometeam_name: string;
  match_hometeam_score: string;
  match_awayteam_name: string;
  match_awayteam_id: string;
  match_awayteam_score: string;
  match_hometeam_halftime_score: string;
  match_awayteam_halftime_score: string;
  match_hometeam_extra_score: string;
  match_awayteam_extra_score: string;
  match_hometeam_penalty_score: string;
  match_awayteam_penalty_score: string;
  match_hometeam_system: string;
  match_awayteam_system: string;
  match_live: string;
  prob_HW: string;
  prob_D: string;
  prob_AW: string;
  prob_HW_D: string;
  prob_AW_D: string;
  prob_HW_AW: string;
  prob_O: string;
  prob_U: string;
  prob_O_1: string;
  prob_U_1: string;
  prob_O_3: string;
  prob_U_3: string;
  prob_bts: string;
  prob_ots: string;
  prob_ah_h_45: string;
  prob_ah_a_45: string;
  prob_ah_h_35: string;
  prob_ah_a_35: string;
  prob_ah_h_25: string;
  prob_ah_a_25: string;
  prob_ah_h_15: string;
  prob_ah_a_15: string;
  prob_ah_h_05: string;
  prob_ah_a_05: string;
  "prob_ah_h_-05": string;
  "prob_ah_a_-05": string;
  "prob_ah_h_-15": string;
  "prob_ah_a_-15": string;
  "prob_ah_h_-25": string;
  "prob_ah_a_-25": string;
  "prob_ah_h_-35": string;
  "prob_ah_a_-35": string;
  "prob_ah_h_-45": string;
  "prob_ah_a_-45": string;
};

export type countryPriorityType = {
  name: string;
  priority: number;
};

export type dataMainType = {
  fixture: fixtureType;
  prediction: predictionType;
};
