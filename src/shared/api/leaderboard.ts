import axios from "axios";

export const fetchLeaderboard = async (offset = 0, limit = 10) => {
    const res = await axios.get(`https://devgame.piggyhodl.xyz/api/User/scoreboard?Limit=${limit}&Offset=${offset}`);
    return res.data;
};