export class Satellite {
name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;

shouldShowWarning(): boolean {
    // tslint:disable-next-line: quotemark
    if (this.type.toLowerCase() === "space debris") {
        return true;
    } else {
        return false;
    }
}
constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
    this.name = name;
    this.orbitType = orbitType;
    this.type = type;
    this.operational = operational;
    this.launchDate = launchDate;

}
}

