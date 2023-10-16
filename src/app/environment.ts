export class Environment {
//     private _mode: string  = "dev"
    private _mode: string  = "prod"
    private _inputUrl: string
    private _syncUrl: string
    constructor (){
        if (this._mode === "dev"){
            this._inputUrl = 'http://localhost:5000/input';
            this._syncUrl = 'http://localhost:5000/sync';
        } else{
            this._inputUrl = 'https://temposync-everesst.upcycle.gratis/input';
            this._syncUrl = 'https://temposync-everesst.upcycle.gratis/sync';
        }
    }

    get getInputUrl(): string {
        return this._inputUrl;
    }

    get getSyncUrl(): string {
        return this._syncUrl;
    }
}