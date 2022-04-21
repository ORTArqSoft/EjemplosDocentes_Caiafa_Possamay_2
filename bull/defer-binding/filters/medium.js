const AbstractProcess = require('./abstract-process');

class Medium extends AbstractProcess{
    run(job, next, done){
        let startTime = new Date();
        for(let i = 0; i < this.tiempoProceso(300000000,500000000); i++){}
        let endTime = new Date();
        let  timeDiff = endTime - startTime;
        //type => siguiente a procesar job.
        let result = Object.assign({}, job.data, {time:timeDiff, type:next});
        if(done){
            done(null, result);
        }
        else{
            //Promise.
            return Promise.resolve(result);
        }
    }
}

module.exports = Medium;