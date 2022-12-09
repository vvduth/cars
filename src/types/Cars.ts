export interface Cars {
    id : number,
    model: String  ,
    powerType: 'electric' | 'gas' ,
    tankSize: number | null , 
    topSpeed: number , 
    eConsume: number | null , 
    gasComsume : number | null 
}

export interface Touran extends Cars {
    model: "Volkwagen Touran" ,
    eConsume: 0,
    gasComsume: 8.7,
    tankSize: 55, 
    topSpeed:210 , 
    powerType: 'gas',
}

export interface ID3 extends Cars {
    model: "Volkwagen ID3" ,
    eConsume: 18.5,
    gasComsume: 0,
    tankSize: 0, 
    topSpeed:100 , 
    powerType: 'electric',
}