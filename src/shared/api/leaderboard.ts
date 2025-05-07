import axios from "axios";
import type {ScoreboardPagedList} from "@/shared/sdk";

export const fetchLeaderboard = async (offset = 0, limit = 10) => {
    const res = await axios.get<ScoreboardPagedList | null>(`https://devgame.piggyhodl.xyz/api/User/scoreboard?Limit=${limit}&Offset=${offset}`);
    return res.data;
};