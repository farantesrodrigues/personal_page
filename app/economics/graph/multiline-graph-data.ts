/**
 * Created by fran on 10/03/16.
 */

export type RawData = [number|string]

export interface MultilineGraphDatum {
    date: string;
    r: number;
    r1: number;
    g: number;
}

export interface MultilineGraphData1 {
    series_name: string;
    series_coords: [number, number][];
}

export type MultilineGraphData = Array<MultilineGraphDatum>