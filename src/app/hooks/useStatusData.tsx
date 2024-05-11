import { useEffect, useState } from "react";
import { RedisClient } from "../../lib/redis-client";

const redis = RedisClient();

type StatusType = "success" | "fail" | "missing";

type StatusDataType = {
  time: string;
  ping: number;
  status: StatusType;
};

type DailyStatusDataType = {
  name: string;
  pv: number;
  ping: number;
  time: string;
  status: StatusType;
};

type MonthlyStatusDataType = {
  time: string;
  pv: number;
  avg_ping: string;
  totalCheck: number;
  successfulCheck: number;
  status: StatusType;
};

export function useStatusData({ url }: { url: string }) {
  const [dailyStatusData, setDailyStatusData] = useState<DailyStatusDataType[]>(
    []
  );
  const [monthlyAverage, setMonthlyAverage] = useState<MonthlyStatusDataType[]>(
    []
  );

  const [isOperational, setIsOperational] = useState<boolean>(true);

  const getStatusData = async () => {
    if (!url) {
      fillMockData();
      return;
    }
    getDailyStatusData();
    await getDailyAverage(new Date().toISOString());
    await getMonthlyData(new Date().toISOString());
  };

  useEffect(() => {
    if (!url) {
      fillMockData();
      return;
    }
    const init = async () => {
      await getDailyStatusData();
      await getMonthlyData(new Date().toISOString());
    };
    init();
  }, []);

  useEffect(() => {
    const intervalID = setInterval(getStatusData, 1000 * 60 * 10);
    return () => clearInterval(intervalID);
  });

  const defaultData: DailyStatusDataType = {
    name: "status_data",
    pv: 2400,
    ping: 0,
    time: "0",
    status: "missing",
  };

  const getDailyStatusData = async () => {
    const startOfDay = new Date();
    startOfDay.setUTCHours(0, 0, 0, 0);
    const startTime = startOfDay.getTime();

    const endOfDay = new Date();
    endOfDay.setUTCHours(23, 59, 59, 999);
    const endTime = endOfDay.getTime();

    const result = await redis.zrange<StatusDataType[]>(
      `daily_status:${url}`,
      startTime,
      endTime,
      {
        byScore: true,
      }
    );

    const newDailyStatusData = [];

    result.reverse().forEach((data: StatusDataType) => {
      newDailyStatusData.push({
        name: "status_data",
        pv: 2400,
        ping: data.ping,
        time: data.time,
        status: data.status,
      } as DailyStatusDataType);
    });

    let dailyAverageSum = 0;
    let dailyTotalCheck = 0;
    let dailySuccessfulCheck = 0;
    result.forEach((data: StatusDataType) => {
      dailyAverageSum += data.ping;
      dailyTotalCheck += 1;
      if (data.status === "success") {
        dailySuccessfulCheck += 1;
      }
    });

    const dailyAverage = dailyAverageSum / result.length;

    while (newDailyStatusData.length < 30) {
      newDailyStatusData.push(defaultData);
    }

    setDailyStatusData(newDailyStatusData.reverse());

    setIsOperational(
      newDailyStatusData.at(newDailyStatusData.length - 1)?.status === "success"
    );

    setDailyAverage(
      dailyAverage,
      dailyTotalCheck,
      dailySuccessfulCheck,
      new Date().toISOString()
    );
    return result;
  };

  const setDailyAverage = async (
    dailyAverage: number,
    totalCheck: number,
    successfulCheck: number,
    time: string
  ) => {
    const date = new Date(time);

    date.setHours(0, 0, 0, 0);
    const dayKey = date.getTime();

    const dailyAverageData = {
      avg_ping: dailyAverage.toFixed(0),
      totalCheck: totalCheck,
      successfulCheck: successfulCheck,
      status:
        totalCheck == 0
          ? "missing"
          : (totalCheck * 3) / 4 < successfulCheck
          ? "success"
          : "fail",
    };

    const jsonExists = await redis.json.type(
      `daily_status_json:${url}`,
      `$.${dayKey}`
    );

    if (!jsonExists) {
      await redis.json.set(`daily_status_json:${url}`, "$", JSON.stringify({}));
    }
    await redis.json.set(
      `daily_status_json:${url}`,
      `$.${dayKey}`,
      JSON.stringify(dailyAverageData)
    );
  };

  const getDailyAverage = async (time: string) => {
    const now = new Date(time);

    now.setHours(0, 0, 0, 0);
    const endTime = now.getTime();

    const path = `$.${endTime}`;

    const result = await redis.json.get(`daily_status_json:${url}`, path);

    const newMonthlyAverageData = monthlyAverage.slice(0, -1);

    const newTodayAverageData = {
        time: endTime.toString(),
        pv: 2400,
        avg_ping: (result as MonthlyStatusDataType).avg_ping,
        totalCheck: (result as MonthlyStatusDataType).totalCheck,
        successfulCheck: (result as MonthlyStatusDataType).successfulCheck,
        status: (result as MonthlyStatusDataType).status,
    };

    if (!newTodayAverageData) return;

    newMonthlyAverageData.push(newTodayAverageData);

    setMonthlyAverage(newMonthlyAverageData);

    return result;
  };

  const getMonthlyData = async (time: string) => {
    const today = new Date(time);
    today.setHours(0, 0, 0, 0);
  
    const path = `$`;
  
    const result = await redis.json.get(`daily_status_json:${url}`, path);
  
    const newMonthlyData: MonthlyStatusDataType[] = result ? Object.keys(result).map(
      (key) => {
        console.log(key, today);
        return {
          time: key,
          pv: 2400,
          avg_ping: (result as MonthlyStatusDataType).avg_ping,
          totalCheck: (result as MonthlyStatusDataType).totalCheck,
          successfulCheck: (result as MonthlyStatusDataType).successfulCheck,
          status: (result as MonthlyStatusDataType).status,
        };
      }
    ) : [];

    newMonthlyData
      .sort((a, b) => parseInt(a.time) - parseInt(b.time))
      .reverse();

    while (newMonthlyData.length < 30) {
      newMonthlyData.push({
        time: "0",
        pv: 2400,
        avg_ping: "0",
        totalCheck: 0,
        successfulCheck: 0,
        status: "missing",
      });
    }

    setMonthlyAverage(newMonthlyData.reverse());
  };

  const fillMockData = () => {
    while (dailyStatusData.length < 30) {
      dailyStatusData.push(defaultData);
    }

    while (monthlyAverage.length < 30) {
      monthlyAverage.push({
        time: "0",
        pv: 2400,
        avg_ping: "0",
        totalCheck: 0,
        successfulCheck: 0,
        status: "missing",
      });
    }
  };

  return { getStatusData, dailyStatusData, monthlyAverage, isOperational };
}