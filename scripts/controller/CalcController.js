class CalcController{

    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.inicialize();
    }

    inicialize(){

                    this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });

        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTimeEl(){
        return this._timeEl.innerHTML;

    }

    set displayTimeEl(value){
        return this._displayTimeEl.innerHTML = value;
    }

    get displayDateEl(){
        return this._dateEl.innerHTML;
    }

    set displayDateEl(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalc.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}