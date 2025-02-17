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
            this._inputUrl = 'http://Backend-everesst-sync-test-1-env.eba-6yepturm.eu-north-1.elasticbeanstalk.com/input';
            this._syncUrl = 'http://Backend-everesst-sync-test-1-env.eba-6yepturm.eu-north-1.elasticbeanstalk.com/sync';
        }
    }

    get getInputUrl(): string {
        return this._inputUrl;
    }

    get getSyncUrl(): string {
        return this._syncUrl;
    }
}