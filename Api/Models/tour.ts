export interface tour{
    _id: string;
    startLocation:startLocation;
    ratingsAverage:number;
    ratingsQuantity:number;
    images:string[];
    startDate:Date[];
    secretTour:boolean;
    guides:number[];
    name:string;
    duration:number,
    maxGroupSize:number;
    difficulty:string;
    price:number;
    summary:string;
    description:string;
    imageCover:string;
    locations:object[];
    slug:string
}
interface startLocation{
    type: string;
    description: string;
    coordinates:[string,string];
    address: string;
}