export class Environment {
    private mode: string  = "dev"
    private _inputUrl: string
    private _syncUrl: string
    constructor (){
        if (this.mode === "dev"){
            this._inputUrl = 'http://localhost:8080/input';
            this._syncUrl = 'http://localhost:8080/sync';
        } else{
            this._inputUrl = 'Nog te bepalen';
            this._syncUrl = 'Nog te bepalen';
        }
    }

    get getInputUrl(): string {
        return this._inputUrl;
    }

    get getSyncUrl(): string {
        return this._syncUrl;
    }
}