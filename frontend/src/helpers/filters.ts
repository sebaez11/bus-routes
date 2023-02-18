interface IData {
    collectionId: string;
    collectionName: string;
    created: string;
    hour: string;
    id: string;
    latitude: number;
    longitude: number;
    namebus: string;
    station: string;
    updated: string;
}

// de cada station busca la hora seguiente sin pasar de la hora actual + intervalo de tiempo
export const filterByTimeInterval = (data: IData[], hour: string, interval: number) => {

    const hourToMinutes = (hour: string) => {
        const [hours, minutes] = hour.split(':');
        return Number(hours) * 60 + Number(minutes);
    }
    
    const minutes = hourToMinutes(hour);
    
    const filtered = data.filter((item: any) => {
        const itemMinutes = hourToMinutes(item.hour);
        return itemMinutes >= minutes && itemMinutes <= minutes + interval;
    });

    // ordernar por hora
    filtered.sort((a: any, b: any) => {
        const aMinutes = hourToMinutes(a.hour);
        const bMinutes = hourToMinutes(b.hour);
        return aMinutes - bMinutes;
    });
    
    const noRepeatStation = filtered.filter((item: any, index: number) => {
        return filtered.findIndex((item2: any) => item2.station === item.station) === index;
    });

    return noRepeatStation;
}