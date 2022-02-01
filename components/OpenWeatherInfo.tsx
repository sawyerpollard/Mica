import { useState, useEffect } from 'react';

import OpenWeatherMap from 'openweathermap-ts';
import { CurrentResponse } from 'openweathermap-ts/dist/types';

const openWeather = new OpenWeatherMap({ apiKey: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY as string });

export function OpenWeatherInfo({ cityId }: { cityId: number }) {
    const [response, setResponse] = useState<CurrentResponse>();

    useEffect(() => {
        (async () => {
            try {
                const response = await openWeather.getCurrentWeatherByCityId(cityId);
                setResponse(response);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    if (response?.weather) {
        const iconUrl = getIconUrl(response.weather[0].icon);
        const temp = Math.round(response.main.temp);
        return (
            <div className="flex items-center font-semibold whitespace-nowrap">
                <p>{[temp, '°F']}</p>
                <img className="object-cover object-center brightness-75 h-8" src={iconUrl} />
                <p>Amherst, MA</p>
            </div>
        );
    }

    return null;
}

function getIconUrl(iconId: string) {
    return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
}
