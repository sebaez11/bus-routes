interface ILocation {
    name: string;
    latitude: number;
    longitude: number;
};

interface IBus {
    name: string;
    hour: Date;
};

export interface IBusStop {
    location: ILocation;
    bus: IBus;
};